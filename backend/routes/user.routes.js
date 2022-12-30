const router = require('express').Router()
const User = require('../models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const verify = require('../helpers/verifyToken')
const uploadImg = require('../helpers/uploadImg')
const { registerValidation, loginValidation } = require('../helpers/validation')

// User creation with validation
router.post('/signup', async (req, res) => {
  //Validate
  const { error } = registerValidation(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  //Validate email
  const emailExist = await User.findOne({ email: req.body.email })
  if (emailExist) return res.status(400).send('Email exist!')

  // //Validate password
  // const passwordExist = await User.findOne({ password: req.body.password })
  // if (passwordExist) return res.status(400).send('Password exist!')

  //Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(req.body.password, salt)

  const user = new User({
    email: req.body.email,
    password: hashedPassword,
    name: req.body.name,
    role: req.body.role,
  })

  try {
    await user.save()
    res.send({ user: user._id })
  } catch (err) {
    res.status(400).send(err)
  }
})

// User signin
router.post('/signin', async (req, res) => {
  //
  const { error } = loginValidation(req.body)
  if (error) return res.status(400).send(error.details[0].message)
  //
  const foundUser = await User.findOne({ email: req.body.email }).lean()
  if (!foundUser) return res.status(400).send('Incorrect email!')
  //
  const validPassword = await bcrypt.compare(
    req.body.password,
    foundUser.password
  )
  if (!validPassword) return res.status(400).send('Invalid password!')

  //Create token
  const token = jwt.sign(
    {
      _id: foundUser._id,
      role: foundUser.role,
    },
    process.env.TOKEN_SECRET,
    { expiresIn: '12h' }
  )
  foundUser.token = token
  res.status(200).json(foundUser)
})

// Get all users
router.get('/getUsers', async (req, res) => {
  try {
    const gotUsers = await User.find()
    res.json(gotUsers)
  } catch (error) {
    res.json({ message: error })
  }
})

// Get user by a specific ID
router.get('/getUser/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId)
    res.json(user)
  } catch (error) {
    res.json({ message: error })
  }
})

// Delete specific users (all if necessary) by ID
router.delete('/:userId', async (req, res) => {
  try {
    await User.remove({ _id: req.params.userId }) //Mongo generates id by this format
    res.json('User removed!')
  } catch (error) {
    res.json({ message: error })
  }
})

// Find user by ID and update said user's attributes
router.put('/updateProfile/:userId', verify, async (req, res) => {
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(req.body.password, salt)

  try {
    const updatedUser = await User.updateOne(
      {
        _id: req.params.userId,
      },
      {
        $set: {
          email: req.body.email,
          password: hashedPassword,
          name: req.body.name,
        },
      }
    )
    res.json(updatedUser)
  } catch (error) {
    res.json({ message: error })
  }
})

// Upload profile image to cloudinary
router.post('/uploadImage', uploadImg.single('image'), async (req, res) => {
  const userImg = new User({
    profileImg: req.file.path,
  })

  try {
    await userImg.save()
    res.send({ profileImg: req.file.path })
  } catch (error) {
    res.status(400).send(error)
  }
})

// Update profile picture
router.patch(
  '/updateImage',
  verify,
  uploadImg.single('image'),
  async (req, res) => {
    try {
      await User.updateOne(
        {
          _id: req.params._id,
        },
        {
          $set: {
            profileImg: req.file.path,
          },
        }
      )
      res.send(req.file.path)
    } catch (error) {
      res.json({ message: error })
    }
  }
)

/*Long Boi's relic*/

// const getAllUsers = async (req, res) => {
//   try {
//     const users = await User.find()
//     res.status(200).json(users)
//   } catch (error) {
//     res.status(404).json({ message: error.message })
//   }
// }

// const getOneUser = async (req, res) => {
//   const { id: userId } = req.param
//   try {
//     const user = await User.findOne({ _id: userId })
//     res.status(200).json({ user })
//   } catch (error) {
//     res.status(404).json({ mess: error.message })
//   }
// }

// const createUser = async (req, res) => {
//   console.log(req.body)
//   const user = new User({
//     username: req.body.username,
//     email: req.body.email,
//     isTeacher: req.body.isTeacher,
//   })

//   try {
//     await user.save()
//     res.status(200).json({ user })
//   } catch (error) {
//     res.status(400).json({ message: error.message })
//   }
// }

// const deleteUser = async (req, res) => {
//   const { id: userId } = req.param
//   const user = await User.findOne({ _id: userId })

//   try {
//     await user.remove()
//     res.status(200).json({ message: 'food deleted' })
//   } catch {
//     res.status(400).json({ message: 'No food with id found' })
//   }
// }

// const updateUser = async (req, res) => {
//   const { id } = req.body
//   const foundUser = await User.findOne({ _id: id })
//   if (foundUser || foundUser.length == 0) {
//     const response = await foundUser.updateOne({ _id: id })
//     res.status(301).json(response)
//   } else {
//     res.status(404).json({ message: `User not found...` })
//   }
// }

/*Long Boi's relic*/

module.exports = router

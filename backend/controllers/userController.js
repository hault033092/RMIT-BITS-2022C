const User = require("../models/user");

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users)
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

const getOneUser = async (req, res) => {
    const {id: userId} = req.param
    try {
        const user = await User.findOne({_id: userId});
        res.status(200).json({ user });
    } catch(error) {
        res.status(404).json({mess: error.message})
    }
}

const createUser = async (req, res) => {
    console.log(req.body);
    const user = new User({
        username : req.body.username,
        email : req.body.email,
        isTeacher: req.body.isTeacher
    })

    try {
        await user.save();
        res.status(200).json({user});
    } catch(error) {
        res.status(400).json({message: error.message});
    }
}

const deleteUser = async (req, res) => {
    const {id: userId} = req.param;
    const user = await User.findOne({_id: userId});
    
    try{
        await user.remove();
        res.status(200).json({message: 'food deleted'})
    } catch {
        res.status(400).json({message: 'No food with id found'});
    }

} 

const updateUser = async (req, res) => {
    const {id} = req.body;
    const foundUser = await User.findOne({_id: id});
    if(foundUser || foundUser.length == 0) {
        const response = await foundUser.updateOne({_id: id});
        res.status(301).json(response);
    } else {
    res.status(404).json({message: `User not found...`});
    }
}

module.exports = {
    getAllUsers,
    getOneUser,
    createUser,
    deleteUser,
    updateUser
}
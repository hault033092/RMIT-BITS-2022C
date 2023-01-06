const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
      max: 1024,
      min: 6,
    },

    name: { type: String },

    // role: {
    //   type: String,
    //   default: 'LEARNER',
    // },

    // Learner
    coursesTaken: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Course',
      },
    ],

    // Teacher
    coursesUploaded: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Course',
      },
    ],
  },
  {
    timestamp: true,
  }
)

module.exports = mongoose.model('User', userSchema)

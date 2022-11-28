import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
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

    profileImg: { type: String },

    role: {
      type: String,
      default: 'LEARNER',
    },

    // Learner
    coursesTaken: [
      {
        type: mongoose.Types.ObjectID,
      },
    ],

    // Teacher
    coursesUploaded: [
      {
        type: mongoose.Types.ObjectID,
      },
    ],
  },
  {
    timestamp: true,
  }
)

export default mongoose.model('User', UserSchema)

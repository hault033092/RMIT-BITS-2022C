const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema(
  {
    courseTitle: {
      type: String,
      required: true,
    },
    courseImg: { type: String },
    courseType: {
      type: String,
      required: true,
    },
    courseDetail: {
      type: String,
      required: true,
    },

    // Visual

    // Text
  },
  { timestamp: true }
)

module.exports = mongoose.model('Course', courseSchema)

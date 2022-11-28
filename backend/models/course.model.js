const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema(
  {
    courseName: {
      type: String,
      required: true,
    },
    courseType: {
      type: String,
      required: true,
    },
  },
  { timestamp: true }
)

module.exports = mongoose.model('Course', courseSchema)

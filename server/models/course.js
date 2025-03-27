const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    coursename: {
      type: String,
      required: true,
    },
    coursecode: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    instructor: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);
module.exports = Course;

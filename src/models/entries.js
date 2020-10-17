// entries

const mongoose = require('mongoose')

const entriesSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  readTime: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  isFav: {
    type: Boolean,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  author: {
    type: String
  }
})

module.exports = mongoose.model('entries', entriesSchema)

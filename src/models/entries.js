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
  timeToRead: {
    type: Number,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  featured: {
    type: Boolean,
    required: true
  },
  editorsPick: {
    type: Boolean,
    required: true
  },
  popular: {
    type: Boolean,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('entries', entriesSchema)
// isFav

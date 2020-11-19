// entries

const mongoose = require('mongoose')

const entriesSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: false
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
    required: false
  },
  editorsPick: {
    type: Boolean,
    required: false
  },
  popular: {
    type: Boolean,
    required: false
  },
  imageUrl: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: false
  },
  author: {
    type: String,
    required: true
  },
  authorImage: {
    type: String,
    required: false
  }
})

module.exports = mongoose.model('entries', entriesSchema)
// isFav

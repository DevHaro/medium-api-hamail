const Entries = require('../models/entries')

function getAll () {
  return Entries.find()
}
function create (entriesData) {
  return Entries.create(entriesData)
}
function getById (id) {
  return Entries.findById(id)
}
function deleteById (id) {
  return Entries.findByIdAndDelete(id)
}
function updateById (id, newEntryData) {
  return Entries.findByIdAndUpdate(id, newEntryData)
}
module.exports = {
  getAll,
  create,
  getById,
  deleteById,
  updateById
}

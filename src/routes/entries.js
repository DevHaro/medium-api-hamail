const express = require('express')
const entries = require('../usecases/entries')
const router = express.Router()

router.get('/', async (request, response) => {
  try {
    const allEntries = await entries.getAll()

    response.json({
      success: true,
      message: 'All entries',
      data: {
        entries: allEntries
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.post('/', async (request, response) => {
  try {
    const newEntry = await entries.create(request.body)

    response.json({
      success: true,
      message: 'Entry added',
      data: {
        entry: newEntry
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params

    const entrySelected = await entries.getById(id)

    response.json({
      success: true,
      message: 'entry selected',
      data: {
        entry: entrySelected
      }
    })

    const selectedEntry = await entries.getById(id)
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params

    const deletedEntry = await entries.deleteById(id)

    response.json({
      success: true,
      message: 'Entry deleted',
      data: {
        entry: deletedEntry
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.patch('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const newDataEntry = request.body

    const entryUpdated = await entries.updateById(id, newDataEntry)

    response.json({
      success: true,
      message: 'Entry updated',
      data: {
        entries: entryUpdated
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.put('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const newDataEntry = request.body

    const entryUpdated = await entries.updateById(id, newDataEntry)

    response.json({
      success: true,
      message: 'Entry updated',
      data: {
        entries: entryUpdated
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

module.exports = router

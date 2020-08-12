const { Router } = require('express')

const routes = Router()

routes.get('/', (req, res) => {
  res.status(200).json({ status: 'Online api of test' })
})

routes.get('/api/:id', (req, res) => {
  try {
    const { id } = req.params

    if (id) {
      return res.status(200).json({ param: id })
    } else {
      return res.status(400).json({ message: 'Request without  params' })
    }
  } catch (error) {
    return res.status(400).json({ message: 'Request without  params' })
  }
})

module.exports = routes
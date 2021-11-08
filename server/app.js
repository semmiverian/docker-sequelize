const express = require('express')
const { User } = require('./models')
const app = express()
const PORT = process.env.PORT || 4001

app.get('/users', async (req, res) => {
  const users = await User.findAll()

  return res.status(200).json(users)
})

app.listen(PORT, () => {
  console.log('App running on port', PORT)
})

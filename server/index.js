const express = require('express')
const cors = require('cors')
const massive = require('massive')
const { json } = require('body-parser')
const session = require('express-session')
const axios = require('axios')
require('dotenv').config()

const controller = require(`${__dirname}/controller/controller`)

const app = express()
app.use(cors())
app.use(express.json())
app.use(
  session({
    secret: 'this is a secret',
    resave: true,
    saveUninitialized: true
  })
)

app.get('/api/login', controller.loginUser)
app.put('/api/logout', controller.logoutUser)
const port = 3434

app.post(`/api/verifyUser`, (req, res) => {
  console.log('request received')
  const { username, password } = req.body
  console.log(process.env.password, process.env.user)
  console.log(username, password)
  if (username == process.env.user && password == process.env.password) {
    res.status(200).send(true)
  } else {
    res.status(200).send(false)
  }
})

massive(process.env.connectionString).then(db => {
  app.set('db', db)
  app.listen(3434, () => {
    console.log(`Listening on port ${port}`)
  })
  console.log('Connected to database')
})

const express = require('express')
const cors = require('cors')
const massive = require('massive')
const { json } = require('body-parser')
const session = require('express-session')
const Axios = require('axios')
const http = require('http')
const socketIo = require('socket.io')
const index = require('../routes/index')
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
const server = http.createServer(app)

const io = socketIo(server)
app.use(index(io))

let messages = []
io.on('connection', socket => {
  // each socket that "connects",
  // is a unique connection from a individual's web browser
  console.log('New Client Connected')
  socket.emit('msgs', messages) // when user connects, automatically emits msgs
  // socket.on("event", data => {
  // you have data now
  // you then do something with the data
  // in here, you can also emit after the "something" has been done with data
  // })

  socket.on('send_message', incomingMessage => {
    // console.log('incumming msg: ', incomingMessage)
    messages.push(incomingMessage)
    socket.emit('msgs', messages)
  })

  socket.on('disconnect', () => {
    // disconnect = user closes browser or loses web connection
    console.log('Client Disconnected')
  })
})
app.get('/api/login', controller.loginUser)
app.put('/api/logout', controller.logoutUser)
const port = 3434

const send = require('gmail-send')({
  user: process.env.username,
  pass: process.env.password,
  to: 'shahanjaclyn@gmail.com'
})

const getPost = (req, res) => {
  const dbInstance = req.app.get('db')
  dbInstance.getPost().then(resp => res.status(200).send(resp))
}
app.get(`/api/getPost`, (req, res) => {
  getPost(req, res)
})

app.post(`/api/sendMessage`, (req, res) => {
  send(
    {
      subject: req.body.subject,
      text: 'Name: ' + req.body.name + '\nEmail: ' + req.body.email + '\nMessage: ' +
        req.body.message
      
    },
    function (err, res) {
      console.log('* ERROR send() callback returned: err:', err, '; res:', res)
    }
  )
  console.log('Working')
  res.status(200).json((message = 'working'))
})
app.post(`/api/sendFeedback`, (req, res) => {
  send(
    {
      subject: 'Feedback from: ' + req.body.feedbackEmail + ' ' + req.body.feedbackName,
      text: 'Name: ' + req.body.feedbackName + '\nEmail: ' + 
        req.body.feedbackEmail
       + '\nQuestion One: ' + req.body.questionOne + '\nQuestion Two: ' + 
        req.body.questionTwo
       + '\nQuestion Three: ' + req.body.questionThree + '\nLikes: ' + 
        req.body.feedbackLike
      + '\nDislikes: ' + req.body.feedbackDislike + '\nQuestion Four: ' + 
        req.body.questionFour
      
    },
    function (err, res) {
      console.log('* ERROR send() callback returned: err:', err, '; res:', res)
    }
  )
  console.log('Working')
  res.status(200).json((message = 'working'))
})
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
app.post(`/api/createUser`, (req, res) => {
  const { firstname, lastname, email, username, password } = req.body
  console.log(
    'Request received',
    firstname,
    lastname,
    email,
    username,
    password
  )
  console.log(req.body)
  const dbInstance = req.app.get('db')
  dbInstance
    .createUser(firstname, lastname, email, username, password)
    .then(() => {
      app.get(`/api/login`, controller.loginUser)
    })
})
app.post(`/api/createPost`, (req, res) => {
  const { postSubject, postText } = req.body
  console.log('Request received', postSubject, postText)
  console.log(req.body)
  const dbInstance = req.app.get('db')
  dbInstance.createPost(postSubject, postText).then(() => {
    getPost(req, res)
  })
})
massive(process.env.connectionString).then(db => {
  app.set('db', db)
  app.listen(3434, () => {
    console.log(`Listening on port ${port}`)
  })
  console.log('Connected to database')
})

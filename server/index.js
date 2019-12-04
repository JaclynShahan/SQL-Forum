const express = require("express");
const cors = require("cors");
const massive = require("massive");
const {json} = require("body-parser");
const session = require("express-session");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(cors())
app.use(express.json())

const port = 3434;

massive(process.env.connectionString).then(db => {
    app.set('db', db)
    app.listen(3434, () => {
      console.log(`Listening on port ${port}`)
    })
    console.log('Connected to database')
  })
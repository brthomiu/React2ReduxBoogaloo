const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 8000

const app = express()

app.use('/', require('./routes'))

app.listen(port, () => console.log(`Server started on port ${port}`))
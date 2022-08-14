const express = require('express');
const dotenv = require('dotenv');
const port = process.env.PORT || 8000

const app = express()

app.use('/', require('./routes.js'))

app.listen(port, () => console.log(`Server started on port ${port}`))

const express = require('express')
const expressVue = require("express-vue")

// Inits
const app = express()
const expressVueMiddleware = expressVue.init()

// Middlewares
app.use(expressVueMiddleware)

const PORT = process.env.PORT || 5000

// Routes
app.use('/', require('./routes'))
app.use('/users', require('./routes/users'))

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})
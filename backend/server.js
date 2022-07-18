const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 5003
const recipeRoutes = require('./routes/recipeRoutes')

connectDB()

const app = express()

// MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/recipes', recipeRoutes)

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
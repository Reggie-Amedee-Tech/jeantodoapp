const express = require('express')
const cors = require('cors')
const app = express()

require('dotenv').config()

const PORT = process.env.PORT || 5004

const connectDB = require('./config/mongoose.config')
connectDB()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

require('./routes/todo.routes')(app)
app.listen(PORT, () => console.log('Database successfully started'))
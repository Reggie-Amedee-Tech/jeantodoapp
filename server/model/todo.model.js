const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    title: {
        type: String
    },
    date: {
        type: Date
    },
    description: {
        type: String
    },
    important: {
        type: Boolean
    },
    completed: {
        type: Boolean
    }
}, {timestamps: true})

module.exports = mongoose.model("TodoSchema", todoSchema)
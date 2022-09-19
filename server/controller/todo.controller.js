const Todo = require('../model/todo.model')

module.exports.createTodo = (request, response) => {
    const {title, date, description, important, completed} = request.body
    Todo.create({
        title,
        date,
        description,
        important,
        completed
    })
    .then(res => response.json(res).status(200))
    .catch(err => response.json(err.message))
}

module.exports.getAllTodos = (request, response) => {
    Todo.find()
    .then(res => response.json(res).status(200))
    .catch(err => response.json(err.message).status(400))
}
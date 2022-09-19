const TodoController = require('../controller/todo.controller')



module.exports = function(app) {
    app.post('/api/todo/create', TodoController.createTodo)
    app.get('/api/todo/all', TodoController.getAllTodos)
}
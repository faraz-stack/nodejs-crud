const Todo = require('../models/todoModel');
exports.listTodos=(req,res)=>{
    Todo.getAllTodos((todos)=>{
        res.json(todos);
    });
}
exports.createTodo = (req, res) => {
    const { title, description } = req.body;
    const newTodo = { title, description };
  
    Todo.createTodo(newTodo, (result) => {
      res.status(201).json(result);
    });
  };
  
  exports.updateTodo = (req, res) => {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    const updatedTodo = { title, description, completed };
  
    Todo.updateTodo(id, updatedTodo, (result) => {
      res.json(result);
    });
  };
  
  exports.deleteTodo = (req, res) => {
    const { id } = req.params;
  
    Todo.deleteTodo(id, (result) => {
      res.json({ message: 'Todo deleted successfully' });
    });
  };
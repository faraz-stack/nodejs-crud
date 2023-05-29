const connection = require('../../config/database');

const Todo = {};

Todo.getAllTodos = (callback) => {
    console.log('im called getalltodos')
  connection.query('SELECT * FROM product', (err, results) => {
    if (err) throw err;
    callback(results);
  });
};

Todo.createTodo = (newTodo, callback) => {
  connection.query('INSERT INTO product SET ?', newTodo, (err, result) => {
    if (err) throw err;
    callback(result);
  });
};

Todo.updateTodo = (id, updatedTodo, callback) => {
  connection.query(
    'UPDATE product SET ? WHERE id = ?',
    [updatedTodo, id],
    (err, result) => {
      if (err) throw err;
      callback(result);
    }
  );
};

Todo.deleteTodo = (id, callback) => {
  connection.query('DELETE FROM product WHERE id = ?', id, (err, result) => {
    if (err) throw err;
    callback(result);
  });
};

module.exports = Todo;

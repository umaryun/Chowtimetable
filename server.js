const express = require('express');
const functions = require('firebase-functions')
const bodyPerser = require('body-parser')
const app=express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors({origin: true}));
app.use(bodyPerser.json())

let todos = [];

app.post('/api/todos', (req,res) =>{
  const newTodo = req.body;
  todos.push(newTodo);
  res.sendStatus(201).json(newTodo);
})

app.get('/api/todos', (req,res)=> {
  res.json(todos);
})

app,put('/api/todos/:id', (req,res)=> {
  const todoId = req.params.id;
  const updatedTodo = req.body;
  todos = todos.map(todo => (todoId === todoId ? updatedTodo : todo));
  res.sendStatus(200)
});


app.listen(port, ()=>{
  console.log('server is running on port ${port}')
})
exports.api = functions.https.onRequest(app)
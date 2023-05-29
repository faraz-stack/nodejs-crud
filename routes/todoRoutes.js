const express=require('express');
const todoController=require('../app/controllers/todoController');

const router=express.Router();


router.get('/all',todoController.listTodos);

module.exports=router;
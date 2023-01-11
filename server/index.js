const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv').config();
const cors =require('cors');

const app = express();
//use express.json to get data
app.use(express.json());
//port
const PORT = process.env.PORT || 5500;

app.use(cors());

const TodoItemRoute = require('./routes/todoItems');

mongoose.connect(process.env.DB_CONNECT)
.then(() => console.log("Database Connected"))
.catch(err => console.log(err))

app.use('/', TodoItemRoute);



//port and connecrt to server 
app.listen(PORT, () => console.log("Server connected") );
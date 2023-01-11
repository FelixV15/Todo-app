const mongoose = require('mongoose')


//schema
const TodoItemSchema = new mongoose.Schema({
    item:{
        type:String,
        requires: true
    }
})

//exports
module.exports = mongoose.model('todo', TodoItemSchema);
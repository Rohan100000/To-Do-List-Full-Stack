const mongoose = require('mongoose');
// Schema Types available: String, Number, Date, Buffer, Boolean, Mixed, ObjectId, Array, Decimal128, Map.

const todoSchema = new mongoose.Schema({
    task:{
        type: String,
        required: true,
        unique: true
    },
    completed:{
        type: Boolean,
        required: true,
    }
});

// Collection name:
const Todo = mongoose.model('Todo',todoSchema);
module.exports = Todo;
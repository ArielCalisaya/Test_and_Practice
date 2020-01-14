const mongoose = require('mongoose');
const schema = mongoose.Schema

const TodoSchema = new schema({
    title: String,
    desc: String,
    status: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('todo', TodoSchema);
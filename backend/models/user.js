const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const ResourceSchema = new Schema({
//     resCategory:{
//         type: String,
//         required: [true,'Category is required']
//     },
//     resType: {
//         type: String,
//         required: [true,'Resource Type is required']
//     },
//     qty: {
//         type: Number,
//         required: [true,'Quantity is required']
//     }
// });

const UserSchema = new Schema({
   
    name:{
        type: String,
        required: [true,'Name is required']
    },
    email:{
        type: String
    }
});

const User = mongoose.model('user',UserSchema);

module.exports = User;
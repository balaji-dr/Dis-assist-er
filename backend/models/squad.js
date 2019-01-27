const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SquadSchema = new Schema({
    username: {
        type:String,
        required: [true,'Username is required']
    },
    password:{
        type:String,
        required: [true,'Password is required']
    },
    email: String
});
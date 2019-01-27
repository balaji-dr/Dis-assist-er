const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FundSchema = new Schema({
    description: {
        type:String,
        required: [true,'Content is required']
    },
    title:{
        type:String,
        required: [true,'Title is required']
    },
    link:{
        type: String
    },
    image:{
        type: String
    },
    time:{
        type: String
    }
}, {timestamps: true});

const Fund = mongoose.model('fund', FundSchema);

module.exports = Fund;
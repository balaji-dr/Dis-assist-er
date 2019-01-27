const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FundSchema = new Schema({
    description: {
        type:String
    },
    title:{
        type:String
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
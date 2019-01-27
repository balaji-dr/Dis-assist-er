const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HelpSchema = new Schema({
    probTitle: {
        type: String,
    },
    probType: {
        type: String,
    },
    probDesc:{
        type: String
    },
    email:{
        type: String
    },
    contact: {
        type: String,
        required: [true,'Contact is required']
    },
    visible: Boolean,
    coordinates: {
	lat: {type: String},
	long: {type: String}
    },
    helpMode: Boolean,
    emotion: Number,
    location: {
        type: String,
    }
}, {timestamps: true});

const Help = mongoose.model('help', HelpSchema);

module.exports = Help;

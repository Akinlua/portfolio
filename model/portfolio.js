

const mongoose = require('mongoose')

const PortfolioSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please provide a property name'],
        maxlength: 1000,
    },
    description:{
        type: String,
        required: [true, 'Please provide a description'],
        maxlength: 5000,
    },
    pic_path:{
        type: String,
        required: [true, 'Please provide an image'],
    },
    pic_original_name:{
        type: String,
        required: [true, 'Please provide an image'],
    },
    status:{
        type: String,
        enum: ['Paid', 'Pending', 'Due'],
        required: [true, 'Make sure to add the status'],
        default: 'Pending',
    },
    deadline: {
        type: mongoose.Schema.Types.Mixed,
        required: [true, 'Make sure to provide the date on which the property is due for payment'],
    },
    addToFour:{
        type: Number,
        default: 0,
    },
    dateOfPayment: {
        type:  mongoose.Schema.Types.Mixed
    }
}, {timestamps: true})

module.exports = mongoose.model('Portfolio',PortfolioSchema)
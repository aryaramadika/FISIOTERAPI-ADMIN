const mongoose = require('mongoose');
const categoryNominal = mongoose.Schema({
    coinQuantity : {
        type : Number,
        default: 0
    },
    coinName :{
        type : String,
        require: [true,'you must enter coin name']
    },
    price:{
        type:Number,
        default:0
    }
},{ timestamps: true })

module.exports = mongoose.model('Nominal',categoryNominal) 
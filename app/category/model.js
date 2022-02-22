const mongoose = require('mongoose');
const categoryScheme = mongoose.Schema({
    name : {
        type : String,
        require :[true , 'You must enter name']
    },
    age :{
        type : Number,
        require :[true , 'You must enter age']
    },
    address:{
        type : String,
        require :[true , 'You must enter address']
    },
    religion:{
        type : String,
        require :[true , 'You must enter religion']
    },
    job : {
        type : String,
        require :[true , 'You must enter job']
    }
        
    
},{ timestamps: true })

module.exports = mongoose.model('Category',categoryScheme) 
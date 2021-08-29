const { Int32 } = require('mongodb');
const mongoose = require('mongoose');

let Jobs = new mongoose.Schema({
    personImage:{
        type:String
    },
    email:{
        type:String
    },
    personName :{
        type : String,
        
    },
    designation :{
        type : String,
        
       
    },
    category :{
        type : String,
        
    },
    location : {
        type : String,
        
    },
    rate : {
        type : Number,
        
    },
    
    work : {
        type : String,
        
    },
    gender : {
        type : String,
        
    },
    availability : {
        type : String,
        
    },

    activeDate : {
        type: Date,
        
    },
    Exp : {
        type : Number,
        
    },
    keyskills:{
        type:[String],
        index:true
    }
})


module.exports = mongoose.model('Jobs',Jobs)
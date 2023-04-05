const mongoose = require("mongoose")

// Making the Schema 
const Course = mongoose.Schema({

title:{
    type:String,
    require:true
},

content : {
    type:String,
    require:true
},
videos: {
    type:Number,
    require:true
},
active: Boolean
 


});

module.exports= mongoose.model("courses",Course)
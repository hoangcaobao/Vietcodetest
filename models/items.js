const mongoose=require("mongoose")
const Schema=mongoose.Schema;


//define Schema of database 
const itemSchema=new Schema({
    job:{
        type: String,
        required: true
    },
    day:{
        type:String,
        require: true
    },
    time:{
        type: String,
        required: true
    }
},{timestamps:true});

const Item=mongoose.model("Item", itemSchema);

module.exports=Item;
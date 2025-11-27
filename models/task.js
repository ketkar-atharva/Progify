let mongoose=require('mongoose');
const { type } = require('os');
let Schema=mongoose.Schema;

let taskschema=new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    img:{
        type:String,
        set:(v)=>v===""?"https://static.vecteezy.com/system/resources/previews/048/910/778/non_2x/default-image-missing-placeholder-free-vector.jpg":v
    }
});

let Task=mongoose.model("task",taskschema);

module.exports=Task;
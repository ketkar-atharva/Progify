let mongoose=require('mongoose');
const { type } = require('os');
const { ref } = require('process');
let Schema=mongoose.Schema;

let taskdataSchema=new Schema({
    taskowner_id:{
        type:Schema.Types.ObjectId,
        ref:"Task",
    },
    data:{
        type:String,
        required:true
    }
});

let TaskData=mongoose.model("taskData",taskdataSchema);

module.exports=TaskData;
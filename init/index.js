let mongoose=require('mongoose');
const Task=require('../models/task.js');
const initdata=require("./data.js");

main().then(()=>{
    console.log("connected to DB");
}).catch((err)=>{console.log(err)});



async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/progify');
}

let initialize=async ()=>{
    await Task.deleteMany({});
    await Task.insertMany(initdata.data);
    console.log("data initialized")
};
initialize();
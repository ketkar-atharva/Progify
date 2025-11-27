let express=require('express');
let app=express()
let mongoose=require('mongoose');
const Task=require('./models/task.js');
let path=require("path");

main().then(()=>{
    console.log("connected to DB");
}).catch((err)=>{console.log(err)});



async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/progify');
}
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
//trial
app.get("/",(req,res)=>{
    res.send("Hi i am root");
})

//root api
app.get("/tasks",async(req,res)=>{
     let alltasks=await Task.find({});
     res.render("tasks/index",{alltasks});
});

//show api
app.get("/tasks/:id",async(req,res)=>{
    let {id}=req.params;
    let task=await Task.findById(id);
    res.render("tasks/show",{task});

})



app.listen(9090,()=>{
    console.log("server is listening");
})
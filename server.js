// setting up server connection to  MySQL and client
var express=require("express");
var path= require("path");
var mysql=require("mysql");
var app= express();
var port=process.env.PORT||3000;
app.use(express.urlencoded({extended:true}))
app.use(express.json())
var connection=mysql.createConnection({
    host:"localhost",
    port:8889,
    user:"root",
    password:"root",
    database:"friends_db"
})
connection.connect(function(err){
    if(err)throw err;
    console.log("connection ID: :"+ connection.threadId)
})
var best=[]
var friends=[];
var decoy={
    name:"jefferson stealflex",
    picUrl:"https://i.pinimg.com/originals/e3/23/e2/e323e25541aadd4a179c04b2023cd6c5.jpg",
    bio:"hello im "+this.name,
    dogs:0,
    hero:1,
    imagine:2,
    ugly:3,
    asti:4,
    jazz:5,
    matilda:6,
    country:7,
    answers:[1,2,3,4,5,6,7,8],
    total:14
}
friends.push(decoy)
//Routing
app.get("/",function(req,res){
    res.sendFile(path.join(__dirname+"/index.html"))
})
app.get("/index",function(req,res){
    res.sendFile(path.join(__dirname+"/index.html"))
})
app.get("/create",function(req,res){
    res.sendFile(path.join(__dirname+"/create.html"))
})
app.post("/api/add",function(req,ress){
    var ne=req.body;
    console.log(ne)
    connection.query(`INSERT INTO users(userName,picUrl,bio,total)
     VALUES("${ne.name}","${ne.picUrl}","${ne.bio}",${ne.total})`,
     function(err,res){console.log(res)})
    var low=parseInt(ne.total)-5;
    var high=parseInt(ne.total)+5;
    console.log("low and high "+low+" "+high)
    connection.query(`select*from users where total between ${low} and ${high};`
     ,function(err,res){
         console.log("this is it chief"+res[0].userName+res[1].userName+res[2].userName)
         ress.json(res)
     })
})
app.listen(port,function(req,res){
    console.log("listining on http://localhost:"+port)
})

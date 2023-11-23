
const express = require ('express');
const dbConnect = require('./config/connectDB');
const userSchema = require('./model/User');
const User = require('./model/User');

const app = express();

const port = 4000;
dbConnect()
app.use(express.json())
// metode post
app.post('/create',(req,res)=>{
    userSchema.insertMany([{
        name: "salma",
        email:"sala@gmail.com",
        age: 34        
    }
])
.then((doc)=>{
console.log(doc);
res.status(200).json({msg:"user ok",doc})
})
.catch((err)=>{
    console.log(err);
})
})
app.get('/user',(req,res)=>{
    userSchema.find({})
    .then((doc)=>{
        res.status(200).json(doc)
    

    })
    .catch((err)=>{
console.log(err);
    })
})
app.put('/user/:id',(req,res)=>{
    const {id}=req.params;
    const{name,email,age}=req.body;
    userSchema.updateOne({_id : id},{$set:{name,email,age}},{new:true})
    .then((doc)=>{
        res.status(200).json(doc)
    })
    .catch((err)=>{
       res.status(500).json({msg:"can not get the user"})
    })
})

app.delete('/remov/:id',(req,res)=>{
    const {id}= req.params
userSchema.deleteOne({_id:id})
.then(()=>{
    res.status(200).json({msg:"use removed sacces"})
})
.catch((err)=>{
    res.status(500).json({msg:"can not remove this user"})
})
})




app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }
console.log(`server run to : ${port}`);
})


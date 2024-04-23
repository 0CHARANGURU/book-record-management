const express =require("express");
const {users}=require("./users.json")


const app=express()
const PORT=8081
app.use(express.json())
app.get('/',(req,res)=>{
    res.status(200).json({
        message:"server is running"
    })
})

app.get('/users',(req,res)=>{
    res.status(200).json({
        status:true,
        data:users
    })
})




app.get('*',(req,res)=>{
    res.status(200).json({
        message:"This root doesn't exist"
    })
})
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

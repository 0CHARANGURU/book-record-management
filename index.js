const express =require("express");
const {users}=require("./users.json")

const userRouter=require("./routes/users.js")
const bookRouter=require("./routes/books.js")


const app=express()
const PORT=8081
app.use(express.json())
app.get('/',(req,res)=>{
    res.status(200).json({
        message:"server is running"
    })
})
app.use('/users',userRouter);
app.use('/books',bookRouter);

app.get('*',(req,res)=>{
    res.status(200).json({
        message:"This root doesn't exist"
    })
})
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

const express = require("express");
const {users} = require("../users.json");

const router = express.Router();

/*
route:users
meth:get
desc:get all users
access:public
parameter:none
*/


router.get('/',(req,res)=>{
    res.status(200).json({
        status:true,
        data:users
    })
})

/*
route:user by id
meth:get
desc:get single user by id
access:public
parameter:id
*/
router.get('/:id',(req,res)=>{
    const {id}=req.params;
    const user=users.find((each)=>each.id===id);
    if(!user){
        return res.status(404).json({
            sucess:false,
            message:"User not found:-("
        })
    }
    return res.status(200).json({
        status:true,
        data:user
    })

 })
// route:/users
// meth:post
// desc:create a new user
// access:public
// parameter:none
// 
router.post('/',(req,res)=>{
    const{id,name,surname,email,subscriptionType,subscriptionDate}=req.body;

    const user=users.find((each)=>each.id===id);
    if (user){
            return res.status(404).json({
                success:false,
                message:"The id already exists :-("
            })
    }
    users.push({id,name,surname,email,subscriptionType,subscriptionDate});
    return res.status(201).json({
        status:true,
        data:users
    })

})
// route:/users/:id
// meth:pout
// desc:updating existing user by id
// access:public
// parameter:id
// 


router.put('/:id',(req,res)=>{
    const {id}=req.params;
    const {data}=req.body;

    const user=users.find((each)=>each.id===id);
    if(!user)
    {
        return res.status(404).json({sucess:false,message:"User with this id doesn't exist"})
    }
    const updatedUser =users.map((each)=>{
        if (each.id===id){
          return  {...each,
            ...data}
    }
    return each;
})
    return res.status(200).json({sucess:true,
        data:updatedUser
    })
})
// route:/users/:id
// meth:delete
// desc:delete existing user by id
// access:public
// parameter:id
// 
router.delete('/:id',(req,res)=>{
    const {id}=req.params;
    const user=users.find((each)=>each.id===id);
    if(!user)
    {
        return res.status(404).json({
            status:false,
            message:"User with id doesnt exist :-("
        })
    }
    const index=users.indexOf(user);
    users.splice(index,1);
    return res.status(200).json({success:true,data:users})
})

module.exports = router;
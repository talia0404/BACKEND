const express = require('express')
const router = express.Router();
const User = require('../models/user')
const bcrypt =require('bcrypt')

router.post('/signup',(req,res)=>{
    bcrypt.hash(req.body.password,10)
    .then(hash =>{
const user = new User(
    {
        username: req.body.username,
        password:req.body.password
    });
user.save()
.then(result=>{
    res.status(201).json({
        message:"User created",
        result:result
});

}).catch(err=>{
    res.status(500).json({
        erroe:err
    });
});
});
})

router.post('./login',(req,res)=>{
    let fetchUser;
    User.findOne({username:req.body.username})
    .then(user=>{

    })
    .then(result=>{
        if(!result)
        {
            return res.status(401).json(
                {
                    message: "Authentication Failed"
                }
            );
        }
        const token = jwt.sign({username:fetchUser.username,userid:fetcheduser._id},
            '',
            {expriesIn:'1h'});
            res.status(200).json({
                token
            });

    })
    .catch(err =>{
        return res.status(401).json({
            message:"Authentication Failure"
        });
    })
})

module.exports = router
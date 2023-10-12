const express =require('express')
const router=express.Router();
const Posts = ('./models/posts')
const checkauth = require('../check-auth')

router.get('', (req,res)=>{
    Posts.find().then((concern)=>
    res.json(
        {
            message :'Concerns found',
            concern:concern
        }
    ))
})

router.post('',checkauth, (req,res)=> {
    const posts = new Posts(
        {
            id: req.body.id,
            concern: req.body.name
        }
    )
    posts.save().then(()=>{
        res.status(201).json({
            message: 'Post created',
            posts:posts
    })
   
    })

    
})

router.delete('/:id',checkauth, (req,res)=>{
Posts.deleteOne({
    _id: req.params.id
})
.then((result)=>
{
    res.status(200).JSON({message: "Concern deleted"});
})
})

module.exports =router



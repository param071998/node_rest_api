const express = require('express');
const Model = require('../model');

const router = express.Router();

router.post('/movie',async (req,res)=>{
    // res.send("haii");
    // return;
    const data =  Model({
imdbID:req.body.imdbID,
title:req.body.title,
year:req.body.year,
runtTime:req.body.runtTime,
genere:req.body.genere,
writer:req.body.writer,
actors:req.body.actors,
plot:req.body.plot,
images:req.body.images,
imdbRating:req.body.imdbRating


    });

    try{
       const dataToSave = await data.save();
       res.status(201).json(dataToSave); 
    }
    catch(error){
        res.status(400).json({message: error.message}); 
    }
});


router.get('/movies',async(req,res)=>{

    try{
        const data = await Model.find();
        res.json(data); 
     }
     catch(error){
         res.status(500).json({message: error.message}); 
     }
});



router.get('/movies/:id',async(req,res)=>{

    try{
        const data = await Model.findById(req.params.id);
        res.json(data); 
     }
     catch(error){
         res.status(500).json({message: error.message}); 
     }
});


router.put('/movies/:id',async(req,res)=>{

    try{
        const result = await Model.findByIdAndUpdate(req.params.id,req.body,
           {new:true} );
        res.json(result); 
     }
     catch(error){
         res.status(500).json({message: error.message}); 
     }
});
router.delete('/movies/:id',async(req,res)=>{

    try{
        const result = await Model.findByIdAndDelete(req.params.id);
        // res.json(result); 
        res.send("Data deleted successfully");
     }
     catch(error){
         res.status(500).json({message: error.message}); 
     }
});

module.exports = router;
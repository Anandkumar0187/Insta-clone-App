const express = require('express');
const router = express.Router();
const User = require('./model/user');
const multer  = require('multer');
const path = require('path')

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, './public/images')
    },
    filename: function (req,file,cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({storage: storage})

router.get('/user',async(req,res)=>{
    try{
    const data = await User.find();
    // console.log(data);
    res.status(200).json(data);
    }catch(e){
        res.status(500).json({
            message : e.message
        })
    }
})
router.post('/add',upload.single('image'), async(req,res)=>{
   try{
    // console.log(req.body)
    await User.create({
        image :  "/images/" + req.file.filename,
        name : req.body.name,
        location : req.body.location,
        description : req.body.description
    });
    res.status(200).json({
        status : "success"
    })
   }catch(e){
    res.status(500).json({
        message : e.message
    })
   }
})

module.exports = router;
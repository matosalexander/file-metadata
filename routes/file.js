/**
 * Created by Alexander on 07/Feb/2017.
 */
var express=require('express');
var upload=require('multer')();
var route=express.Router();

route.post('/filesize/',upload.single('file'),function (req,res) {
    var obj={};
    obj.size=req.file.size;
    res.json(obj);
});

module.exports=route;
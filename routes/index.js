/**
 * Created by Alexander on 07/Feb/2017.
 */
var express=require('express');
var route=express.Router();

route.get('/',express.static('./views'));
route.use('/api',require('./file'));

module.exports=route;
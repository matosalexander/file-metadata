var express=require('express');
var app=express();

app.use(require('./routes'));

var port=process.env.PORT||8080;
app.listen(port,function () {
    console.log('App listening o port ' + port);
});
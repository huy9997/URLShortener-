const express = require('express');
const router  = express.Router();
const randomstring = require("randomstring");
const fs = require('fs')l;
let date =  new Date();

let URLObject ={
  URL: URLShorten,
  Date: date,
  NumberOfVisits: visitis
}

let urlFunction = (URL,visits)=>{
  new URLObject={
    URL: randomstring(5),
    Date:date,
    NumberOfVisits:visits
  }
}
//number of visits count ++ when onClick 

router.get('/', function (req, res){
  res.send('hello world ');
});

router.post('/post',function(req,res){
  //get data from frontend

});

module.exports = router;

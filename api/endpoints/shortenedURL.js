const express = require('express');
const router  = express.Router();
const randomstring = require("randomstring");
const fs = require('fs');
let date =  new Date();

let URLObject ={
  URLShortened: this.URLShortened,
  URL: this.URL,
  Date: date,
  NumberOfVisits: this.NumberOfVisits
}

let shortenURL = (URL,visits)=>{
  
}
//number of visits count ++ when onClick 

router.get('/', function (req, res){
  shortenURL(req.body)=()=>{
    
  }
  res.send('hello world ');
});

router.post('/post',function(req,res){
  //get data from frontend

});

module.exports = router;

const express = require('express');
const router  = express.Router();
const randomstring = require("randomstring");
const fs = require('fs');
const validUrl = require('valid-url');
const axios = require('axios');

let date =  new Date();

let URLObject ={
  URL: 'https://www.google.com/',
  URLShortened:'',
  Date: date,
  NumberOfVisits:0,
}

let shortenURL = (URL,visits)=>{
  if(validUrl.Uri(URL)){
    //check to see if URL already exist
      // if true increment the hashvalue
    
  }
  else{

  }
}

//number of visits count ++ when onClick

router.get('/', function (req, res){

  res.json(URLObject);
});

router.post('/post',function(req,res){
  //get data from frontend
  console.log(req.body.urlData);
  //store data
  res.send(req.body.urlData)
})

module.exports = router;

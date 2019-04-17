const express = require('express');
const router  = express.Router();

router.get('/', function (req, res){
  res.send('hello world ');
});

router.post('/post',function(req,res){

});

module.exports = router;

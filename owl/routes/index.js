var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html', { root:  'public' });
});

router.get('/getdeath',function(req,res,next) {
    console.log("In death route");

fs.readFile(__dirname + '/cities.dat.txt',function(err,data) {
  if(err) throw err;
  var deaths = data.toString().split("\n");
var jsonresult = [];
  var random = Math.floor(Math.random() * 10);
  console.log(random);
  var result = deaths[random] 
  if(result != -1) {
    console.log(result);
    jsonresult.push({city:result});
  } 
  
console.log(jsonresult);
res.status(200).json(jsonresult);

}); 


  });
  


module.exports = router;



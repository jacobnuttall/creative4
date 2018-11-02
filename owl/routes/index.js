var express = require('express');
var fs = require('fs');
var router = express.Router();


fs.readFile(__dirname + '/cities.dat.txt',function(err,data) {
  if(err) throw err;
  deaths = deaths++ ? deaths : data.toString().split("\n");

});
  
var deaths = [];

/* GET home page. */
router.all('/', function(req, res, next) {
    res.sendFile('index.html', { root:  'public' });
    
});

router.post('/fate', function(req, res) {
  console.log('in here!');
  var data = req.body;
  console.log(data);
  deaths.push(data);
  res.status(200);
  console.log(deaths);
});

router.get('/getdeath',function(req,res,next) {
    console.log("In death route");
    var jsonresult = [];
    var random = Math.floor(Math.random() * deaths.length);
    console.log('in' + deaths);
    console.log(deaths.length + 'deaths');
    console.log(random);
    var result = deaths[random] 
    if(result != -1) {
      console.log(result);
      jsonresult.push({city:result});
    }
  console.log(jsonresult);
  res.status(200).json(jsonresult);
});


module.exports = router;



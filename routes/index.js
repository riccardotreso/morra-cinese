var express = require('express');
var router = express.Router();




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/dogame', function(req, res) {
  var message = req.body;
  //Carta = 1
  //Sasso = 2
  //Forbice = 3

  var arrMosse = ["Carta", "Sasso", "Forbice"];

  var random = Math.floor((Math.random() * 3) + 1),
      diff = message.idmossa - random,
      result = {result:'',
              mossa:arrMosse[random-1]};



  if(diff == 0){
    result.result = "pareggiato";
  }
  else {

    if (diff < 0) {
      if (Math.abs(diff) == 2) {
        result.result = "perso";
      }
      else {
        result.result = "vinto";
      }
    }
    else if (diff == 2) {
      result.result = "vinto";
    }
    else {
      result.result = "perso";
    }
  }

  res.jsonp(result);

});

module.exports = router;

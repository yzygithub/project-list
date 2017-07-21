var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = require('./db');

/* 在主页获取新闻 */
router.get('/', function(req, res, next) {
  var newstype = req.query.newstype;/*从news.js里的data:{newstype:type}得到newstype*/
  var connection = mysql.createConnection(db);

  connection.connect(); 

  connection.query("select * from news where `newsType`= ? ",[newstype],function(err,data,fields){
    console.log(data);
    res.json(data);
  });
});

module.exports = router; 

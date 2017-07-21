var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = require('./db');
var connection = mysql.createPool(db);

/* 后台路由页面 */
/* 刷新新闻列表 */
router.get('/getnews', function(req, res) {
  connection.query('select * from news order by newsId desc',function(err,data){
      res.json(data);
  });
});

/* update news */
router.post('/updateNews', function(req, res) {
  var newsid = req.body.newsid,
      newstype = req.body.newstype,
      newstitle = req.body.newstitle,
      newsimg = req.body.newsimg,
      newstime = req.body.newstime,
      newssrc = req.body.newssrc;//分号!
  connection.query('UPDATE `news` SET `newsType`=?,`newsTitle`=?,`newsImg`=?,`newsTime`=?,`newsSrc`=? WHERE `newsId`=?;',[newstype,newstitle,newsimg,newstime,newssrc,newsid],function(err,data){
    res.json(data);
  });
});

/* current news 模态框取值*/
router.get('/currentNews', function(req, res) {
  var newsid = req.query.newsid;
  connection.query('SELECT * FROM `news` WHERE `newsId`=?;',[newsid],function(err,data){
      res.json(data); 
  });
});

/* delete news */
router.post('/deleteNews', function(req, res) {
  var newsid = req.body.newsid;
  connection.query('DELETE FROM `news` WHERE `newsId`=?;',[newsid],function(err,data){
    res.json(data);
  });
});

/* insert news */
router.post('/insertNews', function(req, res) {
  var newstype = req.body.newstype,
      newstitle = req.body.newstitle,
      newsimg = req.body.newsimg,
      newstime = req.body.newstime,
      newssrc = req.body.newssrc;//分号!
  connection.query('INSERT INTO `news`(`newsType`, `newsTitle`, `newsImg`, `newsTime`, `newsSrc`) VALUES (?,?,?,?,?);',[newstype,newstitle,newsimg,newstime,newssrc],function(err,data){
    res.json(data);
  });
});

module.exports = router;

/**
 * Created by yzy on 2017/5/27.
 */

$(document).ready(function(){
  $(window).on("load",function(){
    imgLocation();
    var dataImg = {"data":[{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"5.jpg"}]};
    window.onscroll = function(){
      if(scrollside()){
        $.each(dataImg.data,function(index,value){
          var box = $("<div>").addClass("box").appendTo($("#container"));
          var content = $("<div>").addClass("content").appendTo(box);
//                    console.log("./imgStore/"+$(value).attr("src"));
          $("<img>").attr("src","./imgStore/"+$(value).attr("src")).appendTo(content);
        });
        imgLocation();
      }
    };
    //监测宽度
    window.onresize=function () {
      imgLocation();
    }
  });
  // go2top
  $(function() {
      $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
          $("#toTop").fadeIn(); 
        } else {
          $("#toTop").fadeOut();
        }
      });
      $("body").append("<div id=\"toTop\" style=\"border:1px solid #444;background:#333;color:#fff;text-align:center;padding:10px 13px 7px 13px;position:fixed;bottom:10px;right:10px;cursor:pointer;display:none;font-family:verdana;font-size:22px;\">^</div>");
      $("#toTop").click(function() {
        $("body,html").animate({scrollTop:0},800);
      });
    });
});


function scrollside(){
  var box = $(".box");
  var lastboxHeight = box.last().get(0).offsetTop+Math.floor(box.last().height()/2);
  var documentHeight = $(window).height();
  var scrollHeight = $(window).scrollTop();
  return (lastboxHeight<scrollHeight+documentHeight)?true:false;
}

function imgLocation(){
  var box = $(".box");
  var boxWidth = box.eq(0).width();
  var num = Math.floor($(window).width()/boxWidth);
  var boxArr=[];
  box.each(function(index,value){
//        console.log(index+"--"+value);
    var boxHeight = box.eq(index).height();
    if(index<num){
      //重新布局
      boxArr[index]= boxHeight;
      $(value).css({
        "position":"absolute",
        "top":"0",
        "left":boxWidth*index
      });
//            console.log(boxHeight);
    }else{
      var minboxHeight = Math.min.apply(null,boxArr);
//            console.log(minboxHeight);
      var minboxIndex = $.inArray(minboxHeight,boxArr);
//            console.log(minboxIndex);
//            console.log(value);
      $(value).css({
        "position":"absolute",
        "top":minboxHeight,
        "left":box.eq(minboxIndex).position().left
      });
      boxArr[minboxIndex]+=box.eq(index).height();
    }
  });
}
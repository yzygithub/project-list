/**
 * Created by yzy on 2017/6/3.
 */

//打开后台页面时，刷新新闻列表
$(document).ready(function () {
  var $newsTable = $('#newsTable>tbody');
  refreshNewsList();

  //添加新闻
  $('#newsSubmit').click(function (e) {
    e.preventDefault();
  //  输入判断
    if ($('#newstitle').val()==='' || $('#newsimg').val()==='' || $('#newstime').val()==='' || $('#newssrc').val()==='') {
      if ($('#newstitle').val()==='') {
        $('#newstitle').parent().addClass('has-error');
      } else {
        $('#newstitle').parent().removeClass('has-error');
      }
      if ($('#newsimg').val()==='') {
        $('#newsimg').parent().addClass('has-error');
      } else {
        $('#newsimg').parent().removeClass('has-error');
      }
      if ($('#newstime').val()==='') {
        $('#newstime').parent().addClass('has-error');
      } else {
        $('#newstime').parent().removeClass('has-error');
      }
      if ($('#newssrc').val()==='') {
        $('#newssrc').parent().addClass('has-error');
      } else {
        $('#newssrc').parent().removeClass('has-error');
      }
    }else {
      var jsonNews = {
        newstype:$('#newstype').val(),
        newstitle:$('#newstitle').val(),
        newsimg:$('#newsimg').val(),
        newstime:$('#newstime').val(),
        newssrc:$('#newssrc').val()
      };
      $.ajax({
        url:'/admin/insertNews',
        type:'post',
        data:jsonNews,
        datatype:'json',
        success:function (data) {
          refreshNewsList();
          //重置表单
          $('#myForm input').val("");
          console.log(data);
        }
      });
    }
  });

  //删除新闻
  var deleteId=null;
  $newsTable.on('click','.btn-danger',function () {
    $('#deleteNews').modal('show');
    deleteId=$(this).prevAll().eq(4).html();
  });
  $('#confirmDelete').click(function () {
    if (deleteId) {
      $.ajax({
        url:'/admin/deleteNews',
        type:'post',
        data:{newsid:deleteId},
        success:function () {
          console.log('删除成功');
          $('#deleteNews').modal('hide');
          refreshNewsList();
        }
      });
    }
  });

  //更新新闻
  var updateId=null;
  $newsTable.on('click','.btn-primary',function () {
    $('#updateNews').modal('show');
    updateId=$(this).prevAll().eq(3).html();
    //获取新闻信息
    $.ajax({
      url:'/admin/currentNews',
      type:'get',
      datatype:'json',
      data:{newsid:updateId},
      success:function (data) {
        console.log(data);
        $('#newstypeUpdate').val(data[0].newsType);
        $('#newstitleUpdate').val(data[0].newsTitle);
        $('#newsimgUpdate').val(data[0].newsImg);
        $('#newstimeUpdate').val(data[0].newsTime.split('T')[0]);
        $('#newssrcUpdate').val(data[0].newsSrc);
      }
    });
  });


  $('#confirmUpdate').click(function (e) {
    e.preventDefault();
    //  输入判断
    if ($('#newstitleUpdate').val()==='' || $('#newsimgUpdate').val()==='' || $('#newstimeUpdate').val()==='' || $('#newssrcUpdate').val()==='') {
      if ($('#newstitleUpdate').val()==='') {
        $('#newstitleUpdate').parent().addClass('has-error');
      } else {
        $('#newstitleUpdate').parent().removeClass('has-error');
      }
      if ($('#newsimgUpdate').val()==='') {
        $('#newsimgUpdate').parent().addClass('has-error');
      } else {
        $('#newsimgUpdate').parent().removeClass('has-error');
      }
      if ($('#newstimeUpdate').val()==='') {
        $('#newstimeUpdate').parent().addClass('has-error');
      } else {
        $('#newstimeUpdate').parent().removeClass('has-error');
      }
      if ($('#newssrcUpdate').val()==='') {
        $('#newssrcUpdate').parent().addClass('has-error');
      } else {
        $('#newssrcUpdate').parent().removeClass('has-error');
      }
    }else {
      var updateNews = {
        newsid:updateId,
        newstype:$('#newstypeUpdate').val(),
        newstitle:$('#newstitleUpdate').val(),
        newsimg:$('#newsimgUpdate').val(),
        newstime:$('#newstimeUpdate').val(),
        newssrc:$('#newssrcUpdate').val()
      };
      console.log(updateNews);
      $.ajax({
        url:'/admin/updateNews',
        type:'post',
        data:updateNews,
        datatype:'json',
        success:function (data) {
          console.log('更新成功');
          console.log(data);
          $('#updateNews').modal('hide');
          refreshNewsList();
        }
      });
    }
  });

  //刷新新闻列表
  function refreshNewsList() {
    $newsTable.empty();
    $.ajax({
      type:'get',
      url:'/admin/getnews',
      data:{newstype:''},/*如果没有，会报错*/
      datatype:'json',
      success:function (data) {
        var $tbody=$('tbody');
        $.each(data,function (index, item) {
          var $tr=$('<tr>').appendTo($tbody);
          var $tdid=$('<td>').html(item.newsId).appendTo($tr);
          var $tdtype=$('<td>').html(item.newsType).appendTo($tr);
          var $tdtitle=$('<td>').html(item.newsTitle).appendTo($tr);
          var date = item.newsTime.split('T')[0];
          var $tdtime=$('<td>').html(date).appendTo($tr);
          var $btnupdt=$('<button>').html('编辑').addClass('btn btn-primary btn-sm').appendTo($tr);
          var $btndelt=$('<button>').html('删除').addClass('btn btn-danger btn-sm').appendTo($tr);
        });
      }
    });
  }
});
/**
 * 使用了单例模式。单例模式声明一个命名空间，它生成一个唯一的全局变量。可以更好的维护代码，更好的控制代码。
 */

//      更多产品
var moreproduct ={
  init:function(){
    var me = this;
    me.render();
    me.bind();
  },
  render:function(){
    var me = this;
    me.mrpdt = $('#mrpdt');
  },
  bind:function(){
    var me = this;
    me.mrpdt.hover(
      function () {
        $('.bdbriimg').fadeIn(200);
      },
      function () {
        $('.bdbriimg').fadeOut(200);
      })
  }
}

moreproduct.init();

//      更多产品
  // $('#mrpdt').hover(
  //   function () {
  //     $('.bdbriimg').fadeIn(200);
  // },
  //   function () {
  //     $('.bdbriimg').fadeOut(200);
  //   }
  // );

//      账号登录
var userlogin ={
  init:function(){
    var me = this;
    me.render();
    me.bind();
  },
  render:function(){
    var me = this;
    me.user = $('#user');
  },
  bind:function(){
    var me = this;
    me.user.hover(
      function () {
        $('#s_user_name_menu').css('display','block');
      },
      function () {
        $('#s_user_name_menu').css('display','none');
      })
  }
}
userlogin.init();

//      账号登录
  // $('#user').mouseenter(function () {
  //   $('#s_user_name_menu').css('display','block');
  // }).mouseleave(function () {
  //   $('#s_user_name_menu').css('display','none');
  // });

//      设置
var showsetting ={
  init:function(){
    var me = this;
    me.render();
    me.bind();
  },
  render:function(){
    var me = this;
    me.setting = $('#setting');
  },
  bind:function(){
    var me = this;
    me.setting.hover(
      function () {
        $('#s_user_setting_menu').css('display','block');
      },
      function () {
        $('#s_user_setting_menu').css('display','none');
      })
  }
}
showsetting.init();


//      设置
  // $('#setting').mouseenter(function () {
  //   $('#s_user_setting_menu').css('display','block');
  // }).mouseleave(function () {
  //   $('#s_user_setting_menu').css('display','none');
  // });

//  显示天气
var showweather ={
  init:function(){
    var me = this;
    me.render();
    me.bind();
  },
  render:function(){
    var me = this;
    me.weather = $('#s_weather_wrapper');
    me.s_mod_setweather=$('#s_mod_setweather');
  },
  bind:function(){
    var me = this;
    me.weather.hover(
      function () {
        me.s_mod_setweather.fadeIn();
      },
      function () {
        me.s_mod_setweather.fadeOut();
      }
    )
    me.s_mod_setweather.hover(
      function () {
        s_mod_setweather.show();
      },
      function () {
        s_mod_setweather.fadeOut();
      }
    )
  }
}
showweather.init();

//  显示天气
  // var s_mod_setweather=$('#s_mod_setweather');
  // $('#s_weather_wrapper').hover(
  //   function () {
  //     s_mod_setweather.fadeIn();
  //   },
  //   function () {
  //     s_mod_setweather.fadeOut();
  //   }
  // );
  // s_mod_setweather.hover(
  //   function () {
  //     s_mod_setweather.show();
  //   },
  //   function () {
  //     s_mod_setweather.fadeOut();
  //   }
  // );
//  显示天气 end

//  设置hover
var setbtnhover ={
  init:function(){
    var me = this;
    me.render();
    me.bind();
  },
  render:function(){
    var me = this;
    me.btnhover = $('.lunar-setting-btn');
  },
  bind:function(){
    var me = this;
    me.btnhover.hover(
      function () {
        me.btnhover.addClass('hover-setting-btn');
      },
      function () {
        me.btnhover.removeClass('hover-setting-btn');
      }
    )
  }
}
setbtnhover.init();

//  设置hover
  // $('.lunar-setting-btn').hover(
  //   function () {
  //     $(this).addClass('hover-setting-btn');
  //   },
  //   function () {
  //     $(this).removeClass('hover-setting-btn');
  //   }
  // );

//  setweather-setting 显示
var showweathersetting ={
  init:function(){
    var me = this;
    me.render();
    me.bind();
  },
  render:function(){
    var me = this;
    me.lunarsetbtn = $('.lunar-setting-btn');
    me.settingsave = $('.setting-save');
    me.settingcancle = $('.setting-cancel');
  },
  bind:function(){
    var me = this;
    me.lunarsetbtn.click(function(){
      me.showset();
    })
    me.settingsave.click(function(){
      me.hideset();
    })
    me.settingcancle.click(function(){
      me.hideset();
    })
  },
  showset:function(){
    var setweather_setting = $('.setweather-setting');
    var setweather_content = $('.setweather-content');
    setweather_setting.css('display','block');
    setweather_content.css('display','none');
  },
  hideset:function(){
    var setweather_setting = $('.setweather-setting');
    var setweather_content = $('.setweather-content');
    setweather_setting.css('display','none');
    setweather_content.css('display','block');
  }
}
showweathersetting.init();

//  setweather-setting 显示
  // var setweather_setting = $('.setweather-setting');
  // var setweather_content = $('.setweather-content');
  // $('.lunar-setting-btn').click(
  //   function () {
  //     setweather_setting.css('display','block');
  //     setweather_content.css('display','none');
  //   }
  // );
  // $('.setting-save').click(
  //   function () {
  //   setweather_setting.css('display','none');
  //   setweather_content.css('display','block');
  // });
  // $('.setting-cancel').click(
  //   function () {
  //   setweather_setting.css('display','none');
  //   setweather_content.css('display','block');
  // });

//  切换tab
var switchtab ={
  init:function(){
    var me = this;
    me.render();
    me.bind();
  },
  render:function(){
    var me = this;
    me.s_menu_mine = $('#s_menu_mine');
    me.recommend = $('#recommend');
    me.navigator = $('#navigator');
    me.video = $('#video');
  },
  bind:function(){
    var me = this;
    me.s_menu_mine.click(function(){
      me.removecurrentclass();
      me.add_s_menu_mine_class();
    });
    me.recommend.click(function(){
      me.removecurrentclass();
      me.add_recommend_class();
    });
    me.navigator.click(function(){
      me.removecurrentclass();
      me.add_navigator_class();
    });
    me.video.click(function(){
      me.removecurrentclass();
      me.add_video_class();
    });
  },
  removecurrentclass:function(){
    $('.current').removeClass('current');
    $('.current-content').removeClass('current-content');
  },
  add_s_menu_mine_class:function(){
    $('#s_menu_mine').addClass('current');
    $('#s_content_100').addClass('current-content');
  },
  add_recommend_class:function(){
    $('#recommend').addClass('current');
    $('#s_content_2').addClass('current-content');
  },
  add_navigator_class:function(){
    $('#navigator').addClass('current');
    $('#s_content_1').addClass('current-content');
  },
  add_video_class:function(){
    $('#video').addClass('current');
    $('#s_content_15').addClass('current-content');
  },
}
switchtab.init();

//  切换tab
//  点击我的关注
//   $('#s_menu_mine').click(function () {
//     $('.current').removeClass('current');
//     $(this).addClass('current');
//     $('.current-content').removeClass('current-content');
//     $('#s_content_100').addClass('current-content');
//   });
// //  点击推荐
//   $('#recommend').click(function () {
//     $('.current').removeClass('current');
//     $(this).addClass('current');
//     $('.current-content').removeClass('current-content');
//     $('#s_content_2').addClass('current-content');
//   });
// //  点击导航
//   $('#navigator').click(function () {
//     $('.current').removeClass('current');
//     $(this).addClass('current');
//     $('.current-content').removeClass('current-content');
//     $('#s_content_1').addClass('current-content');
//   });
// //  点击视频
//   $('#video').click(function () {
//     $('.current').removeClass('current');
//     $(this).addClass('current');
//     $('.current-content').removeClass('current-content');
//     $('#s_content_15').addClass('current-content');
//   });
//  切换tab end

// 显示换肤
var showskin ={
  init:function(){
    var me = this;
    me.render();
    me.bind();
  },
  render:function(){
    var me = this;
    me.switch_skin = $('#switch_skin');
    me.pack_up = $('#pack_up');
  },
  bind:function(){
    var me = this;
    me.switch_skin.click(function(){
      $('#s_skin_layer').slideDown(500);
    })
    me.pack_up.click(function(){
      $('#s_skin_layer').slideUp(500);
    })
  }
}
showskin.init();

// 显示换肤
  // $('#switch_skin').click(function () {
  //   $('#s_skin_layer').slideDown(500);
  // });
  // $('#pack_up').click(function () {
  //   $('#s_skin_layer').slideUp(500);
  // });

// 切换背景颜色
var switckbackground ={
  init:function(){
    var me = this;
    me.render();
    me.bind();
  },
  render:function(){
    var me = this;
    me.background1 = $('#background1');
    me.background2 = $('#background2');
    me.background3 = $('#background3');
    me.background4 = $('#background4');
    me.background5 = $('#background5');
    me.background6 = $('#background6');
    me.background7 = $('#background7');
  },
  bind:function(){
    var me = this;
    var pc_wrapper=$('#pc_wrapper');
    var logoImg=$('#logoImg');
    var bkgsrc = 'url(img/background.jpg)';
    var logowhitesrc = 'img/logo_white.png';
    me.background1.click(function(){
      me.switchColorLogo(bkgsrc,logowhitesrc);
    })
    me.background2.click(function(){
      me.switchColorLogo('#c6fffe',logowhitesrc);
    })
    me.background3.click(function(){
      me.switchColorLogo('#ffc9c6',logowhitesrc);
    })
    me.background4.click(function(){
      me.switchColorLogo('#508b7d',logowhitesrc);
    })
    me.background5.click(function(){
      me.switchColorLogo('#7BC7FF',logowhitesrc);
    })
    me.background6.click(function(){
      me.switchColorLogo('#f0f0f0',logowhitesrc);
    })
    me.background7.click(function(){
      me.switchColorLogo('#fff','img/bd_logo1.png');
    })
  },
  switchColorLogo:function(color,logo){
    var me = this;
    $('#pc_wrapper').css('background',color);//切换背景
    $('#logoImg').attr('src',logo);//切换logo
    me.localStorageIO();
  },
  localStorageIO:function(){
    //存入localstorage
    var bg = $("#pc_wrapper");
    var bgcol = bg.css('background');
    var logosrc = $('#logoImg').attr('src');
    localStorage.setItem("bgColor", bgcol);
    localStorage.setItem("logosrc", logosrc);
  }
}
switckbackground.init();

// function switchColor(color) {//切换背景颜色
//   var pc_wrapper=$('#pc_wrapper');
//   var logoImg=$('#logoImg');
//   switch(color)
//   {
//     case 'feffc6':
//       pc_wrapper.css('background','url(img/background.jpg)');//切换背景
//       logoImg.attr('src','img/logo_white.png');//切换logo
//       break;
//     case 'c6fffe':
//       pc_wrapper.css('background','#c6fffe');
//       logoImg.attr('src','img/logo_white.png');
//       break;
//     case 'ffc9c6':
//       pc_wrapper.css('background','#ffc9c6');
//       logoImg.attr('src','img/logo_white.png');
//       break;
//     case '508b7d':
//       pc_wrapper.css('background','#508b7d');
//       logoImg.attr('src','img/logo_white.png');
//       break;
//     case '7BC7FF':
//       pc_wrapper.css('background','#7BC7FF');
//       logoImg.attr('src','img/logo_white.png');
//       break;
//     case 'f0f0f0':
//       logoImg.attr('src','img/logo_white.png');
//       pc_wrapper.css('background','#f0f0f0');
//       break;
//     case 'fff':
//       pc_wrapper.css('background','#fff');
//       logoImg.attr('src','img/bd_logo1.png');
//       break;default:
//     alert('切换背景颜色失败');
//   }
// //存入localstorage
//   var bg = document.getElementById("pc_wrapper");
//   var bgcol = bg.style.background;
//   var logosrc = logoImg.attr('src');
//   localStorage.setItem("bgColor", bgcol);
//   localStorage.setItem("logosrc", logosrc);
// }
// 读取localstorage
 $("#pc_wrapper").css('background',localStorage.getItem("bgColor"));
 $("#logoImg").attr('src',localStorage.getItem("logosrc"));


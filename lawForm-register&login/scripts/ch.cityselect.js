(function($){
	$.fn.iCitySelect = function(options){
		var para = {};
		var self = this;
		var defaults = {
			url			: 'http://www.ch64.cn/index/city',
			prov		: "[name='prov']",
			city		: "[name='city']",
			dist		: "[name='dist']",
			initValue	: '', // 省份默认值
			city_default: '', // 城市默认值
			dist_default: '', // 地区默认值
		};
		para = $.extend(defaults,options);
		
		var prov = $(self).find(para.prov);
		var city = $(self).find(para.city);
		var dist = $(self).find(para.dist);
		
		para.initValue = para.initValue.toString();
		var prov_default = para.initValue.substring(0,2);
		var city_default = para.initValue.substring(0,4);
		var dist_default = para.initValue;
		var createOption = function(name,value,selected){
			selected = selected||false;
			return '<option value="'+value+'" '+(selected?'selected':'')+'>'+name+'</option>';
		};
		
		var getCity = function(pid){
			// 添加市
			$.ajax({
				type:'get',
				url:para.url+'?method=city&pid='+pid,
				success:function(d){
					if(d.length>0) {
						$.each(d.data,function(i,c){
							city.append(createOption(c.name,c.number,c.number==city_default));
						});
						if(d.length==1) {
							city.find("option").eq(1).attr('selected','selected');
							city.find("option").eq(0).remove();
						}
						city.change();
					}
				},
				dataType:'json'
			});
		};
		
		var getDist = function(cid){
			// 添加区
			$.ajax({
				type:'get',
				url:para.url+'?method=dist&cid='+cid,
				success:function(d){
					if(d.length>0) {
						$.each(d.data,function(i,d){
							dist.append(createOption(d.name,d.number,d.number==dist_default));
						});
						if(d.length==1) {
							dist.find("option").eq(1).attr('selected','selected');
							dist.find("option").eq(0).remove();
						}
					}
				},
				dataType:'json'
			});
		};
		
		var init = function(){
			prov.html(createOption('选择省份',''));
			city.html(createOption('选择市',''));
			dist.html(createOption('选择区',''));
			// 添加省份
			$.ajax({
				type:'get',
				url:para.url+'?method=prov',
				success:function(d){
					if(d.length>0) {
						$.each(d.data,function(i,p){
							prov.append(createOption(p.name,p.number,p.number==prov_default));
							prov.change();
						});
					}
				},
				dataType:'json'
			});
			// 省份改变
			prov.change(function(){
				city.html(createOption('选择市','')); // 清空城市列表
				dist.html(createOption('选择区','')); // 清空区域列表
				if(prov.val()!='') {
					getCity(prov.val()); // 加载城市
				}
			});
			// 城市改变
			city.change(function(){
				dist.html(createOption('选择区','')); // 清空区域列表
				if(city.val()!='') {
					getDist(city.val()); // 加载区域
				}
			});
		};
		init();
	};
	
})(jQuery);;
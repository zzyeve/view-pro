;$(function(){
	//可以使一个对象实现无限运动，但是，每次运动的时间都是一样的
	var fireworm = new Object();
	//创建一个元素
	fireworm.element = $("<img src = 'img/1.jpg'/>");
	//绝对定位，需要坐标点，（x,y），可以使用字面量去创建一个返回的对象,或者是创建一个数组
	//如果需要使用坐标点时，可以执行showPoint()方法，然后直接找他的pointX和pointY属性
	fireworm.showPoint = function(){
//		var x = 100;
//		var y = 100;
		//随机数
		var x = Math.random()*(window.innerWidth - 58);
		var y = Math.random()*(window.innerHeight - 58);
		var point = {
			pointX:x,
			pointY:y
		}
		return point;
	}
	//将对象添加到舞台中
	fireworm.show = function(){
		this.element.css({
			"top":this.showPoint().pointY+"px",
			"left":this.showPoint().pointX+"px"
		})
		$("div").append(this.element);
	}
	
	//创建好之后让该对象去运动
	fireworm.run = function(){
		var x = this.showPoint().pointX+"px";
		var y = this.showPoint().pointY+"px";
		var _this = this;
		this.element.animate({
			"left":x,
			"top":y
		},2000,function(){
			_this.run();
		})
	}
	
	fireworm.show();
	fireworm.run()
});

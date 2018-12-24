;$(function(){
	var fireworm = new Object();
	//创建一个元素
	fireworm.element = $("<img src = 'img/1.jpg'/>");
	//绝对定位，需要坐标点，（x,y），可以使用字面量去创建一个返回的对象,或者是创建一个数组
	//如果需要使用坐标点时，可以执行showPoint()方法，然后直接找他的pointX和pointY属性
	fireworm.showPoint = function(){
		var x = 100;
		var y = 100;
//		var point = {
//			pointX:x,
//			pointY:y
//		}
		var point = [x,y];
		return point;
	}
	//将对象添加到舞台中
	fireworm.show = function(){
		this.element.css({
//			"top":this.showPoint().pointY+"px",
//			"left":this.showPoint().pointX+"px"
			"top":this.showPoint()[1]+"px",
			"left":this.showPoint()[0]+"px"
		})
		$("div").append(this.element);
	}
	
	//创建好之后让该对象去运动
	fireworm.run = function(){
		this.element.animate({
			"left":"300px",
			"top":"500px"
			
		},2000)
	}
	
	fireworm.show();
	fireworm.run()
});

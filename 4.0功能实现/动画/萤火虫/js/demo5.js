;$(function(){
	//可以使一个对象实现无限运动，但是，每次运动的时间都是一样的
	//将运动的时间设置为随机数
	//接下来工厂模式
	//接下来构造函数
	//(1)修改工厂的方法为你自己需要的那个对象Firewoem
	//（2）将原先工厂中的firewoem对象全部修改为this
	//(3)将工厂的中的return firewoem;这句话删掉，在构造函数中是不需要的
	//（4）创建对象的方式改为new
	
	
	
	function Firewoem(){
		//创建一个元素
		this.element = $("<img src = 'img/1.jpg'/>");
		//绝对定位，需要坐标点，（x,y），可以使用字面量去创建一个返回的对象,或者是创建一个数组
		//如果需要使用坐标点时，可以执行showPoint()方法，然后直接找他的pointX和pointY属性
		this.showPoint = function(){
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
		this.show = function(){
			this.element.css({
				"top":this.showPoint().pointY+"px",
				"left":this.showPoint().pointX+"px"
			})
			$("div").append(this.element);
		}
		
		
		this.speedTime = function(){
			var speed = (Math.random()+5)*1000;
			return speed;
		}
		//创建好之后让该对象去运动
		this.run = function(){
			var x = this.showPoint().pointX+"px";
			var y = this.showPoint().pointY+"px";
			var speed = this.speedTime();
			var _this = this;
			this.element.animate({
				"left":x,
				"top":y
			},speed,function(){
				_this.run();
			})
		}
	}
	
	
	//现在需要20个对象
	var totalNum = 50;
	for(var i = 0;i<totalNum;i++){
		var fireworm = new Firewoem();
		fireworm.show();
		fireworm.run();
	}
	//不建议使用定时器去创建
//	var timer = "";
//	var count = 0;
//	timer = setInterval(function(){
//		if(count>5){
//			clearInterval(timer);
//			return;
//		}
//		var fireworm = creatFW();
//		fireworm.show();
//		fireworm.run();
//		count++;
//	},100);
	
	
});

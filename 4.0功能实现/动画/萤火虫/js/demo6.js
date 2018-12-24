;$(function(){
	//可以使一个对象实现无限运动，但是，每次运动的时间都是一样的
	//将运动的时间设置为随机数
	//接下来工厂模式
	//接下来构造函数
	//(1)修改工厂的方法为你自己需要的那个对象Firewoem
	//（2）将原先工厂中的firewoem对象全部修改为this
	//(3)将工厂的中的return firewoem;这句话删掉，在构造函数中是不需要的
	//（4）创建对象的方式改为new
	//不支持连缀写法，需要添加return this去支持
	function Firewoem(){
		this.element = $("<img src = 'img/1.jpg'/>");
	}
	
	Firewoem.prototype.showPoint = function(){
		//随机数
		var x = Math.random()*(window.innerWidth - 58);
		var y = Math.random()*(window.innerHeight - 58);
		var point = {
			pointX:x,
			pointY:y
		}
		return point;
	}
	Firewoem.prototype.show = function(){
		this.element.css({
			"top":this.showPoint().pointY+"px",
			"left":this.showPoint().pointX+"px"
		})
		$("div").append(this.element);
	}
	Firewoem.prototype.speedTime = function(){
		var speed = (Math.random()+5)*1000;
		return speed;
	}
	Firewoem.prototype.run = function(){
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
	
	
	
	//现在需要20个对象
	var totalNum = 50;
	for(var i = 0;i<totalNum;i++){
		var fireworm = new Firewoem();
		fireworm.show();
		fireworm.run();
	}

	
});

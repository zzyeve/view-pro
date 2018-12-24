;$(function(){
	//缺陷：不能一直运行下去
	
	
	function Firewoem(){
		this.element = $("<img src = 'img/1.jpg'/>");
		this.setPointX = function(value){
			this.pointX = value;
		}
		this.getPointX = function(value){
			return this.pointX;
		}
		this.setPointY = function(value){
			this.pointY = value;
		}
		this.getPointY = function(value){
			return this.pointY;
		}
		
		
		this.show = function(x,y){
			this.element.css({
				"top":y+"px",
				"left":x+"px"
			})
			$("div").append(this.element);
		}
		
		this.setSpeed = function(value){
			this.speed = value;
		}
		this.getSpeed = function(value){
			return this.speed;
		}
		
		this.run = function(x,y,speed){
			var x = x+"px";
			var y = y+"px";
			var _this = this;
			
			this.element.animate({
				"left":x,
				"top":y
			},speed,function(){
				_this.run(_this.getPointX(_this.setPointX(Math.random()*(window.innerWidth - 58))),
				_this.getPointY(_this.setPointY(Math.random()*(window.innerHeight - 58))),
				_this.getSpeed(_this.setSpeed((Math.random()+5)*1000)));
			})
		}
	}
	
	
	//现在需要20个对象
	var totalNum = 5;
	for(var i = 0;i<totalNum;i++){
		var fireworm = new Firewoem();
		fireworm.setPointX(Math.random()*(window.innerWidth - 58));	
		fireworm.setPointY(Math.random()*(window.innerHeight - 58));
		fireworm.show(fireworm.getPointX(),fireworm.getPointY());
		console.log("1:"+fireworm.getPointX()+"----"+fireworm.getPointY())
		fireworm.setSpeed((Math.random()+5)*1000);
		fireworm.setPointX(Math.random()*(window.innerWidth - 58));	
		fireworm.setPointY(Math.random()*(window.innerHeight - 58));
			console.log("2:"+fireworm.getPointX()+"----"+fireworm.getPointY())
		fireworm.run(fireworm.getPointX(),fireworm.getPointY(),fireworm.getSpeed());
	}
	
	
});

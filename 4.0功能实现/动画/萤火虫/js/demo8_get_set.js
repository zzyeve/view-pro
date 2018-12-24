function Person(){
	this.setName = function(value){
		this.name = value;
	}
	this.getName = function(){
		return this.name;
	}
}


var person = new Person();
person.setName("wxx");
alert(person.getName());
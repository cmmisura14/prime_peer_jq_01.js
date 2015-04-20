//Utility function
//A simple random number generator

function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}

function Person(age, sex, weight){
	this.age = age;
	this.weight = weight;
	this.sex = sex;
	if(this.sex == 1){
		this.sex = "male";
	} else {
		this.sex = "female";
	}
}
var i = 0;
$(document).ready(function(){
	$("#btn").on("click", function(){
		i++;
		var age = randomNumber(1,100);
		var sex = randomNumber(1,2);
		var weight = randomNumber(60,300);

		var Scott = new Person(age,sex,weight);
		$("#list").prepend("<p>Person " + i + " has age: " + Scott.age + " years old Gender: " + Scott.sex + " weight: " + Scott.weight + "lbs</p>");
	});
});




//console.log(Scott);

var d = new Date();
var time = d.getHours();
let greeting;

if (time > 5 & time < 11) {
	greeting = "Good morning";
} else if (time > 11 & time < 15) {
	greeting = "Good afternoon";
} else if (time > 15 & time < 22) {
	greeting = "Good evening";
} else {
	greeting = "Good night";
}
document.getElementById("greeting").innerHTML = greeting + ", Mas";
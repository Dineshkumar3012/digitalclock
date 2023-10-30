let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let ampm = document.getElementById("ampm");
let day = document.getElementById("day");

setInterval(getTime,1000);

function getTime(){
	let originalTime =new Date();
	let hrs = originalTime.getHours();
	let mins = originalTime.getMinutes();
	let sec = originalTime.getSeconds();
	
	let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	
	let day1 = days[originalTime.getDay()];
	
	hours.innerText = hrs;
	minutes.innerText = mins;
	seconds.innerText = sec;
	day.innerText = day1;
	
	if(hrs>12){
		let pmm = hrs-12
		hours.innerText = pmm;
		ampm.innerText = "PM";
		
		if(pmm<10){
			hours.innerText = `0${pmm}`;
		}
	}
	else{
		hours.innerText = hrs;
	}
	
	if(mins<10){
		minutes.innerText = "0"+mins
	}
	else{
		minutes.innerText = mins;
	}
	
	if(sec<10){
		seconds.innerText = "0"+sec
	}
	else{
		seconds.innerText = sec;
	}
}
				
setInterval(bgColor,1000);

function bgColor(){
		let color = ["Red", "Blue", "Green", "Yellow", "Orange", "Purple", "Pink",
    "Brown", "Black", "White", "Gray", "Turquoise", "Teal", "Magenta", "Gold", "Silver", "Beige", "Maroon", "Olive", "Coral", "Indigo", "Violet", "Cyan", "Lime", "Lavender","lightgreen", "lightgrey", "Sapphire", "Emerald", "Amber", "orangered",
    "Mint", "Chocolate", "Charcoal", "Salmon", "Plum", "Navy", "Mustard", "Rose"]
		 
		let a=Math.floor((Math.random()*40)) ;
		
		document.body.style.backgroundColor = color[a];
}

3
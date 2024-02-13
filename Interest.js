const CalcuBtn = document.querySelector(".calcBtn")
const Principal = document.querySelector(".principal")
const Rate = document.querySelector(".rate")
const Time = document.querySelector(".Time")
const date = document.getElementById("date")
const Answer = document.querySelector(".Answer")
const Duration = document.querySelector("#duration")
function Calculate(){
	RateX = Number(Rate.value)
   PrincipalX = Number(Principal.value)
    TimeX = Number(Time.value)
    DurationX = Duration.value

switch(true){
	case DurationX == "year":
 Interest = Math.round(RateX * PrincipalX * TimeX / 100);
	break;
case DurationX == "month":
 Interest = Math.round(RateX * PrincipalX * TimeX / 1200);
	break;
case DurationX == "week":
 Interest = Math.round(RateX * PrincipalX * TimeX / 5200);
	break;
case DurationX == "day":
 Interest = Math.round(RateX * PrincipalX * TimeX / 36500);
	break;
}
let amount = Math.round(PrincipalX * Interest)

if(RateX == "" || PrincipalX == "" || TimeX == ""){
	alert("Please Insert Values For Principal, Rate and Time")
}

Answer.innerHTML = `<p>Principal Amount: <span>${PrincipalX}</span></p>
	<p>Total Interest: <span>${Interest}</span></p>
	<p>Total Amount: <span>${amount}</span></p>
		<p>Rate: <span>${RateX}</span></p>`

	
}


CalcuBtn.addEventListener("click", Calculate)

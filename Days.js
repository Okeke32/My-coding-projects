const butt = document.getElementById("been")
let Date1 = document.getElementById("date1")
let Date2 = document.getElementById("date2")
let daysNum = document.getElementById("result")
let label1 = document.getElementById("date1")
let label2 = document.getElementById("date2")

butt.onclick = function(){
Day = new Date(Date1.value)
fine = new Date(Date2.value)
if(Day.getTime() && fine.getTime()){
    let difference = fine.getTime() - Day.getTime()
   let dayDifferennce = Math.abs(difference / (1000 * 3600 * 24)) - 1
console.log(dayDifferennce)

daysNum.innerHTML = `The Difference Between The Days is ${dayDifferennce} `
}
else{
    alert("Select a valid date")
}
}
 


function get_money() {

let normal_rate = document.getElementById("d2").valueAsNumber
let overtime_rate = document.getElementById("d3").valueAsNumber
let hours_rate = document.getElementById("d4").valueAsNumber
let normal_hours = document.getElementById("d1").valueAsNumber
let money 
if(hours_rate <= normal_hours) {
    money = normal_rate * hours_rate
}
else(hours_rate > normal_hours); {
    money = (normal_rate * normal_hours) + ([hours_rate - normal_hours] * overtime_rate)
}
document.getElementById("result").innerHTML = money + "dollars"
}


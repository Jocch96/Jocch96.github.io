function get_max() {

let a = document.getElementById("i1").valueAsNumber
let b = document.getElementById("i2").valueAsNumber
let c = document.getElementById("i3").valueAsNumber
let max = a

if (b > max) {
    max = b
}
if(c > max) {
    max = c
}
document.getElementById("max").innerHTML = max 
}
document.getElementById("b1").addEventListener("click", get_max)
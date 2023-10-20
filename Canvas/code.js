
let canvas1 = document.getElementById("c1")
let painter1 = canvas1.getContext("2d")
painter1.fillStyle = "#000000"
painter1.fillRect(0,0,400,400)
painter1.fillStyle = "#FF0000"

let q = 10
let g = 0

while(g<13){
    let c = 10
    let n = 0
    while(n < 13){
        if(g >= n && n>= 12 - g){
        painter1.fillRect(c, q, 20, 20)
    }
    c = c + 30
    n++
}
q = q + 30
g++
}

let canvas2 = document.getElementById("c2")
let painter2 = canvas2.getContext("2d")
painter2.fillStyle = "#000000"
painter2.fillRect(0,0,400,400)
painter2.fillStyle = "#ff0000";
let y = 10
for (let a = 0; a < 13; a++) {
    let x=10
    for(let p = 0; p < 13; p++) {
    if(a % 2 === 1 && p%2 === 1 || a%2 === 0 && p%2 === 0){
       painter2.fillRect(x,y,20,20)
        }
        x = x + 30
    }
y = y + 30
}

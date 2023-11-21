let canvas_element = document.getElementById("c1")
let brush = canvas_element.getContext("2d")
let i = 0
let timer1 = setInterval(countdown, 1000)

function drawBackground () {
    brush.fillStyle = "#FF0000"
    brush.fillRect(0,0,400,400)
}
drawBackground ()
function countdown () {
    brush.fillStyle = "#0000FF"
    brush.textBaseline = "top"
    brush.font = "100px Arial"
    brush.fillText(""+1, 100, 100)
    --i;
    if (i === 10) {
        clearInterval(timer1)
    }
}

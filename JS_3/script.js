let count=0

document.getElementById("count").innerHTML=count

function increase(){
    count=count+1
    document.getElementById("count").innerHTML=count
}

function reset(){
    count=0
    document.getElementById("count").innerHTML=count
}
function decrease(){
    count=count-1
    document.getElementById("count").innerHTML=count
}


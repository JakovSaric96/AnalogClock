let handText = document.getElementById("timeEl")
let handDiv = document.getElementById("handEl")
let practice = 0
let time = 0
let hours = 0
let minutes = 0
let currentTime = 0
let handAngle = 0
let timeOfDay = ""



function clicker(){

    time = new Date()
    hours = time.getHours()
    minutes = time.getMinutes() 
    currentTime = ((minutes + (hours*60)) *2)
    console.log(currentTime)
    handAngle = (currentTime * 0.25) - 90
    handDiv.style.transform = `rotate(${handAngle}deg)`
    if(hours < 12){
        timeOfDay = "AM"
    }
    else{
        hours = hours - 12
        timeOfDay = "PM"
    }
    if(minutes <10){
        minutes = "0" + minutes
    }
    if(hours == "0"){
        hours = "12"
    }
    handText.innerText = `${hours}:${minutes} ${timeOfDay}`
}

function tryclicker(){
    practice += 15
    handDiv.style.transform = `rotate(${practice}deg)`
    console.log(practice) 
}
setInterval(function(){clicker()}, 1000)

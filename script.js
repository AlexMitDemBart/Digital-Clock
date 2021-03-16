
getCurrentTime()

function getCurrentTime() {
    const currentDate = new Date()

    const currentTime = formatTime(currentDate.getHours()) + ":"  + formatTime(currentDate.getMinutes()) + ":" 
    + formatTime(currentDate.getSeconds());

    setTime(currentTime)
}

function setTime(time){
    const timeElement = document.getElementById('time')
    timeElement.innerText = time
}


function formatTime(time) {
  return time < 10 ? `0${time}` : time
}

//initinal
setInterval(getCurrentTime,1000)
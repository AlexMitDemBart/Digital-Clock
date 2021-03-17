
getCurrentTime()

function getCurrentTime() {
    let currentDate = new Date()

    const currentTime = formatTime(currentDate.getHours()) + ":"  + formatTime(currentDate.getMinutes()) + ":" 
    + formatTime(currentDate.getSeconds());

    setTime(currentTime)
    setCurrentDate()
}

function setTime(time){
    const timeElement = document.getElementById('time')
    timeElement.innerText = time
}

function setCurrentDate(){
    const dateElement = document.getElementById('date')
    
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();

    today = dd + '.' + mm + '.' + yyyy;

    dateElement.innerText = today
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time
}

//initinal
setInterval(getCurrentTime,1000)
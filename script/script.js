let timer = setInterval(()=>{
    let date = new Date()
    let hours = date.getHours()*30
    let minutes = date.getMinutes()*6
    let seconds = date.getSeconds()*6
    let idSeconds = document.getElementById('seconds')
    idSeconds.style.transform= `rotate(${seconds}deg)`
    let idMinutes = document.getElementById('minutes')
    idMinutes.style.transform= `rotate(${minutes}deg)`
    let idHours = document.getElementById('hours')
    idHours.style.transform= `rotate(${hours}deg)`
})







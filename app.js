const vText = document.getElementById("vText");
const hours = document.getElementById("hour");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const watchTime = document.getElementById("watchTime");
const time = document.getElementById("time");


//watch date click handler
watchTime.addEventListener("click", () => {
    time.style.display = "block";
})


//get times
const getHours = () => {
    let date = new Date(); //getting the date function
    const hour = date.getHours();
    return hour;
}
const getMinutes = () => {
    let date = new Date(); //getting the date function
    const minutes = date.getMinutes();
    return minutes;
}
const getSeconds = () => {
    let date = new Date(); //getting the date function
    const seconds = date.getSeconds();
    return seconds;
}



//change text of title
const changeText = () => {
    vText.innerText = "A";
}


//setInterval of time and text
setInterval(() => {
    changeText();
}, 1000);
setInterval(() => {
    vText.innerText = "V";
}, 2000);

setInterval(() => {
    hours.innerText = getHours();
    minutes.innerText = getMinutes();
    seconds.innerText = getSeconds();
}, 1000);
a = document.getElementsByClassName("stopWatch")[0];
b = document.getElementsByClassName("startButton")[0];
c = document.getElementsByClassName("pauseButton")[0];
d = document.getElementsByClassName("continueButton")[0];
e = document.getElementsByClassName("restartButton")[0];
v = document.getElementsByClassName("miliSecond")[0];

seconds = 0;
minutes = 0;
hours = 0;
milli = 0;
myFunction = () => {
    milli += 1;
    if (milli === 99) {
        milli = 0;
        seconds += 1;
        if (seconds === 60) {
            seconds = 0;
            minutes += 1;
            if (minutes === 60) {
                minutes = 0;
                hours += 1;
            };
        };
    };
    newSeconds = seconds<10 ? "0"+seconds.toString() : seconds;
    newMinutes = minutes<10 ? "0"+minutes.toString() : minutes;
    newHours = hours<10 ? "0"+hours.toString() : hours;
    newMilli = milli<10 ? "0"+milli.toString() : milli;
    a.textContent = newHours+":"+newMinutes+":"+newSeconds;
    v.textContent = newMilli;
};
let f;
let p;
b.addEventListener("click", () => {
    clearInterval(p);
    clearInterval(f);
    f = setInterval(myFunction, 1000);
    p = setInterval(myFunction, 10);
});
c.addEventListener("click", () => {
    clearInterval(f);
    clearInterval(p);
});
d.addEventListener("click", () => {
    clearInterval(p);
    clearInterval(f);
    f = setInterval(myFunction, 1000);
    p = setInterval(myFunction, 10);
});
e.addEventListener("click", () => {
    milli = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    clearInterval(f);
    clearInterval(p);
    f = setInterval(myFunction, 1000);
    p = setInterval(myFunction, 10);
});
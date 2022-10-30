window.onload = function () {

        let seconds = 00,
        tens = 00,
        minutes = 00,
        hours = 00,
        appendTens = document.getElementById("tens"),
        appendSeconds = document.getElementById("seconds"),
        appendMinutes = document.getElementById("minutes"),
        appendHours = document.getElementById("hours"),
        buttonStart = document.getElementById("button-start"),
        buttonStop = document.getElementById("button-stop"),
        buttonReset = document.getElementById("button-reset"),
        Interval;

        buttonStart.onclick = function() {
            clearInterval(Interval);
            Interval = setInterval(startTimer, 10);
            buttonStart.style.display ='none';
            buttonStop.style.display ='unset';
        }

        buttonStop.onclick = function() {
            clearInterval(Interval);
            buttonStart.style.display ='unset';
            buttonStop.style.display ='none';
        }

        buttonReset.onclick = function() {
            clearInterval(Interval);
            tens ="00";
            seconds = "00";
            appendTens.innerHTML = tens;
            appendSeconds.innerHTML = seconds;
        }

        function startTimer () {
            tens++;
            if(tens <= 9){
                appendTens.innerHTML = "0"+ tens;
            }
            if(tens > 9){
                appendTens.innerHTML = tens;
            }
            if(tens > 99){
                console.log("seconds");
                seconds++;
                appendSeconds.innerHTML = "0"+ seconds;
                tens = 0;
                appendTens.innerHTML = "0" + 0;
            }
            if (seconds > 9){
                appendSeconds.innerHTML = seconds;
            }

            if(seconds > 59){
                minutes++;
                appendMinutes.innerHTML = "0"+ minutes;
                seconds = 0;
                appendSeconds.innerHTML = "0" + 0;
            }
            if (minutes > 9){
                appendMinutes.innerHTML = minutes;
            }
            if (minutes > 59){
                hours++;
                appendHours.innerHTML = "0" + hours;
                minutes = 0;
                appendMinutes.innerHTML = "0" + 0;
            }
            if(hours > 9){
                appendHours.innerHTML = hours;
            }
        }
}
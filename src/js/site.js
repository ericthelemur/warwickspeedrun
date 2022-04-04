/** Animation for the stopwatch **/
function easing(t) {
    return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t
};

/** Countdown timer **/
const countDownDate = new Date("2022-06-18T12:00:00Z").getTime();

// Update the count down every 1 second
const x = setInterval(function () {

    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    // Display the result in the countdown
    let daysText = days + (days === 1 ? " day" : " days");
    let hoursText = hours + (hours === 1 ? " hour" : " hours");
    let minutesText = minutes + (minutes === 1 ? " minute" : " minutes");

    document.getElementById("countdown").innerHTML = '<strong>WASD {{ event_year }}</strong> starts on <strong>{{ event_start_date }}</strong> in <strong id="days">' + daysText + '</strong>' + (
        days >= 7 ? '.' : ', <strong id="hours">' + hoursText + '</strong> and <strong id="mins">' + minutesText + '</strong>')

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "WASD is now <strong><a href=\"https://twitch.tv/warwickspeedrun\">live on Twitch</a></strong>!"
    }
}, 1000);

(function () {
    let clock = document.getElementById('stopwatch-hand').getBoundingClientRect().bottom;
    const bodyRect = document.body.getBoundingClientRect().y;
    const clockBottom = clock - bodyRect;

    document.addEventListener('scroll', function (event) {
        let angle = easing((clockBottom - window.scrollY) / clockBottom);
        angle = 360 - (360 * angle);

        document.documentElement.style.setProperty('--stopwatch-rotation', angle + 'deg');
    });
})();
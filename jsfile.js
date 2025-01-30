document.addEventListener("DOMContentLoaded", function () {
    // Set the offer expiration time (1 hour from now)
    const offerEndTime = new Date().getTime() + 1 * 60 * 60 * 1000; // 1 hour in milliseconds

    let timerElement = document.getElementById('timer'); // Correct reference for the timer inside the pricing section
    let timerElement2 = document.getElementById('timeroffer'); // Correct reference for the timer inside the pricing section

    // Function to update the countdown every second
    function updateCountdown() {
        const now = new Date().getTime();
        const remainingTime = offerEndTime - now;

        if (remainingTime <= 0) {
            timerElement.innerHTML = "Offer Expired!";
            timerElement2.innerHTML = "Offer Expired!";
            return;
        }

        // Calculate hours, minutes, and seconds
        const hours = Math.floor(remainingTime / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        // Update the timer inside the pricing section
        timerElement.innerHTML = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
        timerElement2.innerHTML = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    }

    // Update the countdown every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
    function pad(value) {
        return value < 10 ? `0${value}` : value;
    }
});

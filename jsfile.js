document.addEventListener("DOMContentLoaded", function () {
    // Set the offer expiration time (2 days from now)
    const offerEndTime = new Date().getTime() + 1 * 24 * 60 * 60 * 1000;
  
    function updateCountdown() {
      const now = new Date().getTime();
      const remainingTime = offerEndTime - now;
  
      if (remainingTime <= 0) {
        document.getElementById("countdown-timer").innerHTML =
          "Offer Expired!";
        return;
      }
  
      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
  
      // Display the countdown
      document.getElementById("countdown-timer").innerHTML = `
        ${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
  
    // Update the countdown every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
  });
  
document.addEventListener("DOMContentLoaded", function () {
    // Set the offer expiration time (1 hour from now)
    const offerEndTime = new Date().getTime() + 1 * 60 * 60 * 1000; // 1 hour in milliseconds

    let timerElement = document.getElementById('timer'); // Correct reference for the timer inside the pricing section
    let timerElement2 = document.getElementById('timeroffer'); // Correct reference for the timer inside the pricing section
    const shortNotesButton = document.getElementById('short-Btn');
    const handwrittenBtn = document.getElementById('handwritten-Btn');
    const onePageBtn = document.getElementById('one-page-Btn');
    const minMapButton = document.getElementById('mind-map-Btn');
    const flashCardButton = document.getElementById('flash-card-Btn');
    const bookButton = document.getElementById('book-Btn');
    const PyqButton = document.getElementById('pyq-Btn');
    const formulaeButton = document.getElementById('formulae-Btn');
    const ordernow = document.getElementById('cta-btn-timer');

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


// Open the Google Drive link in a new tab
    ordernow.addEventListener('click', function () {
        window.open('https://wa.me/+917599982188', '_blank');
      });
    shortNotesButton.addEventListener('click', function () {
        window.open('https://drive.google.com/drive/folders/1kcDuIHf867gqpx0KO8iJyvbTkWftMQIR?usp=sharing', '_blank');
      });
    handwrittenBtn.addEventListener('click', function () {
        window.open('https://drive.google.com/drive/folders/1VkYjZGNBkAorPzVpmB9PvarP4VplLQeA?usp=sharing', '_blank');
      });
    minMapButton.addEventListener('click', function () {
        window.open('https://drive.google.com/drive/folders/1VCjKyfBQKfJsBQtIWxuQbFZ0o9swU-KN?usp=sharing', '_blank');
      });
    flashCardButton.addEventListener('click', function () {
        window.open('https://drive.google.com/drive/folders/1tZUWVIg8SRqyL9Bz8_pOWyeIEyX14HhK?usp=sharing', '_blank');
      });
    PyqButton.addEventListener('click', function () {
        window.open('https://drive.google.com/drive/folders/1i4XdxLz6BRWMc7UqwnSPXDfOAJswQS7h?usp=sharing', '_blank');
      });
    bookButton.addEventListener('click', function () {
        window.open('https://drive.google.com/drive/folders/18mwkYRlC9HFCewRtd6peZPXs55z-sdwQ?usp=sharing', '_blank');
      });
    onePageBtn.addEventListener('click', function () {
        window.open('https://drive.google.com/drive/folders/1oANAsrB9MMN8iRUVUFsX76jnWw8czAF_?usp=sharing', '_blank');
      });
    formulaeButton.addEventListener('click', function () {
        window.open('https://drive.google.com/drive/folders/1RcFUq-t8g6C2F3bbEugJL7AR2DvhelBY?usp=sharing', '_blank');
      });


});

const timer = document.querySelector(".timer");

//1 апреля  2025 мск
const endDate = new Date("2025-06-01T00:00:00+03:00");

function updateTimer() {
    const now = new Date();
    const data = endDate - now;


    if (data <= 0) {
        timer.innerHTML = '<a href="https://t.me/nics51" style="color: inherit; text-decoration: none;">https://t.me/nics51</a>';
        return;
    }


    const days = Math.floor(data / (1000 * 60 * 60 * 24));
    const hours = Math.floor((data % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((data % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((data % (1000 * 60)) / 1000);

    timer.textContent = `${days}д ${hours}ч ${minutes}м ${seconds}с`;
}

setInterval(updateTimer, 1000);
updateTimer();
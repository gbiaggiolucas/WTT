let timers = {
    instagram: 0,
    whatsapp: 0,
    youtube: 0,
    tiktok: 0,
    twitter: 0
};

let intervalId;

function startTimer() {
    intervalId = setInterval(() => {
        // Simulação: aumentar o tempo de cada rede social em 1 segundo a cada segundo
        timers.instagram++;
        timers.whatsapp++;
        timers.youtube++;
        timers.tiktok++;
        timers.twitter++;
        
        document.getElementById("instagramTimer").textContent = timers.instagram;
        document.getElementById("whatsappTimer").textContent = timers.whatsapp;
        document.getElementById("youtubeTimer").textContent = timers.youtube;
        document.getElementById("tiktokTimer").textContent = timers.tiktok;
        document.getElementById("twitterTimer").textContent = timers.twitter;
    }, 1000);
}

function stopTimer() {
    clearInterval(intervalId);
}

document.getElementById("startTimer").addEventListener("click", startTimer);
document.getElementById("stopTimer").addEventListener("click", stopTimer);

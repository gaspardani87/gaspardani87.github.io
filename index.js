function updateCountdown() {
    const most = new Date();
    const karacsony = new Date('December 25, 2025 00:00:00');
    const kulonbseg = karacsony - most;

    const nap = Math.floor(kulonbseg / (1000 * 60 * 60 * 24));
    const ora = Math.floor((kulonbseg % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const perc = Math.floor((kulonbseg % (1000 * 60 * 60)) / (1000 * 60));
    const masodperc = Math.floor((kulonbseg % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = 
        `${nap} nap ${ora} óra ${perc} perc ${masodperc} másodperc`;

    if (kulonbseg < 0) {
        clearInterval(interval);
        document.getElementById('countdown').innerHTML = "Boldog Karácsonyt!";
    }
}

const interval = setInterval(updateCountdown, 1000);


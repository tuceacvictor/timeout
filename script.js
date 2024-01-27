const leaveDate = new Date('2024-02-05T18:00:00.000')

const locales = {
    days: ["День", "Дней"],
    hours: ["Час", "Часов"],
    minutes: ["Минута", "Минут"],
    seconds: ["Секунда", "Секунд"],
}

function returnLocales(type, value) {
    return " " + locales[type][value > 1 ? 1 : 0] + " "
}

function dhm(ms) {
    const days = Math.floor(ms / (24 * 60 * 60 * 1000));
    const daysms = ms % (24 * 60 * 60 * 1000);
    const hours = Math.floor(daysms / (60 * 60 * 1000));
    const hoursms = ms % (60 * 60 * 1000);
    const minutes = Math.floor(hoursms / (60 * 1000));
    const minutesms = ms % (60 * 1000);
    const sec = Math.floor(minutesms / 1000);
    return days + returnLocales("days", days) + hours + returnLocales("hours", hours) + minutes + returnLocales("minutes", minutes) + sec + returnLocales("seconds", sec);
}


setInterval(() => {
    const ramaining = leaveDate.getTime() - new Date().getTime();
    
    const v = dhm(ramaining);

    const timer = document.getElementById("timer");

    timer.innerHTML = v;
}, 1000)



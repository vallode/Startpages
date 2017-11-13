function settime() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    date.setHours(date.getHours() + 2);
    let hour2 = date.getHours();

    if (minute < 10) {
        minute = '0' + minute
    }

    document.querySelector('.header').classList.toggle('hidden')

    let london = `<ruby>${hour}<span>:</span>${minute}<rt>Home</rt></ruby>`;
    let sofia = `<ruby>${hour2}<span>:</span>${minute}<rt>Bulgaria</rt></ruby>`;

    document.getElementById('London').innerHTML = london;
    document.getElementById('Sofia').innerHTML = sofia;
}

document.addEventListener('DOMContentLoaded', function() {
    settime();
    time = setInterval( settime, 1000);
});
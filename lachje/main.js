function set_time() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    date.setHours(date.getHours() + 2);

    if (minute < 10) {
        minute = `0${minute}`
    }

    document.querySelector('.header').classList.toggle('hidden');
    document.getElementById('London').innerHTML = `<ruby>${hour}<span>:</span>${minute}<rt>Home</rt></ruby>`;
}

document.addEventListener('DOMContentLoaded', function() {
    set_time();
    let time = setInterval( set_time, 1000);
});
/* Important, get an api code from https://openweathermap.org/api and change it here */
Weather.setApiKey("");

/*
    Fill with links you want
    {} -> 'Link name' : 'Link'
 */

const links = [
    {
        'goodreads': 'https://www.goodreads.com/',
        'todoist': 'https://todoist.com/',
        'hackernews': 'https://news.ycombinator.com/',
    },

    {
        'Slack': 'https://slack.com/',
        'Trello': 'https://trello.com/',
        'Wrike': 'https://www.wrike.com',
        'heroku': 'https://dashboard.heroku.com/',
    },

    {
        '127': '127.0.0.1',
        'Drive': 'https://drive.google.com/drive/my-drive',
        'Mixtape': 'https://mixtape.moe/',
        'Webmaster': 'https://www.google.com/webmasters/tools/home?hl=en',
        'Analytics': 'https://analytics.google.com/analytics/web',
    },

    {
        'duck': '127.0.0.1',
        'cloud': 'https://drive.google.com/drive/my-drive',
        'horse': 'https://mixtape.moe/',
        'goose': 'https://www.google.com/webmasters/tools/home?hl=en',
    },
];

/* Ideally don't need to touch anything after this line :) */

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("menu").innerText = '';
    links.forEach(group => {
        let ul = document.createElement("ul");

        for (const [key, value] of Object.entries(group)) {
            let li = document.createElement("li");
            ul.appendChild(li);

            let a = document.createElement("a");
            a.href = value;
            a.innerText = key;

            li.appendChild(a);
        }

        let highlight = document.createElement("li");
        highlight.className = "highlight";
        ul.appendChild(highlight);

        document.getElementById("menu").appendChild(ul)
    });
});

Weather.getCurrent("London", (current) => {

    let weather = current.conditions();
    let temp_kelvin = current.temperature();
    let temp_celsius = Math.floor(Weather.kelvinToCelsius(current.temperature()));

    document.getElementById("weather").innerText = weather;
    document.getElementById("temperature").innerText = temp_celsius.toString() + String.fromCharCode(176) + 'C';
});
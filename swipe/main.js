/*
    Pretty simple structure here to populate links:
    {} -> 'Link name' : 'Link'
    Enjoy :)
 */

let links = [
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

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("menu").innerText = '';
    for (let group in links) {
        let ul = document.createElement("ul");

        for (let link in links[group]) {
            let li = document.createElement("li");
            let a = document.createElement("a");
            a.innerText = link;
            a.href = links[group][link];
            li.appendChild(a);

            ul.appendChild(li);
        }

        let highlight = document.createElement("li");
        highlight.classList.add("highlight");
        ul.appendChild(highlight);

        document.getElementById("menu").appendChild(ul)
    }
});


Weather.setApiKey('');

Weather.getCurrent("London", (current) => {

    let weather = current.conditions();
    let temp_kelvin = current.temperature();
    let temp_celsius = Math.floor(Weather.kelvinToCelsius(current.temperature()));

    document.getElementById("weather").innerText = weather;

    document.getElementById("temperature").innerText = temp_celsius.toString() + String.fromCharCode(176) + 'C';
});
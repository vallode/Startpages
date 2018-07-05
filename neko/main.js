/*
    Pretty simple structure here to populate links:
    Category name -> Link name : Link
    Enjoy :)
 */

let links = {
    'utility': {
	    'goodreads': 'https://www.goodreads.com/',
	    'todoist': 'https://todoist.com/',
        'hackernews': 'https://news.ycombinator.com/',
    },

    'work': {
        'Slack': 'https://slack.com/',
        'Trello': 'https://trello.com/',
        'Wrike': 'https://www.wrike.com',
	    'heroku': 'https://dashboard.heroku.com/',
    },

    'misc.': {
        '127': '127.0.0.1',
        'Drive': 'https://drive.google.com/drive/my-drive',
        'Mixtape': 'https://mixtape.moe/',
        'Webmaster': 'https://www.google.com/webmasters/tools/home?hl=en',
        'Analytics': 'https://analytics.google.com/analytics/web',
    }
};

/*
    Add a few lines for the kitty kat to welcome you with!
 */

let lines = [
    'Draw!',
    'Read something!',
    'Have a good day!',
];

function init() {
    let link_container = document.getElementsByClassName('links')[0];

    for(let category in links) {
        let div = document.createElement('div');
        let h2 = document.createElement('h2');
        let ul = document.createElement('ul');
        div.className = 'column';
        h2.innerHTML = category;

        link_container.appendChild(div);
        div.appendChild(h2);
        div.appendChild(ul);

        for(let website in links[category]) {
            let li = document.createElement('li');
            let a = document.createElement('a');

            a.href = links[category][website];
            a.innerHTML = website;

            ul.appendChild(li).appendChild(a);
        }
    }

    headline();
}

function headline() {
    let x = Math.floor(Math.random() * lines.length);

    document.querySelector('.header h1').innerHTML = lines[x];
}

document.addEventListener('DOMContentLoaded', init() );

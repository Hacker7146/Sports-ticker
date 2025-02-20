const teamLogos = {
    'mlb': {
        'Yankees': 'https://upload.wikimedia.org/wikipedia/commons/e/e6/New_York_Yankees_logo.svg',
        'Red Sox': 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Boston_Red_Sox_logo.svg',
        'Dodgers': 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Los_Angeles_Dodgers_logo.svg',
        'Giants': 'https://upload.wikimedia.org/wikipedia/commons/3/34/San_Francisco_Giants_logo.svg',
        // Add other MLB teams...
    },
    'nfl': {
        'Cowboys': 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Dallas_Cowboys_logo.svg',
        'Packers': 'https://upload.wikimedia.org/wikipedia/commons/2/23/Green_Bay_Packers_logo.svg',
        'Chiefs': 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Kansas_City_Chiefs_logo.svg',
        'Patriots': 'https://upload.wikimedia.org/wikipedia/commons/3/37/New_England_Patriots_logo.svg',
        // Add other NFL teams...
    },
    // Add other sports like NBA, NHL, etc.
};

const scoreData = {
    'mlb': [
        { team1: 'Yankees', team2: 'Red Sox', score1: 5, score2: 3 },
        { team1: 'Dodgers', team2: 'Giants', score1: 7, score2: 2 },
        // Add more game data...
    ],
    'nfl': [
        { team1: 'Cowboys', team2: 'Packers', score1: 24, score2: 17 },
        { team1: 'Chiefs', team2: 'Patriots', score1: 30, score2: 27 },
        // Add more game data...
    ],
    // Add other sports score data...
};

let currentSport = 'mlb';

function changeSport(sport) {
    currentSport = sport;
    loadScores();
}

function loadScores() {
    const tickerContainer = document.getElementById('score-ticker');
    tickerContainer.innerHTML = ''; // Clear existing scores

    const scores = scoreData[currentSport];

    scores.forEach(score => {
        const tickerItem = document.createElement('div');
        tickerItem.classList.add('ticker-item');
        
        const team1Logo = document.createElement('img');
        team1Logo.src = teamLogos[currentSport][score.team1];
        tickerItem.appendChild(team1Logo);
        
        const team1Name = document.createElement('span');
        team1Name.textContent = `${score.team1} ${score.score1}`;
        tickerItem.appendChild(team1Name);
        
        const team2Logo = document.createElement('img');
        team2Logo.src = teamLogos[currentSport][score.team2];
        tickerItem.appendChild(team2Logo);

        const team2Name = document.createElement('span');
        team2Name.textContent = `${score.team2} ${score.score2}`;
        tickerItem.appendChild(team2Name);

        tickerContainer.appendChild(tickerItem);
    });
    
    startTickerScroll();
}

function startTickerScroll() {
    const ticker = document.getElementById('score-ticker');
    const tickerWidth = ticker.offsetWidth;
    const containerWidth = ticker.parentElement.offsetWidth;

    if (tickerWidth > containerWidth) {
        ticker.style.animation = `scrollTicker 30s linear infinite`;
    }
}

window.onload = function() {
    loadScores();
};

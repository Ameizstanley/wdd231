const currentDate = Date.now();
const lastVisit = localStorage.getItem('lastVisit');
const message = document.querySelector('.message');
const welcomeMsg = document.createElement('p');

if (!lastVisit) {
    welcomeMsg.className = 'welcome-msg';
    welcomeMsg.textContent = 'Welcome to Chamber! This is your first visit let us know if you have any question.';
} else {
    const timeDiff = currentDate - parseInt(lastVisit, 10);
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    if (daysDiff < 1) {
        welcomeMsg.className = 'soon-msg';
        welcomeMsg.textContent = 'Back so soon! Awesome';
    } else {
        const dayText = daysDiff === 1 ? "day" : "days";
        welcomeMsg.textContent = `You last visited ${daysDiff} ${dayText} ago.`;
        welcomeMsg.className = 'last-msg';
    }
}

localStorage.setItem('lastVisit', currentDate.toString());
message.appendChild(welcomeMsg);
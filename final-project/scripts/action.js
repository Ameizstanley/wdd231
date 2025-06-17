


window.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);

    const showInfo = document.querySelector('.showInfo');
    if(!showInfo) return;

    const fullName = params.get('fullName') || '';
    const email = params.get('emailAddress') || '';
    const subject = params.get('subject') || '';
    const concern = params.get('concern') || '';
    const message = params.get('yourMessage') || '';

    showInfo.innerHTML = `<p> ${fullName} we appreciate your message
    on the subject of ${subject} and your concern about ${concern}. We will get back to you at ${email} as soon as possible.</p>
    <p>Your message: ${message}</p>`;

    console.log(fullName, email, subject, concern, message);
});
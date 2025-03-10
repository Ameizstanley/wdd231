const courses = [
    { code: "CSE 210", name: "JavaScript Language", credits: 2, completed: true },
    { code: "CSE 110", name: "JavaScript Language", credits: 2, completed: true },
    { code: "WDD 130", name: "Web Fundamentals", credits: 3, completed: true },
    { code: "WDD 231", name: "web programming",credits: 3,completed:false},
    { code: "WDD 131", name: "dynamic web function",credits: 2,completed:true},
    { code: "CSE 111", name: "computer programming",credits: 3,completed: false},
];

document.addEventListener('DOMContentLoaded', () => {
    displayCourses('all');
    setupFilterButtons();
});

function createCourseCard(course) {
    const card = document.createElement('div');
    card.className = `course-card ${course.completed ? 'completed' : ''}`;
    card.innerHTML = `
        <h3>${course.code}</h3>
        <p>${course.name}</p>
        <p>Credits: ${course.credits}</p>
        <p class="status">${course.completed ? '✓ Completed' : 'In Progress'}</p>
    `;
    return card;
}

function displayCourses(filter) {
    const container = document.getElementById('courseContainer');
    const filtered = filter === 'all' 
        ? courses 
        : courses.filter(course => course.code.startsWith(filter));
    
    container.innerHTML = '';
    filtered.forEach(course => {
        container.appendChild(createCourseCard(course));
    });
    
    updateCredits(filtered);
}

function updateCredits(courses) {
    const total = courses.reduce((sum, course) => sum + course.credits, 0);
    document.getElementById('totalCredits').textContent = `Total Credits: ${total}`;
}

function setupFilterButtons() {
    document.querySelectorAll('.filter-buttons button').forEach(button => {
        button.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-buttons button').forEach(b => 
                b.classList.remove('active'));
            e.target.classList.add('active');
            displayCourses(e.target.dataset.filter);
        });
    });
}
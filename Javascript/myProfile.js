document.addEventListener('DOMContentLoaded', () => {
    const userData = {
        name: 'John Doe',
        email: 'johndoe@example.com',
        memberSince: 'January 2023',
        enrolledCourses: [
            { name: 'Arabic', progress: 50, image: 'Pictures/Arabic.jpg' },
            { name: 'English', progress: 70, image: 'Pictures/english.webp' },
            { name: 'Math', progress: 30, image: 'Pictures/math.avif' },
        ],
    };

    document.getElementById('username').textContent = userData.name;
    document.getElementById('user-email').textContent = userData.email;
    document.getElementById('member-since').textContent = userData.memberSince;

    const coursesSection = document.querySelector('.enrolled-courses');
    coursesSection.innerHTML = '';
    userData.enrolledCourses.forEach(course => {
        const courseElement = `
            <div class="course">
                <img src="${course.image}" alt="${course.name} Course">
                <div class="course-details">
                    <h2>${course.name}</h2>
                    <p>Progress: ${course.progress}%</p>
                </div>
            </div>
        `;
        coursesSection.innerHTML += courseElement;
    });
});

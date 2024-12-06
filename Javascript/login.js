document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.querySelector('input[name="email"]').value.trim();
    const password = document.querySelector('input[name="password"]').value;

    if (!email || !password) {
        alert('Please fill in both fields.');
        document.getElementById('loginForm').reset();
    } else {
        alert('Login successful!');
        // Redirect to the home page
        window.location.href = 'courses.html';
    }
});
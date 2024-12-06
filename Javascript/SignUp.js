document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const birthday = document.getElementById('date').value;
    const gender = document.querySelector('input[name="Gender"]:checked');
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;

    const errors = [];
    if (!name) errors.push('Name is required.');
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errors.push('Invalid email format.');
    if (!birthday) {
        errors.push('Birthday is required.');
    } else {
        const today = new Date(); // Current date
        const birthdayDate = new Date(birthday); // User-entered birthday
        if (birthdayDate > today) {
            errors.push('Birthday cannot be a future date.');
        }
    }
    if (!gender) errors.push('Please select your gender.');
    if (password.length < 6) errors.push('Password must be at least 6 characters.');
    if (password !== confirmPassword) errors.push('Passwords do not match.');

    if (errors.length > 0) {
        alert(errors.join('\n'));
        document.getElementById('registerForm').reset();
    } else {
        alert('Registration successful!');
        // Redirect to login
        window.location.href = 'login.html';
    }
});
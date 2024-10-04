function validateLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (email === "" || password === "") {
        alert("Both email and password are required!");
        return false;
    }
    return true;
}

function signUp() {
    //event.preventDefault(); // Prevent form submission

    const passwordField = document.getElementById('origPass');
    const confirmPasswordField = document.getElementById('rePass');
    const emailField = document.getElementById('email');
    const nameField = document.getElementById('name');
    const usernameField = document.getElementById('username');
    const conNumField = document.getElementById('conNum');

    const password = passwordField.value.trim();
    const confirmPassword = confirmPasswordField.value.trim();
    const email = emailField.value.trim();
    const name = nameField.value.trim();
    const username = usernameField.value.trim();
    const conNum = conNumField.value.trim();

    // Helper function to check for empty fields
    function checkIfEmpty(field, fieldName) {
        if (field.value.trim() === '') {
            alert(`You forgot to enter your ${fieldName}.`);
            field.classList.add('error'); // Add red outline
            field.focus();
            return true; // Indicate the field is empty
        }
        // Remove error outline if the field is not empty
        field.classList.remove('error');
        return false;
    }
    

    // Check all required fields
    if (
        checkIfEmpty(nameField, "name") ||
        checkIfEmpty(usernameField, "username") ||
        checkIfEmpty(emailField, "email address")
    ) {
        return false;
    }

    // Validate email
    if (!email.endsWith("@gmail.com")) {
        alert("Invalid Email Address.");
        emailField.focus();
        return false;
    }
    if (
        checkIfEmpty(conNumField, "contact number") ||
        checkIfEmpty(passwordField, "password")
    ) {
        return false;
    }

    // Validate passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match. Please re-enter.");
        confirmPasswordField.value = ""; // Clear the "Re-enter Password" field
        confirmPasswordField.focus(); // Set focus to the field for user convenience
        return false;
    }

    // Validate password strength
    //const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/;
    //if (!passwordRegex.test(password)) {
   //     alert(
    //        "Password must be 8-12 characters long, contain at least one uppercase letter, one lowercase letter, one digit, and one special character."
    //    );
    //    passwordField.focus(); // Set focus to the password field
   //     return false;
   // }

    // Successful sign-up message
    alert("Sign-up successful!");
    return true;
}

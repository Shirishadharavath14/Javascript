//1. Email Validation

function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

// Test examples
console.log(validateEmail("example@email.com")); // true
console.log(validateEmail("invalid-email.com")); // false


//2. Number Validation

function validatePassword(password) {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}

// Test examples
console.log(validatePassword("Password123")); // true
console.log(validatePassword("pass123")); // false
console.log(validatePassword("password")); // false
console.log(validatePassword("P@ssw0rd123")); // true


//3.Password Validation

function validatePassword(password) {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}

// Test examples
console.log(validatePassword("Password123")); // true
console.log(validatePassword("pass123")); // false
console.log(validatePassword("password")); // false
console.log(validatePassword("P@ssw0rd123")); // true

//4.Url Validation

function validateURL(url) {
    const urlRegex = /^(https?:\/\/)([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[^\s]*)?$/;
    return urlRegex.test(url);
}

// Test examples
console.log(validateURL("https://www.example.com")); // true
console.log(validateURL("http://example.com/path?query=1#fragment")); // true
console.log(validateURL("ftp://example.com")); // false
console.log(validateURL("www.example.com")); // false


//5. form validation

function validateForm(form) {
    let errors = [];

    // Validate name (non-empty)
    const name = form.name.trim();
    if (!name) {
        errors.push("Name is required.");
    }

    // Validate email (correct format)
    const email = form.email.trim();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailRegex.test(email)) {
        errors.push("A valid email is required.");
    }

    // Validate password (minimum length, at least one uppercase letter and one number)
    const password = form.password;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    if (!password || !passwordRegex.test(password)) {
        errors.push("Password must be at least 8 characters long, contain one uppercase letter and one digit.");
    }

    // Return validation result
    if (errors.length > 0) {
        return { valid: false, errors };
    } else {
        return { valid: true };
    }
}

// Example usage:
const form = {
    name: "John Doe",
    email: "john.doe@example.com",
    password: "Password123"
};

const result = validateForm(form);

if (result.valid) {
    console.log("Form is valid!");
} else {
    console.log("Form is invalid. Errors:", result.errors);
}

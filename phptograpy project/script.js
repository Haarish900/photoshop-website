// Toggle menu for mobile view
var navlinks = document.getElementById("nav-links");

function showmenu() {
    navlinks.style.right = "0";
}

function hidemenu() {
    navlinks.style.right = "-200px";
}




// contact page js code 

//    document.getElementById('contactForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     // Clear previous error messages
//     clearErrors();

//     // Validate inputs
//     const name = document.getElementById('name').value.trim();
//     const phone = document.getElementById('phone').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const address = document.getElementById('address').value.trim();

//     let isValid = true;

//     // Name validation
//     if (name === '') {
//         showError('nameError', 'Name is required.');
//         isValid = false;
//     }

//     // Phone validation
//     if (phone === '') {
//         showError('phoneError', 'Phone number is required.');
//         isValid = false;
//     } else if (!/^\d{10}$/.test(phone)) {
//         showError('phoneError', 'Phone number must be 10 digits.');
//         isValid = false;
//     }

//     // Email validation
//     if (email === '') {
//         showError('emailError', 'Email is required.');
//         isValid = false;
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//         showError('emailError', 'Invalid email format.');
//         isValid = false;
//     }

//     // Address validation
//     if (address === '') {
//         showError('addressError', 'Address is required.');
//         isValid = false;
//     }

//     // If all inputs are valid, submit the form
//     if (isValid) {
//         submitForm();
//     }
// });

// function showError(elementId, message) {
//     const errorElement = document.getElementById(elementId);
//     errorElement.textContent = message;
//     errorElement.style.display = 'block';
// }

// function clearErrors() {
//     const errorElements = document.querySelectorAll('.error-message');
//     errorElements.forEach(element => {
//         element.textContent = '';
//         element.style.display = 'none';
//     });
// }

// function submitForm() {
//     const formData = new FormData(document.getElementById('contactForm'));

//     fetch('submit.php', {
//         method: 'POST',
//         body: formData
//     })
//     .then(response => response.text())
//     .then(data => {
//         document.getElementById('responseMessage').innerHTML = data;
//         document.getElementById('contactForm').reset();
//     })
//     .catch(error => {
//         document.getElementById('responseMessage').innerHTML = 'An error occurred. Please try again.';
//     });
// }


document.getElementById("contactForm").addEventListener("submit", function (event) {
    let valid = true;

    // Name validation
    let name = document.getElementById("name").value;
    if (name.trim() === "") {
        document.getElementById("nameError").innerText = "Name is required.";
        document.getElementById("nameError").style.display = "block";
        valid = false;
    } else {
        document.getElementById("nameError").style.display = "none";
    }

    // Phone validation (basic numeric check)
    let phone = document.getElementById("phone").value;
    if (!/^\d{10}$/.test(phone)) {
        document.getElementById("phoneError").innerText = "Enter a valid 10-digit phone number.";
        document.getElementById("phoneError").style.display = "block";
        valid = false;
    } else {
        document.getElementById("phoneError").style.display = "none";
    }

    // Email validation
    let email = document.getElementById("email").value;
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById("emailError").innerText = "Enter a valid email address.";
        document.getElementById("emailError").style.display = "block";
        valid = false;
    } else {
        document.getElementById("emailError").style.display = "none";
    }

    // Address validation
    let address = document.getElementById("address").value;
    if (address.trim() === "") {
        document.getElementById("addressError").innerText = "Address is required.";
        document.getElementById("addressError").style.display = "block";
        valid = false;
    } else {
        document.getElementById("addressError").style.display = "none";
    }

    if (!valid) {
        event.preventDefault(); // Stop form submission if invalid
    }
});

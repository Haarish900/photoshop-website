<?php
// Database connection details
// $host = 'localhost'; // Replace with your database host
// $dbname = 'contact_form_db'; // Replace with your database name
// $username = 'root'; // Replace with your database username
// $password = ''; // Replace with your database password

// // Create a connection to the database
// try {
//     $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
//     $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
// } catch (PDOException $e) {
//     die("Database connection failed: " . $e->getMessage());
// }

// // Check if the form is submitted
// if ($_SERVER['REQUEST_METHOD'] === 'POST') {
//     // Get form data
//     $name = $_POST['name'];
//     $phone = $_POST['phone'];
//     $email = $_POST['email'];
//     $address = $_POST['address'];

//     // Validate inputs (optional, as validation is already done in JavaScript)
//     if (empty($name) || empty($phone) || empty($email) || empty($address)) {
//         echo "All fields are required.";
//         exit;
//     }

//     // Insert data into the database
//     try {
//         $stmt = $conn->prepare("INSERT INTO contacts (name, phone, email, address) VALUES (:name, :phone, :email, :address)");
//         $stmt->bindParam(':name', $name);
//         $stmt->bindParam(':phone', $phone);
//         $stmt->bindParam(':email', $email);
//         $stmt->bindParam(':address', $address);
//         $stmt->execute();

//         echo "Thank you! Your message has been submitted successfully.";
//     } catch (PDOException $e) {
//         echo "An error occurred while submitting your message. Please try again.";
//     }
// } else {
//     echo "Invalid request method.";
// }

$servername = "localhost";
$username = "root"; // Change this if needed
$password = ""; // Change this if you have a password
$dbname = "contact_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$address = $_POST['address'];

// Prepare SQL statement to insert data
$sql = "INSERT INTO contacts (name, phone, email, address) VALUES (?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssss", $name, $phone, $email, $address);

// Execute and check if successful
if ($stmt->execute()) {
    echo "Contact information saved successfully!";
} else {
    echo "Error: " . $stmt->error;
}

// Close connections
$stmt->close();
$conn->close();
?>

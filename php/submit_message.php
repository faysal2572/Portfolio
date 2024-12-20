<?php
header('Content-Type: application/json');
require_once 'db_config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $conn->real_escape_string($_POST['name']);
    $email = $conn->real_escape_string($_POST['email']);
    $message = $conn->real_escape_string($_POST['message']);
    $timestamp = date('Y-m-d H:i:s');

    $sql = "INSERT INTO contact_messages (name, email, message, created_at) 
            VALUES ('$name', '$email', '$message', '$timestamp')";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(["success" => true, "message" => "Message sent successfully!"]);
    } else {
        echo json_encode(["success" => false, "message" => "Error: " . $conn->error]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Invalid request method"]);
}

$conn->close();
?>

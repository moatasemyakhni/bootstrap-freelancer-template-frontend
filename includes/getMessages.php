<?php
include('dbh.php');

$query = $mysqli->prepare("SELECT * FROM messages");
$query->execute();
$messages = $query->get_result();
$response = [];
while($message = $messages->fetch_assoc()) {
    $response[] = $message;
}

echo json_encode($response);
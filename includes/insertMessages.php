<?php
if(isset($_POST['fullName']) && isset($_POST['email']) && isset($_POST['lebanesePhoneNumber']) && isset($_POST['messages'])) {
    include('dbh.php');
    $stmt = $mysqli->prepare("INSERT INTO messages(full_name, email, lebanese_phone_nb, message) VALUES(?, ?, ?, ?);");
    $stmt->bind_param("ssss", $_POST['fullName'], $_POST['email'], $_POST['lebanesePhoneNumber'], $_POST['messages']);
    $stmt->execute();

    $response = ["success" => true];
    echo json_encode($response);
}
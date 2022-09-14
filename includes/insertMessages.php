<?php
include('dbh.php');
header('Access-Control-Allow-Origin: *');//access by anybody with no auth
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Allow-Control-Allow-Headers: Allow-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');


$data = json_decode(file_get_contents("php://input"));//does not work with form-data
$stmt = $mysqli->prepare("INSERT INTO messages(full_name, email, lebanese_phone_nb, message) VALUES(?, ?, ?, ?);");
$stmt->bind_param("ssss", $data->fullName, $data->email, $data->lebanesePhoneNumber, $data->message);
if($stmt->execute()) {
    $response = ["success" => true];
}else {
    $response = ["success" => false];
}


echo json_encode($response);



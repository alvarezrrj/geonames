<?php 

ini_set('display_errors', 'On');
error_reporting(E_ALL);

$lat = $_POST['lat'];
$long = $_POST['long'];
$endpoint = $_POST['endpoint'];

echo "\n";
echo print_r($_POST);
echo "\n";
echo print_r($_REQUEST);
echo "\n";
echo print_r($_GET);

$url = 'http://api.geonames.org/' . $endpoint . '?username=alvarezrrj' . '&lat=' . $lat . '&lng=' . $long;


$ch = curl_init();

curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_URL, $url);

$result = curl_exec($ch);

echo "\n";
echo $result;
echo "\n";

curl_close($ch);

$data = json_decode($result, true);


$response['status']['code'] = '200';
$response['status']['name'] = 'ok';
//$response['status']['description'] = 'all good';
//$response['status']['returnedIn'] = "x ms";
$response['data'] = $data;

header('Content-Type: application/json; charset=UTF-8');

echo "\n";
echo json_encode($response);
echo "\n";
echo json_encode($url);
echo "\n";

?>

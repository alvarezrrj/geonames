<?php 

ini_set('display_errors', 'On');
error_reporting(E_ALL);

$lat = $_REQUEST['lat'];
$long = $_REQUEST['long'];
$endpoint = $_REQUEST['endpoint'];

$url = 'http://api.geonames.org/' . $endpoint . '?username=alvarezrrj' . '&lat=' . $lat . '&lng=' . $long;

$ch = curl_init();

curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_URL, $url);

$result = curl_exec($ch);

curl_close($ch);

$data = json_decode($result, true);

$response['status']['code'] = '200';
$response['status']['name'] = 'ok';
$response['data'] = $data;

header('Content-Type: application/json; charset=UTF-8');

echo json_encode($response);

?>

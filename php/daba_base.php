<?
$connection = mysqli_connect("localhost:3307", "root", "root", "runsmart");
if($connection==false) {
	echo 'Не удалось подключиться<br />!';
	echo mysqli_connect_error();
	exit();
}
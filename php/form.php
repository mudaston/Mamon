<?php

include 'daba_base.php';

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];

header("Location: ../index.php#consultation");

$result = mysqli_query($connection,"INSERT INTO `feedback`(`name`, `phone`, `email`, `time`) VALUES ('$name','$phone','$email', CURRENT_TIMESTAMP())");
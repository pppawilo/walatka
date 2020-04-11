<?php
$myfile = fopen('wyniki.txt', 'a') or die('Unable to open file!');

$line = $_GET['line'];
$line = $line . PHP_EOL;
fwrite($myfile, $line);
fclose($myfile);
header("Location: index.php");

exit();

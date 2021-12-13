<?php

$mailTo = 'target@himpost.com';

$subject = 'Заказ с сайта полимочевины(polimochevina.himpost.com)';

$headers = 'Content-Type: text/plain; charset=utf-8';
$name = $_POST['name'];
$tel = $_POST['tel'];
$comment = $_POST['comment'];
$cart = $_POST['cartData'];
$total = $_POST['total'];


$message = "Имя заказчика: $name\nТелефон: $tel\nСообщение: $comment\nЗаказ:\n$cart\nСумма заказа: $total грн";

mail($mailTo, $subject, $message, $headers);

file_put_contents('orders.txt', "$message\n---\n", FILE_APPEND | LOCK_EX);

?>

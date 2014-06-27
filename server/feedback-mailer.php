<?php

$message = "";
// compose message
$body = file_get_contents("php://input");

$body_params = json_decode($body);

$parameters = array();
if($body_params) {
    foreach($body_params as $param_name => $param_value) {
//        $parameters[$param_name] = $param_value;
        $message .= $param_name.": ".$param_value."\n"
    }
}

// make sure each line doesn't exceed 70 characters
$message = wordwrap($message, 70);

// send email
mail('kz@yukonsolns.com', 'Nonsensical Latin', $message);
?>
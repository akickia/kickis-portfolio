<?php

$to = "din_egen@e-postadress_här";
$from = $_POST["email"];
$subject = 'Kontakt från webbplatsen!';
$fnamn = $_POST["fnamn"];
$enamn = $_POST["enamn"];
$message = $_POST["message"];

##########################
// HEADERS för innehållstyp och textkodning
$headers = "Content-Type: text/plain; charset=utf-8 \r\n";
$headers .= "From:".$fnamn." ".$enamn." <".$from.">"."\r\n";
$headers .= "MIME-Version: 1.0 \r\n";
###########################

// Konverterar ÅÄÖåäö till UTF-8
$subject='=?UTF-8?B?'.base64_encode($subject).'?=';

// Mailfunktionen som skickar bekräftelsen
if (mail($to, $subject, $message, $headers))

echo nl2br("<h2>Ditt meddelande har skickats!</h2>
<b>mottagare:</b> $to
<b>meddelande:</b>
$message
");

else
echo "Det gick inte att skicka ditt meddelande";
}

?>

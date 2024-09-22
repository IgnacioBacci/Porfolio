<?php
// Configuración del correo
$para = "IgnacioBacci5@gmail.com";
$asunto = "Nuevo mensaje del formulario de contacto";

// Recuperar los datos del formulario
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];

// Validación básica (puedes agregar más validaciones según sea necesario)
if (empty($nombre) || empty($email) || empty($mensaje)) {
    echo "Todos los campos son obligatorios.";
    exit;
}

// Crear el mensaje de correo
$contenido = "Nombre: $nombre\n";
$contenido .= "Correo electrónico: $email\n";
$contenido .= "Mensaje:\n$mensaje";

// Encabezados del correo
$encabezados = "From: $email";

// Enviar el correo
if (mail($para, $asunto, $contenido, $encabezados)) {
    echo "Mensaje enviado exitosamente.";
} else {
    echo "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.";
}
?>
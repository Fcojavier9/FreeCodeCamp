<?php

function getEventData($url)
{
    // Identificar la plataforma con base en la URL
    if (strpos($url, 'vividseats.com') !== false) {
        return getVividSeatsData($url);
    } elseif (strpos($url, 'seatgeek.com') !== false) {
        return getSeatGeekData($url);
    } else {
        return "Plataforma no soportada.";
    }
}

function getHTMLContent($url)
{
    // Usamos cURL para obtener el contenido HTML de la página
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);

    // Desactivar la verificación de certificados SSL (solo para desarrollo)
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

    // Agregar User-Agent para evitar bloqueos
    curl_setopt($ch, CURLOPT_USERAGENT, "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36");

    $html = curl_exec($ch);

    // Check for cURL errors
    if (curl_errno($ch)) {
        echo 'Error en cURL: ' . curl_error($ch);
        return false;
    }

    curl_close($ch);

    // Verificar si el HTML se obtuvo correctamente
    if (empty($html)) {
        echo "Error: No se pudo obtener el contenido HTML.\n";
        return false;
    }

    return $html;
}

function getVividSeatsData($url)
{
    $html = getHTMLContent($url);

    if ($html === false) {
        return "Error al obtener datos de VividSeats.";
    }

    // Procesar el HTML
    $dom = new DOMDocument;
    @$dom->loadHTML($html); // El '@' es para ignorar warnings por HTML malformado
    $xpath = new DOMXPath($dom);

    // Ejemplo: buscando tipos de entradas en elementos con clase 'ticket-type'
    $ticketNodes = $xpath->query("//div[contains(@class, 'ticket-type')]");

    if ($ticketNodes->length === 0) {
        return "No se encontraron tipos de entradas en VividSeats.";
    }

    $tickets = [];
    foreach ($ticketNodes as $ticketNode) {
        $type = trim($ticketNode->textContent);
        $count = rand(1, 100); // Aquí deberías extraer el número real del HTML
        $tickets[$type] = $count;
    }

    return $tickets;
}

function getSeatGeekData($url)
{
    $html = getHTMLContent($url);

    if ($html === false) {
        return "Error al obtener datos de SeatGeek.";
    }

    // Procesar el HTML
    $dom = new DOMDocument;
    @$dom->loadHTML($html);
    $xpath = new DOMXPath($dom);

    // Ejemplo: buscando tipos de entradas en SeatGeek
    $ticketNodes = $xpath->query("//div[contains(@class, 'listing')]");

    if ($ticketNodes->length === 0) {
        return "No se encontraron tipos de entradas en SeatGeek.";
    }

    $tickets = [];
    foreach ($ticketNodes as $ticketNode) {
        $type = trim($ticketNode->textContent);
        $count = rand(1, 100); // Aquí también deberías extraer el número real
        $tickets[$type] = $count;
    }

    return $tickets;
}

// Ejemplo de uso:
$url = $argv[1]; // URL del evento como primer parámetro
$result = getEventData($url);

if (is_array($result)) {
    echo "Entradas disponibles:\n";
    foreach ($result as $type => $count) {
        echo "$type: $count\n";
    }
} else {
    echo $result;
}

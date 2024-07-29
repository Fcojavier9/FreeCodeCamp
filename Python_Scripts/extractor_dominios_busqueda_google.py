import requests
from bs4 import BeautifulSoup
import re
import time

def buscar_sitios_apuestas(palabra_clave, pais, num_paginas=5):
    # URL base de búsqueda de Google
    url_base = "https://www.google.com/search?q={palabra_clave}+site:{pais}&start={start}"
    
    # Headers para imitar un navegador real
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    }
    
    # Lista para almacenar los dominios
    dominios = set()
    
    # Iterar sobre el número de páginas especificadas
    for pagina in range(num_paginas):
        # Construir la URL de la página actual
        url = url_base.format(palabra_clave=palabra_clave, pais=pais, start=pagina*10)
        
        # Realizar la solicitud
        response = requests.get(url, headers=headers)
        
        # Analizar el contenido de la respuesta
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # Buscar todos los enlaces
        for link in soup.find_all('a'):
            href = link.get('href')
            if href and 'http' in href:
                # Excluir URLs que contienen 'google'
                if 'google' not in href:
                    # Extraer el dominio usando una expresión regular
                    match = re.search(r"https?://([A-Za-z_0-9.-]+).*", href)
                    if match:
                        dominio = match.group(1)
                        dominios.add(dominio)
        
        # Pausar entre solicitudes para evitar bloqueos
        time.sleep(2)
    
    # Imprimir todos los dominios encontrados
    for dominio in dominios:
        print(dominio)

# Ejemplo de uso:
buscar_sitios_apuestas("bet+sports", "ch", num_paginas=5)

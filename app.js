document.getElementById('cargar').addEventListener('click', cargarDatos);

function cargarDatos() {

    // Crear el objeto XMLhttprequest
    const xhr = new XMLHttpRequest();

    // Abrir una conexion
    xhr.open('GET', 'datos.txt', true);

    // Una vez carga

    /*xhr.onreadystatechange = function() {
        
        Ready Status
            0 - No inicializado
            1 - Conexion establecida
            2 - Recibido
            3 - Procesando
            4 - Respuesta Lista
        
        console.log(`Estado ${this.readyState}`);
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    }*/



    xhr.onload = function() {
            // 200 : Correcto | 403 : Prohibido | 404 : No encontrado
            if (this.status === 200) {
                document.getElementById('listado').innerHTML = `<h1>${this.responseText}</h1>`;
            }
        }
        // Enviar el request
    xhr.send();

}
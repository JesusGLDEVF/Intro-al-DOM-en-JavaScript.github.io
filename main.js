/* Actividad:
Intro al DOM en JavaScript
En este proyecto, practicarás los conceptos básicos del DOM con JavaScript que has visto hasta este momento.

Objetivo
El objetivo es agregar un archivo o varios a tu repositorio y que contenga(n) la solución al problema planteado a continuación.

Problema: Caja de Comentarios (Simple Comment Box)
Crear una caja de comentarios donde los usuarios puedan escribir y agregar comentarios que se muestran en la página. Este proyecto ayudará a los estudiantes a manejar eventos de formularios y modificar el contenido de una página.

Instrucciones para resolver el problema:
Crea una página con un formulario que tenga un campo de texto para el comentario y un botón para agregarlo.
Cuando el usuario haga clic en el botón, el comentario debe aparecer en la página debajo del formulario.
Los estudiantes pueden agregar un botón para eliminar comentarios si lo desean.
Los comentarios deben aparecer junto con la fecha y hora de publicación. (opcional)
Entregables
Para este proyecto, debes compartir la URL de los archivos utilizados y creados en el repositorio con la solución del problema descrito. Si tienes alguna duda de este ejercicio, no dudes en consultarla con tu sensei para que quede claro. También puedes solicitar una asesoría.

Crea los nuevos archivos (html, js, css) en tu repositorio en tu equipo local para solucionar el problema planteado. Puedes crear una carpeta para este problema
Crea uno o varios 'commit' en tu repositorio con estos archivos para guardar los cambios y crear nuevas versiones de tu proyecto conforme avances.
Si quieres agrega otro(s) archivo(s) que tengas con ejemplos de la clase o con algún ejemplo que tú hayas intentado mucho mejor.
Comparte la liga de Github de los archivos agregados a tu repositorio con la solución. También puede ser la liga de tu commit.
*/

document.getElementById('commentForm').addEventListener('submit', function (event) {
    event.preventDefault(); /* Evita el envío del formulario */

    const commentInput = document.getElementById('commentInput');
    const commentText = commentInput.value.trim();

    if (commentText !== '') {
        const commentSection = document.getElementById('commentSection');

        // Creando el elemento de comentario
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        commentDiv.textContent = commentText;

        // Se agrega la fecha y hora de publicación (lo opcional {me costo mucho hacer esto pero funcionó})
        const timestamp = document.createElement('span'); // Se crea un elemento <span> para mostrar la fecha y hora.
        const now = new Date(); // Se crea un objeto Date que representa la hora actual.
        timestamp.classList.add('timestamp');
        timestamp.textContent = ` Publicado el ${now.toLocaleDateString()} a las ${now.toLocaleTimeString()} `;
        commentDiv.appendChild(timestamp);

        // Agregando el botón de eliminar
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.onclick = function () {
            commentSection.removeChild(commentDiv);
        };

        commentDiv.appendChild(deleteButton);
        commentSection.appendChild(commentDiv);

        // Se limpia el campo de entrada
        commentInput.value = '';
    }
});
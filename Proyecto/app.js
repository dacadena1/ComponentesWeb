// Este archivo (app.js) gestiona la inicialización de la aplicación y la interacción entre componentes.

document.addEventListener('DOMContentLoaded', function() {
    // Obtiene el contenedor principal de la aplicación por su ID
    const appContainer = document.getElementById('app');

    // Crea instancias de los componentes necesarios
    const eventoFormulario = new EventoFormulario(agregarEvento);
    const listaEventosComponent = new ListaEventos();
    const sidebar = new Sidebar(seleccionarOpcion);

    // Renderiza los componentes en el contenedor principal
    eventoFormulario.render(appContainer);
    listaEventosComponent.render(appContainer);
    sidebar.render(appContainer);

    // Función para agregar un evento a la lista de eventos
    function agregarEvento(evento) {
        listaEventosComponent.agregarEvento(evento);
    }

    // Función para manejar la selección de opciones en la barra lateral
    function seleccionarOpcion(opcionId) {
        switch (opcionId) {
            case 'opcion1':
                // Redirige o carga la página de eventos asignados
                window.location.href = 'paginas/eventosasignados.html';
                break;
            case 'opcion2':
                // Redirige o carga la página de calendario
                window.location.href = 'paginas/calendario.html';
                break;
            case 'opcion3':
                // Lógica para la opción 3 (Integrantes)
                break;
            default:
                break;
        }
    }

    // Dispatch de un evento personalizado para actualizar datos en ListaEventos
    const customEvent = new CustomEvent('actualizar-datos', { detail: { nuevosDatos: 'Información actualizada' } });
    listaEventosComponent.dispatchEvent(customEvent);

    // Event Listener en ListaEventos para manejar el evento 'actualizar-datos'
    listaEventosComponent.addEventListener('actualizar-datos', (event) => {
        listaEventosComponent.actualizarDatos(event.detail.nuevosDatos);
    });
});



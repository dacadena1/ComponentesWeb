// components.js

class EventoFormulario {
    constructor(onSubmit) {
        this.form = document.createElement('form');
        this.form.id = 'eventoForm';

        this.form.innerHTML = `
        <form id="eventoForm">
            <div class="form-group">
                <label for="nombreEvento">Nombre del Evento</label>
                <input type="text" class="form-control" id="nombreEvento" required>
            </div>
            <div class="form-group">
                <label for="fechaEvento">Fecha del Evento</label>
                <input type="date" class="form-control" id="fechaEvento" required>
            </div>
            <div class="form-group">
                <label for="ubicacionEvento">Ubicación</label>
                <input type="text" class="form-control" id="ubicacionEvento" required>
            </div>
            <div id="app" style="margin: 20px;">
                 <contador-component></contador-component>
            </div>
            <div class="form-group">
                <label for="descripcionEvento">Descripción</label>
                <textarea class="form-control" id="descripcionEvento" rows="4"></textarea>
            </div>
            <div class="form-group">
                <label for="tipoEvento">Tipo de Evento</label>
                <select class="form-control" id="tipoEvento">
                    <option value="conferencia">Conferencia</option>
                    <option value="taller">Taller</option>
                    <option value="reunion">Reunión</option>
                    <!-- Agrega más opciones según tus necesidades -->
                </select>
            </div>
            <button type="submit" class="btn btn-primary">Agregar Evento</button>
        </form>
        `;

        this.form.addEventListener('submit', function(event) {
            event.preventDefault();
            const nombreEvento = document.getElementById('nombreEvento').value;
            const fechaEvento = document.getElementById('fechaEvento').value;
            onSubmit({ nombre: nombreEvento, fecha: fechaEvento });
        });
    }

    render(container) {
        container.appendChild(this.form);
    }
}


// Dentro del componente ListaEventos en tu archivo components.js

class ListaEventos {
    constructor() {
        this.lista = document.createElement('div');
        this.lista.id = 'listaEventos';
    }

    agregarEvento(evento) {
        const listItem = document.createElement('div');
        listItem.className = 'alert alert-info';
        listItem.innerHTML = `<strong>${evento.nombre}</strong> - ${evento.fecha}`;
        
        // Agregamos un Event Listener al listItem para detectar clics
        listItem.addEventListener('click', () => {
            console.log('Evento clickeado:', evento);
        });

        this.lista.appendChild(listItem);
    }

    render(container) {
        container.appendChild(this.lista);
    }

    // Método para actualizar datos desde otro componente
    actualizarDatos(nuevosDatos) {
        console.log('Datos actualizados en ListaEventos:', nuevosDatos);
    }
}

// En tu archivo components.js o donde definas tus componentes
Vue.component('formulario-evento-component', {
    data() {
      return {
        nombreEvento: '',
        fechaEvento: '',
        // Puedes agregar más campos según sea necesario
      };
    },
    template: `
      <div>
        <h2>Agregar Nuevo Evento</h2>
        <form @submit.prevent="agregarEvento">
          <div>
            <label for="nombreEvento">Nombre del Evento:</label>
            <input type="text" v-model="nombreEvento" required>
          </div>
          <div>
            <label for="fechaEvento">Fecha del Evento:</label>
            <input type="date" v-model="fechaEvento" required>
          </div>
          <!-- Puedes agregar más campos aquí -->
          <button type="submit">Agregar Evento</button>
        </form>
      </div>
    `,
    methods: {
      agregarEvento() {
        // Aquí puedes enviar los datos del nuevo evento al gestor de eventos
        console.log('Evento agregado:', { nombre: this.nombreEvento, fecha: this.fechaEvento });
  
        // Puedes restablecer los campos después de agregar el evento
        this.nombreEvento = '';
        this.fechaEvento = '';
      }
    }
  });
  
  // En tu archivo app.js
new Vue({
    el: '#app'
  });


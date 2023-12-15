// Definición del componente user-list-component
Vue.component('user-list-component', {
    data() {
      return {
        users: [] // Almacena la lista de usuarios obtenida de la API
      };
    },
    mounted() {
      // Cuando el componente se monta, obtén la lista de usuarios de la API
      this.fetchUsers();
    },
    methods: {
      fetchUsers() {
        // Utiliza la función fetch para obtener los datos de la API de usuarios
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(data => {
            // Asigna los datos de la API al array 'users'
            this.users = data;
          })
          .catch(error => console.error('Error al obtener usuarios:', error));
      }
    },
    template: `
      <div>
        <h2>Lista de Usuarios</h2>
        <h2>Diego Cadena Examen</h2>
        <ul>
          <!-- Itera sobre la lista de usuarios y muestra sus nombres -->
          <li v-for="user in users" :key="user.id">{{ user.name }}</li>
        </ul>
      </div>
    `
  });
  
  // Crea una nueva instancia de Vue
  new Vue({
    el: '#app'
  });
  
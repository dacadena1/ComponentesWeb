// Definición del componente contador-component
Vue.component('contador-component', {
    data() {
      return {
        contador: 0 // Variable interna para gestionar el estado del contador
      };
    },
    methods: {
      incrementar() {
        this.contador++; // Incrementa el contador
      },
      disminuir() {
        this.contador--; // Disminuye el contador
      }
    },
    template: `
      <div>
        <h2>Contador: {{ contador }}</h2>
        <h2> Diego Cadena Examen</h2>
        <button @click="incrementar">Incrementar</button>
        <button @click="disminuir">Disminuir</button>
      </div>
    `
  });
  
  // Crea una nueva instancia de Vue
  new Vue({
    el: '#app'
  });
  
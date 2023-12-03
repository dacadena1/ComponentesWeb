class CounterComponent extends HTMLElement {
    constructor() {
      super();
      this._counter = 0;
      this.attachShadow({ mode: 'open' });
      // Generar identificadores únicos para cada instancia
      this._uniqueId = Math.random().toString(36).substring(7);
    }
  
    connectedCallback() {
      this.render();
      this.attachListeners();
    }
  
    render() {
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: inline-block;
            /* Agrega otros estilos necesarios para mejorar la apariencia */
          }
          p {
            font-size: 18px;
            margin: 0;
          }
          button {
            font-size: 16px;
            margin: 5px;
            padding: 5px 10px;
            cursor: pointer;
          }
        </style>
        <div>
          <p>Count: ${this._counter}</p>
          <!-- Usar identificadores únicos -->
          <button id="increment_${this._uniqueId}">+</button>
          <button id="decrement_${this._uniqueId}">-</button>
        </div>
      `;
    }
  
    attachListeners() {
      const incrementButton = this.shadowRoot.getElementById(`increment_${this._uniqueId}`);
      const decrementButton = this.shadowRoot.getElementById(`decrement_${this._uniqueId}`);
  
      incrementButton.addEventListener('click', () => {
        this._counter++;
        this.dispatchCounterChangeEvent();
      });
  
      decrementButton.addEventListener('click', () => {
        if (this._counter > 0) {
          this._counter--;
          this.dispatchCounterChangeEvent();
        }
      });
    }
  
    dispatchCounterChangeEvent() {
      const event = new Event('counterChange', { bubbles: true, composed: true });
      this.dispatchEvent(event);
      this.render();
    }
  }
  
  customElements.define('counter-component', CounterComponent);
  
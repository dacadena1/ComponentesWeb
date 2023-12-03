// Componente Contenedor
class MyContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <div>
                <slot name="header"></slot>
                <slot name="form"></slot>
                <slot name="content"></slot>
                <slot name="footer"></slot>
            </div>
        `;
    }
}
customElements.define('my-container', MyContainer);

// Componente de Encabezado
class MyHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <header>
                <h1>Universidad de las Fuerzas Armadas ESPE</h1>
                <h2> Diego Cadena<h2/>
            </header>
        `;
    }
}
customElements.define('my-header', MyHeader);

// Componente de Formulario
class MyForm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <form>
                <slot></slot>
            </form>
        `;
    }
}
customElements.define('my-form', MyForm);

// Componente de Campo de Entrada
class MyInput extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <div>
                <label for="input">${this.getAttribute('label')}</label>
                <input id="input" type="${this.getAttribute('type')}">
            </div>
        `;
    }
}
customElements.define('my-input', MyInput);

// Componente de Contenido
class MyContent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <section>
                <p>Contenido emocionante aquí.</p>
            </section>
        `;
    }
}
customElements.define('my-content', MyContent);

// Componente de Pie de Página
class MyFooter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <footer>
                <slot></slot>
            </footer>
        `;
    }
}
customElements.define('my-footer', MyFooter);
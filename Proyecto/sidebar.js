// Sidebar.js

class Sidebar {
    constructor(onMenuSelect) {
        this.sidebar = document.createElement('div');
        this.sidebar.className = 'sidebar';

        this.menuItems = [
            { id: 'opcion1', label: 'Eventos Asignados' },
            { id: 'opcion2', label: 'Calendario' },
            { id: 'opcion3', label: 'Integrantes' }
        ];

        this.menuList = document.createElement('ul');
        this.menuList.className = 'list-group';

        this.menuItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item';
            listItem.textContent = item.label;

            listItem.addEventListener('click', () => {
                onMenuSelect(item.id);
            });

            this.menuList.appendChild(listItem);
        });

        this.sidebar.appendChild(this.menuList);
    }

    render(container) {
        container.appendChild(this.sidebar);
    }
}

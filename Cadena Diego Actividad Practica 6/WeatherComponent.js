class WeatherComponent extends HTMLElement {
    connectedCallback() {
        this.getDataFromAPI('Sangolqui');
    }

    async getDataFromAPI(city) {
        const apiKey = '4c90ac39c4e88b4e89ea46a4cdabdf40';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.statusText);
            }

            const data = await response.json();
            this.displayWeather(data);
        } catch (error) {
            console.error(error.message);
        }
    }

    displayWeather(data) {
        // Lógica para mostrar los datos en una tarjeta informativa
        this.innerHTML = `
            <style>
                .weather-card {
                    background: linear-gradient(to right, #1e3c72 0%, #2a5298 100%);
                    border-radius: 10px;
                    color: white;
                    padding: 20px;
                    text-align: center;
                    box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
                    transition: transform .2s, opacity .2s;
                    opacity: 0.9;
                }
                .weather-card:hover {
                    transform: scale(1.1);
                    opacity: 1;
                }
            </style>
            <div class="weather-card">
                <h2>${data.name}</h2>
                <p>Temperatura: ${data.main.temp}°C</p>
                <p>Descripción: ${data.weather[0].description}</p>
            </div>
        `;
    }
}

customElements.define('weather-component', WeatherComponent);
const axios = require('axios');
const chalk = require('chalk');

class WeatherService {
    constructor(apiKey = null) {
        // Using a free weather API (no key required)
        this.baseURL = 'https://api.openweathermap.org/data/2.5';
        this.apiKey = apiKey || 'your_api_key_here'; // You can get a free key from OpenWeatherMap
    }

    async getWeather(city) {
        try {
            console.log(chalk.blue(`🌤️  Fetching weather for: ${chalk.bold(city)}`));
            
            // For demo purposes, we'll use a mock API since OpenWeatherMap requires an API key
            // In production, you'd use: `${this.baseURL}/weather?q=${city}&appid=${this.apiKey}&units=metric`
            
            const mockWeatherData = {
                name: city,
                main: {
                    temp: Math.round(Math.random() * 30 + 10), // Random temp between 10-40°C
                    humidity: Math.round(Math.random() * 50 + 30), // Random humidity 30-80%
                    pressure: Math.round(Math.random() * 200 + 1000) // Random pressure
                },
                weather: [
                    {
                        main: ['Clear', 'Clouds', 'Rain', 'Snow'][Math.floor(Math.random() * 4)],
                        description: 'Beautiful weather for coding!'
                    }
                ],
                wind: {
                    speed: Math.random() * 10
                }
            };

            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            return this.formatWeatherData(mockWeatherData);
            
        } catch (error) {
            throw new Error(`Failed to fetch weather: ${error.message}`);
        }
    }

    formatWeatherData(data) {
        const weatherEmoji = {
            'Clear': '☀️',
            'Clouds': '☁️',
            'Rain': '🌧️',
            'Snow': '❄️'
        };

        const emoji = weatherEmoji[data.weather[0].main] || '🌈';
        
        return {
            city: data.name,
            temperature: data.main.temp,
            description: data.weather[0].description,
            condition: data.weather[0].main,
            humidity: data.main.humidity,
            pressure: data.main.pressure,
            windSpeed: data.wind.speed,
            emoji: emoji
        };
    }

    displayWeather(weather) {
        console.log('\n' + chalk.yellow('═'.repeat(50)));
        console.log(chalk.cyan.bold(`         WEATHER DASHBOARD`));
        console.log(chalk.yellow('═'.repeat(50)));
        
        console.log(chalk.white(`📍 City: ${chalk.green.bold(weather.city)}`));
        console.log(chalk.white(`🌡️  Temperature: ${chalk.red.bold(weather.temperature + '°C')}`));
        console.log(chalk.white(`${weather.emoji} Condition: ${chalk.blue.bold(weather.condition)}`));
        console.log(chalk.white(`📝 Description: ${chalk.magenta(weather.description)}`));
        console.log(chalk.white(`💧 Humidity: ${chalk.cyan(weather.humidity + '%')}`));
        console.log(chalk.white(`🌀 Pressure: ${chalk.yellow(weather.pressure + ' hPa')}`));
        console.log(chalk.white(`💨 Wind Speed: ${chalk.gray(weather.windSpeed.toFixed(1) + ' m/s')}`));
        
        console.log(chalk.yellow('═'.repeat(50)) + '\n');
    }
}

module.exports = WeatherService;
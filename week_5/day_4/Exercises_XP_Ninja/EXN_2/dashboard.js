const readline = require('readline');
const chalk = require('chalk');
const WeatherService = require('./weather');

class WeatherDashboard {
    constructor() {
        this.weatherService = new WeatherService();
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        this.history = [];
    }

    displayWelcome() {
        console.log(chalk.hex('#FF6B6B').bold(`
    ╔═══════════════════════════════════════════════╗
    ║              🌤️ WEATHER DASHBOARD 🌤️           ║
    ║          Your Coding Weather Companion        ║
    ╚═══════════════════════════════════════════════╝
        `));
        
        console.log(chalk.hex('#4ECDC4')('Commands:'));
        console.log(chalk.white('  • Enter a city name to get weather'));
        console.log(chalk.white('  • Type "history" to see your search history'));
        console.log(chalk.white('  • Type "exit" or "quit" to leave\n'));
    }

    async start() {
        this.displayWelcome();
        await this.promptUser();
    }

    async promptUser() {
        this.rl.question(chalk.hex('#FFE66D')('🏙️  Enter city name: '), async (input) => {
            const city = input.trim();
            
            if (city.toLowerCase() === 'exit' || city.toLowerCase() === 'quit') {
                console.log(chalk.green('👋 Thanks for using Weather Dashboard! Happy coding!'));
                this.rl.close();
                return;
            }
            
            if (city.toLowerCase() === 'history') {
                this.showHistory();
                await this.promptUser();
                return;
            }
            
            if (city) {
                await this.getAndDisplayWeather(city);
            } else {
                console.log(chalk.red('❌ Please enter a valid city name.'));
            }
            
            await this.promptUser();
        });
    }

    async getAndDisplayWeather(city) {
        try {
            const weather = await this.weatherService.getWeather(city);
            this.weatherService.displayWeather(weather);
            
            // Add to history
            this.history.push({
                city: city,
                time: new Date().toLocaleTimeString(),
                temperature: weather.temperature
            });
            
        } catch (error) {
            console.log(chalk.red(`❌ Error: ${error.message}`));
        }
    }

    showHistory() {
        if (this.history.length === 0) {
            console.log(chalk.yellow('📝 No search history yet.'));
            return;
        }
        
        console.log(chalk.cyan('\n📋 Search History:'));
        console.log(chalk.yellow('─'.repeat(40)));
        
        this.history.forEach((entry, index) => {
            console.log(chalk.white(`${index + 1}. ${entry.city} - ${entry.temperature}°C (${entry.time})`));
        });
        
        console.log(chalk.yellow('─'.repeat(40)) + '\n');
    }
}

module.exports = WeatherDashboard;
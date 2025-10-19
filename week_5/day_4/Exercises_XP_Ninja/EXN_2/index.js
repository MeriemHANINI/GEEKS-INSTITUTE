const WeatherDashboard = require('./dashboard');

async function main() {
    try {
        const dashboard = new WeatherDashboard();
        await dashboard.start();
    } catch (error) {
        console.error('Failed to start Weather Dashboard:', error);
        process.exit(1);
    }
}

// Handle graceful shutdown
process.on('SIGINT', () => {
    console.log('\n👋 Weather Dashboard closed. Have a great day!');
    process.exit(0);
});

// Start the application
if (require.main === module) {
    main();
}

module.exports = main;
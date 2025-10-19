#!/usr/bin/env node

const { Command } = require('commander');
const greet = require('./commands/greet');
const fetchData = require('./commands/fetch');
const readFile = require('./commands/read');

const program = new Command();

program
    .name('ninja-utility')
    .description('A powerful command-line utility for ninja developers')
    .version('1.0.0');

// Greet command
program
    .command('greet')
    .description('Display a colorful greeting message')
    .argument('[name]', 'Name to greet', 'Ninja')
    .action((name) => {
        greet(name);
    });

// Fetch command
program
    .command('fetch')
    .description('Fetch data from a public API')
    .argument('[url]', 'URL to fetch data from', 'https://jsonplaceholder.typicode.com/posts/1')
    .action(async (url) => {
        await fetchData(url);
    });

// Read command
program
    .command('read')
    .description('Read and display file content')
    .argument('<file>', 'File path to read')
    .action(async (file) => {
        await readFile(file);
    });

// Error handling for unknown commands
program.showHelpAfterError('(add --help for additional information)');

// Parse command line arguments
program.parse();
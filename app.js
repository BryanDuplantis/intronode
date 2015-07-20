#!/usr/bin/env node

var argv = require('yargs').argv;
var prompt = require('prompt');
var fs = require('fs');

var help = require('./app/help');
var zipFile = require('./app/zipfile');
var csvToJson = require('./app/csvToJson');

if (argv.help) {
  help();
  // help.printHelpMessage();
  // process.exit(1);
}

if (argv.file) {
  zipFile(argv.file);
}

  prompt.override = argv;
  prompt.message = prompt.delimiter = '';
  prompt.start();

  prompt.get('name', function (err, res) {
    printHelloMessage(res.name);
  });

function printHelloMessage(name) {
    console.log('Hello ' + name);
    process.stdout.write('Hello ' + name + ' Again!\n');
}

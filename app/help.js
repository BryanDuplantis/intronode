var fs = require('fs');

module.exports = function () {
  printHelpMessage();
  process.exit(1);
};

function printHelpMessage(cb) {
  var options = {encoding: 'utf8'};
  fs.readFileSync('./app/helpmessage.txt', options);
    console.log(message);
  };

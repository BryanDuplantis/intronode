var fs = require('fs');
var csv = require('csv');
var Converter = require('csvtojson').Converter;


// module.exports = function (dataPath) {
//   fs.createReadStream(dataPath)
//   .pipe(mydatafile())
// };

module.exports = function(filePath) {
  var csvConverter = new Converter();
  csvConverter.on("end_parsed",function(jsonObj){
    console.log(jsonObj);
  });
  fs.createReadStream(filePath)
    .pipe(csvConverter);
};

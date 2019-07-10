const CsvToJson = require("csvtojson");

function CsvParser(){

}

CsvParser.prototype.getJsonArray= function(filePath){

    return CsvToJson().fromFile(filePath);
}


module.exports = CsvParser;


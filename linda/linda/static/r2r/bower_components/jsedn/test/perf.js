// Generated by CoffeeScript 1.8.0
(function() {
  var edn, fs, micro, testEdn, testJson;

  edn = require("../src/reader");

  fs = require("fs");

  micro = require("microtime");

  testJson = function(data) {
    var end, now;
    now = micro.now();
    JSON.parse(data);
    end = micro.now();
    return console.log("JSON: " + (end - now));
  };

  testEdn = function(data) {
    var end, now;
    now = micro.now();
    edn.parse(data);
    end = micro.now();
    return console.log("EDN: " + (end - now));
  };

  edn.readFileSync("./performance-json/items.edn").each(function(file) {
    console.log("COMPARE " + file);
    testJson(fs.readFileSync("./performance-json/" + file + ".json", "utf-8"));
    return testEdn(fs.readFileSync("./edn-tests/performance/" + file + ".edn", "utf-8"));
  });

}).call(this);

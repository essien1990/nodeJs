var path = require('path');
var util = require('util');
var v8 = require('v8');

var fileName = path.join( __filename);

// file path name
console.log(fileName);

// current data and timestamp
util.log(fileName);

// current information of memory statistics
util.log(v8.getHeapStatistics());
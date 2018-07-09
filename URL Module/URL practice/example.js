var url = require('url');
var add = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(add, true);

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '/?year=2017$month=febraury'

var qdata = q.query; //returns an Object: { yar: 2017, month; 'febraury' }
console.log(qdata.month); //returns 'febraury'
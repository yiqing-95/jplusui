var sys = require('util')
var exec = require('child_process').exec;
function puts(error, stdout, stderr) {
    sys.puts(stdout);
}

var server = require("./startserver");

exec("start " + server.rootUrl, puts);
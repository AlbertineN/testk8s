const http = require('http');
const os = require('os');

console.log("Albertine-Devops Test Server Starting...");

var handler = function(request, respond){
    console.log("received request from" + request.connection.remoteAddress);
    response.writeHead(200);
    response.end("You've hit " + os.hostname() + "\n"); 
};

var www = http.createServer(handler);
www.listen(8080);
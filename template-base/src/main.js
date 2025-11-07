// A simple Node.js server that responds with a greeting message
// After setting up a new project, this should respond with a message containing the templated project name

const http = require('http');
const serviceName = "${{ values.name }}";
const description = "${{ values.description }}";

const server = http.createServer((req, res) => {
    res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
res.end(`Hello from ${serviceName}!\n${description}\n`);
});

const port = 8000;
server.listen(port, () => {
    console.log(`Service ${serviceName} running on http://localhost:${port}`);
});
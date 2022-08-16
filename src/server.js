require('dotenv').config();
const http = require('http');


const app = require('./app');
const server = http.createServer(app);
const host = 'localhost';
const PORT = process.env.PORT || 9999;

server.listen(PORT,host,() => {
  console.log(`server is on ${PORT}`)
});


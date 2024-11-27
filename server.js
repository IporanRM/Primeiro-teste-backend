const { createServer } = require('node:http');

const server = createServer((request, response) => {

    console.log("Método/Verbos" + request.method);

    console.log("Método/Verbos" + request.url);

   response.writeHead(200, { 'Content-Type': 'text/html' });
   response.end('<h1>Hello World.</h1> <br /> Aula do nosso queridissimo BackEnd');
});

server.listen(3000, '127.0.0.1', () => {
    console.log("Servidor executando http://127.0.0.1:3000")
});


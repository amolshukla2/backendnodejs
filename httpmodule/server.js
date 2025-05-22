const http= require('http');
const server= http.createServer((req, res) => {
    console.log(req,"req")
    
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
})
const port =3000;
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});


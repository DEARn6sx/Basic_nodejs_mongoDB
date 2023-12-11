const http = require('http')

const server = http.createServer(function(req, res) {
    const pathname = req.url
    console.log(`url = ${pathname}`);
    if (pathname === '/' || pathname === 'home') {
        res.end('Heeloo homepage')
    }else if (pathname === '/product') {
        res.end('hello product')
    }else{ 
        res.writeHead(404)
        res.end('not found!!')
    }
})

server.listen(4000,()=>{
    console.log(`start server in port 4000`);
})
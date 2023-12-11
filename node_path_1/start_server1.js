const http = require('http')
const fs = require('fs')
const indexpage = fs.readFileSync(`${__dirname}/templates/index.html`)
const productpage = fs.readFileSync(`${__dirname}/templates/product1.html`,'utf-8')

const server = http.createServer(function(req, res) {
    const pathname = req.url
    console.log(`url = ${pathname}`);
    if (pathname === '/' || pathname === 'home') {
        res.end(indexpage)
    }else if (pathname === '/product') {
        res.end(productpage)
    }else{ 
        res.writeHead(404)
        res.end('not found!!')
    }
})

server.listen(4000,()=>{
    console.log(`start server in port 4000`);
})
const http = require('http')
const fs = require('fs')
const url = require('url')


const indexpage = fs.readFileSync(`${__dirname}/templates/index.html`)
const productpage1 = fs.readFileSync(`${__dirname}/templates/product1.html`,'utf-8')
const productpage2 = fs.readFileSync(`${__dirname}/templates/product2.html`,'utf-8')
const productpage3 = fs.readFileSync(`${__dirname}/templates/product3.html`,'utf-8')

const server = http.createServer(function(req, res) {

    console.log(url.parse(req.url,true)); //แสดงข้อมูล url ตามrequest ว่ามี detail อย่างไร
    const {pathname, query} = url.parse(req.url,true) //ดึง pathname, query มาใช้
    console.log(`url = ${pathname}`);
    if (pathname === '/' || pathname === 'home') {
        res.end(indexpage)
    }else if (pathname === '/product') {
        console.log(query);
        if (query.id == 1) {
            res.end(productpage1)
        }else if (query.id == 2) {
            res.end(productpage2)
        }else if (query.id == 3) {
            res.end(productpage3)
        }   
    }else{ 
        res.writeHead(404)
        res.end('not found!!')
    }
})

server.listen(4000,()=>{
    console.log(`start server in port 4000`);
})
const http = require('http')

const server = http.createServer(function(req, res) {
    const text = '66666666666666666'
    res.write(text)
    res.end()
})

server.listen(4000,()=>{
    console.log(`start server in port 4000`);
})
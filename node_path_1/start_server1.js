const http = require('http')

const server = http.createServer(function(req, res) {
    res.write('55555555555hello wolrd555555555555')
    res.end()
})

server.listen(4000,()=>{
    console.log(`start server in port 4000`);
})
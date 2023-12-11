const express = require('express')
const app = express() //เรียกใช้งาน express

//การใช้งานตัวระบบ routing ในตอนเริ่มต้น * ต้องเขียนก่อน app.listen
app.use((req,res)=>{
    res.send(`hello express.js`)
})

app.listen(8080,()=>{
    console.log(`start server prot: 8080`);
})
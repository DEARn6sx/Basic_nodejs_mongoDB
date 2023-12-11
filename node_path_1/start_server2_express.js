const express = require('express')
const path = require('path')
const app = express() //เรียกใช้งาน express

//อ้างอิงตำแหน่งไฟล์
const pathPage = path.join(`${__dirname}/templates`)

//การใช้งานตัวระบบ routing ในตอนเริ่มต้น * ต้องเขียนก่อน app.listen
//app.get method กำหนดการทำงานของ req ที่ถูกส่งเข้ามา เข่นการส่งค่ามาพร้อมกับ url
//callback func ใน method get ใช้กำหนดการตอบสนองที่ส่ง request เข้ามา
router.get('/',(req,res)=>{
    res.status(200)
    res.type(`text/html`) //รูปแบบการ response
    res.sendFile(`${pathPage}/index.html`)
})
router.get('/product',(req,res)=>{
    res.status(200)
    res.type(`text/html`) //รูปแบบการ response
    res.sendFile(`${pathPage}/product1.html`)
})

app.use(router)

app.listen(8080,()=>{
    console.log(`start server prot: 8080`);
})
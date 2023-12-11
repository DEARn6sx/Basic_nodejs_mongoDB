const express = require('express')
const app = express() //เรียกใช้งาน express

//การใช้งานตัวระบบ routing ในตอนเริ่มต้น * ต้องเขียนก่อน app.listen
//app.get method กำหนดการทำงานของ req ที่ถูกส่งเข้ามา เข่นการส่งค่ามาพร้อมกับ url
//callback func ใน method get ใช้กำหนดการตอบสนองที่ส่ง request เข้ามา
app.get('/',(req,res)=>{
    res.send(`hello express22222.js`)
})
app.get('/product',(req,res)=>{
    res.send(`hello product.js`)
})

app.listen(8080,()=>{
    console.log(`start server prot: 8080`);
})
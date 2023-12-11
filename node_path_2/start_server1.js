const express = require('express')
//ใช้ router จัดการ routing ที่มีความซับซ้อน
const router = require('./routs/my_router')
const app = express() 

app.use(router)

app.listen(4000,()=>{
    console.log(`start server prot: 4000`);
})
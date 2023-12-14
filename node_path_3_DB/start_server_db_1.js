const express = require('express')
const path = require('path')
const router = require('./routs/my_router_db_7_edit')
const app = express()

//ตั้งค่า engine สำหรับรันแอป
app.set('views', path.join(`${__dirname}/views`))
app.set('view engine','ejs') 
app.use(express.urlencoded({extended:false})) //ส่งข้อมูลจาก form แบบ post มา encode เพื่อเอาข้อมูลมาใช้

app.use(router)
app.use(express.static(path.join(`${__dirname}/public`))) //ใช้งานfolder ks_templates 
app.listen(7000,()=>{
    console.log(`start server port: 7000`);
})
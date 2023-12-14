const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const router = require('./routs/my_router_db_9_cookie')
const app = express()

//ตั้งค่า engine สำหรับรันแอป
//app.use = การกรอง req ที่ส่งมา
app.set('views', path.join(`${__dirname}/views`))
app.set('view engine','ejs') 
app.use(express.urlencoded({extended:false})) //ส่งข้อมูลจาก form แบบ post มา encode เพื่อเอาข้อมูลมาใช้
app.use(cookieParser()) 

app.use(router)
app.use(express.static(path.join(`${__dirname}/public`))) //ใช้งานfolder ks_templates 
app.listen(8000,()=>{
    console.log(`start server port: 8000`);
})
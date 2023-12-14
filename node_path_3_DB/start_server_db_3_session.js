const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const router = require('./routs/my_router_db_10_session')
const app = express()

//ตั้งค่า engine สำหรับรันแอป
//app.use = การกรอง req ที่ส่งมา
app.set('views', path.join(`${__dirname}/views`))
app.set('view engine','ejs') 
app.use(express.urlencoded({extended:false})) //ส่งข้อมูลจาก form แบบ post มา encode เพื่อเอาข้อมูลมาใช้
app.use(cookieParser()) 
//secret : key สร้าง session id
app.use(session({secret:"my_session",resave:false,saveUninitialized:false})) 

app.use(router)
app.use(express.static(path.join(`${__dirname}/public`))) //ใช้งานfolder ks_templates 
app.listen(8000,()=>{
    console.log(`start server port: 8000`);
})
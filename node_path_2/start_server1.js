const express = require('express')
const path = require('path')
const router = require('./routs/my_router')
const app = express()

//ตั้งค่า engine สำหรับรันแอป
app.set('views', path.join(`${__dirname}/views`))
app.set('view engine','ejs')

app.use(router)
app.use(express.static(path.join(`${__dirname}/views`)))
app.listen(5000,()=>{
    console.log(`start server port: 5000`);
})
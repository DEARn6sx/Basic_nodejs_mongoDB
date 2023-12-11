//ใช้ router จัดการ routing ที่มีความซับซ้อน
const express = require('express')
const router = express.Router()
const path = require('path')

const pathPage = path.join(`${__dirname}/../templates`)

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

module.exports = router
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
router.get('/product/:id',(req,res)=>{
    const myParam_id = req.params.id
    if (myParam_id ==='1') {
        res.sendFile(`${pathPage}/product1.html`)
    }
    else if (myParam_id ==='2') {
        res.sendFile(`${pathPage}/product2.html`)
    }
    else if (myParam_id ==='3') {
        res.sendFile(`${pathPage}/product3.html`)
    }
    else {
        res.redirect('/')
    }
})

module.exports = router
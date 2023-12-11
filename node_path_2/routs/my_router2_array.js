//ใช้ router จัดการ routing ที่มีความซับซ้อน
const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    const products = ["shirt","shoose","hat","pants",'glasses']
    res.render('index2_array.ejs',{products: products})
})

module.exports = router
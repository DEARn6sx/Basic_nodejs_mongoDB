//ใช้ router จัดการ routing ที่มีความซับซ้อน
const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    const products = [
    {name:'คอม',price:5000,image:"images/products/product1.png"},
    {name:'เสื้อ',price:8000,image:"images/products/product2.png"},
    {name:'หูฟัง',price:8000,image:"images/products/product3.png"},
    {name:'หูฟัง',price:8000,image:"images/products/product3.png"}]
    res.render('index4_objec_kstemp.ejs',{products: products})
})

module.exports = router
//ใช้ router จัดการ routing ที่มีความซับซ้อน
const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    const products = [
    {name:'คอม',price:5000,image:"images/products/product1.png"},
    {name:'เสื้อ',price:8000,image:"images/products/product2.png"},
    {name:'หูฟัง',price:8000,image:"images/products/product3.png"},
    {name:'หูฟัง',price:8000,image:"images/products/product3.png"}]
    res.render('index5_file.ejs',{products: products})
})

router.get('/addform',(req,res)=>{
    res.render('form')
})
router.get('/manage',(req,res)=>{
    res.render('manage')
})

module.exports = router
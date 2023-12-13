//ใช้ router จัดการ routing ที่มีความซับซ้อน
const express = require('express')
const router = express.Router()
const Product = require('../models/product.js') //เรียกใช้งานModel


router.get('/',(req,res)=>{
    const products = [
    {name:'คอม',price:5000,image:"images/products/product1.png"},
    {name:'เสื้อ',price:84000,image:"images/products/product2.png"},
    {name:'หูฟัง',price:8000,image:"images/products/product3.png"},
    {name:'หูฟัง',price:80000,image:"images/products/product3.png"}]
    res.render('index_db1.ejs',{products: products})
})

router.get('/addform',(req,res)=>{
    res.render('public_page/form')
})
router.get('/manage',(req,res)=>{
    res.render('public_page/manage')
})

router.post('/insert',(req,res) => {
    //data ที่ส่งไป
    let data = new Product({
        name:req.body.name,
        price:req.body.price,
        image:req.body.image,
        detail:req.body.detail
    })  
    try {
        Product.saveProduct(data);
        res.redirect('/');
      } catch (error) {
        console.error(error);
        res.status(500).send('เกิดข้อผิดพลาดในการบันทึกข้อมูล');
      }//model ที่ส่งไป
    
})

module.exports = router
//ใช้ router จัดการ routing ที่มีความซับซ้อน
const express = require('express')
const router = express.Router()
const Product = require('../models/product.js') //เรียกใช้งานModel
const multer = require('multer') //อัพโหลดไฟล์

//ตำแหน่ง+ชื่อไฟล์
const storage = multer.diskStorage({
    //destination = ตำแหน่ง
    destination:function(req,file,callback) {
        callback(null,'./node_path_3_DB/public/images/products') //ตำแหน่งเก็บไฟล์
    },
    filename:function(req,file,callback) {
        callback(null,Date.now()+'.png') //เปลี่ยนชื่อไฟล์
    }
})

//เริ่มต้น upload
const upload = multer({
    storage:storage
})

router.get('/',(req,res)=>{
    const fetchProducts = async () => {
        try {
          const products = await Product.find({});
          res.render('index_db1.ejs',{products})
          // You can now use the 'products' array in your application
        } catch (err) {
          console.error(err);
        }
      };
      fetchProducts();
})

router.get('/addform',(req,res)=>{
    res.render('public_page/form')
})
router.get('/manage',(req,res)=>{
    const fetchProducts = async () => {
        try {
          const products = await Product.find({});
          res.render('public_page/manage.ejs',{products})
          // You can now use the 'products' array in your application
        } catch (err) {
          console.error(err);
        }
      };
      fetchProducts();
})

router.post('/insert',upload.single('image'),(req,res) => {
    //data ที่ส่งไป
    let data = new Product({
        name:req.body.name,
        price:req.body.price,
        image:req.file.filename,
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
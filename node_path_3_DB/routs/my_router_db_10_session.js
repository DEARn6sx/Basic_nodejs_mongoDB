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

router.get('/logout', (req, res) => { 
    req.session.destroy((err) => {     
        res.redirect('/manage');
    });
});

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
    if (req.session.login) {
        res.render('public_page/form')
    }
    else res.render('addmin')
})
router.get('/manage',(req,res)=>{
    const fetchProducts = async () => {
        try {
          const products = await Product.find({});
          if (req.session.login) {
            res.render('public_page/manage.ejs',{products})
        }
        else res.render('addmin')
          
          // You can now use the 'products' array in your application
        } catch (err) {
          console.error(err);
        }
      };
      fetchProducts();
    
})

router.get('/delete/:id', async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id, { useFindAndModify: false });

        if (!deletedProduct) {
            console.log('Product not found.');
            // Handle the case where the product with the given ID is not found
        } else {
            console.log('Product deleted successfully:', deletedProduct);
            // Redirect or render a page after successful deletion
            res.redirect('/manage');
        }
    } catch (err) {
        console.error('Error deleting product:', err);
        // Handle other errors, e.g., send an error response
        res.status(500).send('Internal Server Error');
    }
});

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

router.get('/:id',(req,res)=>{
   

    const fetchProducts = async () => {
        const producrt_id = req.params.id
        try {
          const products = await Product.findOne({_id:producrt_id});
            console.log(products);
          res.render('public_page/product',{product:products}) //ส่ง object ไปที่ product.ejs 
          // You can now use the 'products' array in your application
        } catch (err) {
          console.error(err);
        }
      };
      fetchProducts();
    
})


router.post('/edit',(req,res) => {
  const edit_id = req.body.edit_idx
  console.log(edit_id);
  const fetchProducts = async () => {
    try {
      const edit_products = await Product.findOne({_id:edit_id});
       // console.log(edit_products);
      res.render('public_page/edit',{product:edit_products}) //ส่ง object ไปที่ product.ejs 
      // You can now use the 'products' array in your application
    } catch (err) {
      console.error(err);
    }
  };
  fetchProducts();
})

router.post('/update',(req,res) => {
    //data ที่ส่งไป
    const update_id = req.body.update_id
    
    let data = {
        name:req.body.name,
        price:req.body.price,
        detail:req.body.detail
    } 
    Product.findByIdAndUpdate(update_id, data, { useFindAndModify: false })
    .then(updatedProduct => {
        console.log("Product updated successfully:", updatedProduct);
        res.redirect('/manage');
    })
    .catch(error => {
        console.error("Error updating product:", error);
        res.status(500).send('เกิดข้อผิดพลาดในการบันทึกข้อมูล');
    });

    
})

router.post('/login', (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;
        const timeExpire = 30000; // 10 seconds

        if (username === 'admin' && password === '123') {
            // Create session
            req.session.username = username;
            req.session.password = password;
            req.session.login = true;
            req.session.cookie.maxAge = timeExpire;

            res.redirect('/manage');
        } else {
            // Incorrect username or password
            res.status(401).render('public_page/404'); // Use a proper error page or redirect
        }
    } catch (error) {
        console.error('Error in login route:', error);
        res.status(500).send('Internal Server Error');
    }
});



module.exports = router
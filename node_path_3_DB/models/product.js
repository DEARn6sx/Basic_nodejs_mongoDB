
//ใช้งาน mongoose
const mongoose = require('mongoose')

//เชื่อม mongoDB
const dburl = 'mongodb://localhost:27017/productDB'
mongoose.connect(dburl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).catch(err=>console.log(err))

//ออกแบบ schema โครงสร้างเก็บข้อมูล
let productSchema = mongoose.Schema({
    name:String,
    price:Number,
    image:String,
    detail:String
})


//สร้าง model
let Product = mongoose.model('products',productSchema)

//ส่งออก Model
module.exports = Product
//ใช้ router จัดการ routing ที่มีความซับซ้อน
const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    const name = "DEAR"
    const age = 26
    const address = "<h1>Roi et</h1>"
    res.render('index.ejs',{data: name,age: age, address:address})
})

module.exports = router
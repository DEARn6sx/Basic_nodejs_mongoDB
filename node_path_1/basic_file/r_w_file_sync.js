const fs = require('fs')

const file = fs.readFileSync('node_path_1/basic_file/my_file/file.txt','utf-8')

console.log(file);
console.log('end');

//เขียนไฟล์
const outputtext = `"hello node js"\n ${file} \n เขียนเมื่อ ${new Date()}`
fs.writeFileSync('node_path_1/basic_file/my_file/output.txt',outputtext)
console.log('success');
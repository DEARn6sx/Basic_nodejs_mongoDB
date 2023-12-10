const fs = require('fs')

fs.readFile('node_path_1/basic_file/my_file/file.txt','utf-8',(err,data)=>{
    if (err) {
        return console.log(`error is ${err}`);
    }
    const outputtext = `hellll node js \n${data}\nwritten when: ${new Date()}`
    fs.writeFile('node_path_1/basic_file/my_file/output_Async.txt',outputtext,err =>{
        if (err) {
            return console.log(`error is ${err}`);
        }console.log('written file success');
    })
})


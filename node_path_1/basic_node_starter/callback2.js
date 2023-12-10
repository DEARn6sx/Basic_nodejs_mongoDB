const url = "www.google.com"
const url2 = "www.22google22.com"
const url3 = "www.33google33.com"

function downloading(url,callback) {
    console.log(`downloading... ${url}`);
    setTimeout(() => {     
        callback(url) // ใส่ url เข้าไปทำงานใน fn complete()
    }, 1000);
}

function complete(result) {
    console.log(`download ${result}success`);
}

// downloading(url,complete)
downloading(url,function(result) {
    console.log(`download ${result}success`)
    downloading(url2,function(result) {
        console.log(`download ${result}success`)
        downloading(url3,function(result) {
            console.log(`download ${result}success`)
        })
    })
})
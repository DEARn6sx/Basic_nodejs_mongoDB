const url1 = "www.google.com"
const url2 = "www.22google22.com"
const url3 = "www.33google33.com"

const connect = 0
function downloading(url) {
    return new Promise(function(resolve, reject) {
        console.log(`downloading....${url}`);
        setTimeout(() => {
            if (connect) {
            //console.log(`download ${url} success`);
            resolve(`download ${url} success`)
            }else{
            //console.log(`error`);
            reject(`error`)
            }
        }, 1000);
        
    })
}

// downloading(url1).then(result => {
//     console.log(result);
// }).catch(err => {
//     console.log(err);
// }).finally(()=>{
//     console.log(`end`);
// })

// downloading(url1).then(function(result){
//     console.log(result)
//     downloading(url2).then(function(result){
//         console.log(result)
//         downloading(url3).then(function(result){
//             console.log(result)
//         })
//     })
// })

downloading(url1).then(function(result) {
    console.log(result)
    return downloading(url2)
}).then(function(result) {
    console.log(result)
    return downloading(url3)
}).then(function(result) {
    console.log(result)
}).catch(err =>{
    console.log(err);
}).finally(()=>{console.log(`end`);})
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

//Async & Await

async function start() {
    console.log(await downloading(url1));
    console.log(await downloading(url2));
    console.log(await downloading(url3));
}

start().catch((result)=>{console.log(result);})
//asynchronous
// console.log('strat dowload');
// setTimeout(() => {
//     console.log('dowloading....');
// }, 2000);
// console.log('dowload success');

function calculate(x,y,callback) {
    console.log(`calculating...`);
    setTimeout(() => {
        
        const sum = x+y
        callback(sum) // = function display
    }, 1000);
    
}
function display(result) {
    console.log(`ผลบวกตัวเลข = ${result}`);
}

// calculate(100,500,display)
calculate(100,500,function(result) {
    console.log(`ผลบวกตัวเลข = ${result}`)
})

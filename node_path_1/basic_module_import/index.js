const mymodules = require('../basic_module/my_module')
const now = require('../basic_module/my_module').getCurrentTime()


console.log(mymodules.getCurrentTime());
console.log(mymodules.calculate(100,700));
console.log(mymodules.formatNumber(1000000));
console.log(now);
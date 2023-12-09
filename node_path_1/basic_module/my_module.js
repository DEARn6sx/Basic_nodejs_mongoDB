function getCurrentTime() {
    return new Date()
}

function calculate(x,y) {
    return x+y
}

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

//ส่งออกคำสั่งไปใช้
module.exports.getCurrentTime = getCurrentTime

module.exports.calculate = calculate

module.exports.formatNumber = formatNumber
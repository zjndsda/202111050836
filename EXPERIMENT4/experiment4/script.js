// 1. 利用循环实现从1到100的求和函数，并调用该函数显示结果
function sumNumbers() {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        sum += i;
    }
    document.getElementById('sumResult').innerHTML = `1到100的和是：${sum}`;
}

// 2. 输入年份，判断是否是闰年
function checkLeapYear() {
    const year = document.getElementById('yearInput').value;
    let result = '';
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        result = `${year}是闰年`;
    } else {
        result = `${year}不是闰年`;
    }
    document.getElementById('leapYearResult').innerHTML = result;
}

// 3. 设计回调函数的使用场景并实现之（函数作为参数）
function sayHello(helloFun) {
    const greeting = helloFun();
    document.getElementById('greetingResult').innerHTML = greeting;
}

function helloChinese() {
    return '你好';
}

function helloEnglish() {
    return 'Hello';
}

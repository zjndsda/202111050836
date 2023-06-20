// 实现获取当前日期的年月日和周几，计算离放假还有多少天
function getCurrentDate() {
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = currentDate.getMonth() + 1;
    var day = currentDate.getDate();
    var weekDay = ['日', '一', '二', '三', '四', '五', '六'][currentDate.getDay()];
    var holidayDate = new Date(year, 6, 16); // 放假日期，月份从0开始，所以7月对应的是6
    var daysLeft = Math.ceil((holidayDate - currentDate) / (1000 * 60 * 60 * 24));
  
    console.log('当前日期：', year + '年' + month + '月' + day + '日 周' + weekDay);
    console.log('距离放假还有', daysLeft, '天');
  }
  
  getCurrentDate();
  
  // 实现对字符串数组的排序，比较字符串大小，数组增删改操作
  function manipulateStringArray() {
    var studentNames = ['Tom', 'Jerry', 'Alice', 'Bob'];
  
    console.log('排序前的数组：', studentNames);
  
    studentNames.sort(); // 对数组进行排序
  
    console.log('排序后的数组：', studentNames);
  
    var index = studentNames.indexOf('Alice'); // 查找元素的索引
    if (index !== -1) {
      studentNames.splice(index, 1); // 删除指定索引位置的元素
    }
  
    console.log('删除元素后的数组：', studentNames);
  
    studentNames.push('Mike'); // 添加元素到数组末尾
  
    console.log('添加元素后的数组：', studentNames);
  
    studentNames[0] = 'John'; // 修改指定索引位置的元素
  
    console.log('修改元素后的数组：', studentNames);
  }
  
  manipulateStringArray();
  
  // 使用构造函数和原型混合法实现Car对象
  function Car(color, type, price) {
    this.color = color;
    this.type = type;
    this.price = price;
  }
  
  Car.prototype.start = function() {
    console.log('启动车辆');
  };
  
  Car.prototype.stop = function() {
    console.log('停止车辆');
  };
  
  // 创建Car对象并使用
  var myCar = new Car('红色', '轿车', 100000);
  
  console.log('我的车的颜色：', myCar.color);
  console.log('我的车的类型：', myCar.type);
  console.log('我的车的价格：', myCar.price);
  
  myCar.start();
  myCar.stop();
  
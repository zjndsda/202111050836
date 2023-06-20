// 在提交按钮被点击时触发验证
function validateForm() {
    // 获取表单元素
    var input1 = document.getElementById('input1');
    var input2 = document.getElementById('input2');
    var phoneInput = document.getElementById('phone');
    var emailInput = document.getElementById('email');
  
    // 执行简单验证
    if (!checkRequired(input1)) {
      setError(input1, 'Field is required');
      return false;
    }
  
    if (!checkRequired(input2)) {
      setError(input2, 'Field is required');
      return false;
    }
  
    // 执行正则表达式验证
    if (!checkPhone(phoneInput)) {
      setError(phoneInput, 'Invalid phone number');
      return false;
    }
  
    if (!checkEmail(emailInput)) {
      setError(emailInput, 'Invalid email address');
      return false;
    }
  
    // 验证通过
    return true;
  }
  
  // 简单验证非空和长度限制
  function checkRequired(input) {
    if (input.value.trim() === '') {
      return false;
    }
  
    if (input.maxLength > 0 && input.value.length > input.maxLength) {
      return false;
    }
  
    return true;
  }
  
  // 使用正则表达式验证电话号码
  function checkPhone(input) {
    var phoneRegex = /^\d{10}$/;
    return phoneRegex.test(input.value);
  }
  
  // 使用正则表达式验证邮箱地址
  function checkEmail(input) {
    var emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return emailRegex.test(input.value);
  }
  
  // 设置元素为错误状态并设置焦点
  function setError(input, message) {
    input.classList.add('error');
    input.nextElementSibling.textContent = message;
    input.focus();
  }
  
  // 初始化表单验证
  function initFormValidation() {
    var form = document.getElementById('myForm');
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // 阻止表单提交
  
      if (validateForm()) {
        // 表单验证通过，可以继续处理提交逻辑
        // TODO: 处理提交逻辑
        console.log('Form submitted successfully');
      }
    });
  }
  
  // 当页面加载完成时初始化表单验证
  document.addEventListener('DOMContentLoaded', initFormValidation);
  
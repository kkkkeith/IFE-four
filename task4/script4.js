 function clickButton() {
  /*  
  *给按钮button绑定一个点击事件
  *在事件处理函数中获取aqi-input输入的值，并显示在aqi-display中
  */
    var text = document.getElementById("aqi-input").value;
    document.getElementById("aqi-display").innerHTML=text;
}
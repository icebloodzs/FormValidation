$(function(){
  var input_name =document.getElementById("doc-vld-name-2-0"),
  nub = document.getElementById("doc-vld-pwd-1-0"),
  bank = document.getElementById("doc-select-1"),
  nameinfo = document.createElement("p"), 
  nubinfo = document.createElement("p"), 
  bankinfo = document.createElement("p"), 
  testreg = /\s/g, 
  btn = document.getElementById("btn"); 
  function getlength(str){ 
    var length_count = 0; 
    for(var i=0;i<str.length;i++){ 
       var code_num = str.charCodeAt(i); 
       if(code_num>=0 && code_num<=128){ 
           length_count +=1; 
       } 
       else{ 
           length_count +=2; 
       } 
    } 
    return length_count; 
    } 

  //select
  function bankBlur(){ 
  var oldinfo = document.getElementById("bankinfo"); 
    if(!oldinfo){ 
      bankinfo.setAttribute("id","bankinfo"); 
      bank.parentNode.appendChild(bankinfo); 
    } 
    if(bank.value =="#"){ 
      bank.style.border = "1px solid red"; 
      bankinfo.innerHTML = "请选择你的网点"; 
      bankinfo.style.color = "red"; 
      return false; 
    } 
    else{ 
      bank.style.border = "1px solid #3385ff"; 
      bankinfo.style.color = "green"; 
      bankinfo.innerHTML = ""; 
      return true; 
    } 
  } 

  //名称
  function nameFocus(){ 
    var oldinfo = document.getElementById("nameinfo"); 
    if(!oldinfo){ 
        nameinfo.innerHTML = "必填，长度为2~4个字符"; 
        nameinfo.style.color = "#ccc"; 
        nameinfo.setAttribute("id","nameinfo"); 
        input_name.parentNode.appendChild(nameinfo); 
    } 
  } 
  function nameBlur(){ 
    var oldinfo = document.getElementById("nameinfo"); 
    if(!oldinfo){ 
        nameinfo.setAttribute("id","nameinfo"); 
        input_name.parentNode.appendChild(nameinfo); 
    } 
    if(input_name.value =="" || testreg.test(input_name.value)){ 
        input_name.style.border = "1px solid red"; 
        nameinfo.innerHTML = "姓名不能为空且不能含有空格"; 
        nameinfo.style.color = "red"; 
        return false; 
    } 
    else if(getlength(input_name.value)>=2 && getlength(input_name.value)<=4){ 
        input_name.style.border = "1px solid #3385ff"; 
        nameinfo.innerHTML = ""; 
        nameinfo.style.color = "green"; 
        return true; 
    } 
    else{ 
        input_name.style.border = "1px solid red"; 
        nameinfo.innerHTML = "名称格式不正确，输入长度为2~4个字符"; 
        nameinfo.style.color = "red"; 
        return false; 
    } 
  } 

  //工号
  function nubFocus(){ 
    var oldinfo = document.getElementById("nubinfo"); 
    if(!oldinfo){ 
        nubinfo.innerHTML = ""; 
        nubinfo.style.color = "#ccc"; 
        nubinfo.setAttribute("id","nubinfo"); 
        nub.parentNode.appendChild(nubinfo); 
    } 
  } 
  function nubBlur(){ 
    var oldinfo = document.getElementById("nubinfo"); 
    if(!oldinfo){ 
        nubinfo.setAttribute("id","nubinfo"); 
        nub.parentNode.appendChild(nubinfo); 
    } 
    if(nub.value ==""|| testreg.test(nub.value)){ 
        nub.style.border = "1px solid red"; 
        nubinfo.innerHTML = "工号不能为空,不能用空格作为工号"; 
        nubinfo.style.color = "red"; 
        return false; 
    } 
    else{ 
        nub.style.border = "1px solid #3385ff"; 
        nubinfo.innerHTML = ""; 
        nubinfo.style.color = "green"; 
        return true; 
    } 
  } 

  function sure(){
    var fixed = $(".app_fixedBox");
    var fixed_hide = $("#fixedBox_no");//节点 取消
    var fixedBox_con = $("#fixedBox_con");
      event.stopPropagation();
      fixed.addClass("show");
      //定义再次确认页面函数变量
    var _fn_hide= function(event){
      event.stopPropagation();
      fixed.removeClass("show");
    }
    //点击时触发确认页面隐藏 
    fixed_hide.click( _fn_hide );
    fixedBox_con.click(function(){
      event.stopPropagation();
    } );
  }

  //检查表单
  function checkAll(){ 
    var nameFlag = nameBlur(),
        nubflag = nubBlur(),
        bankFlag = bankBlur();
    if(nameFlag&nubflag&bankFlag){ 
      return sure();
    }else{  
      return false; 
    } 
  }

  input_name.addEventListener("focus",nameFocus); 
  input_name.addEventListener("blur",nameBlur); 
  nub.addEventListener("focus",nubFocus); 
  nub.addEventListener("blur",nubBlur); 
  bank.addEventListener("blur",bankBlur); 
  btn.addEventListener("click",checkAll);
  
  //防止表单提交重复数据
  $("#submit").click(function(){
        $(this).attr("disabled","true"); //设置变灰按钮
        $("#generatePostersform").submit();//提交表单
        setTimeout("$('#submit').removeAttr('disabled')",3000); //设置三秒后提交按钮 显示
    })
});


         


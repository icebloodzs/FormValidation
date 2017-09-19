function test(){
    var form = new FormData(document.getElementById("myPosters"));
//             var req = new XMLHttpRequest();
//             req.open("post", "${pageContext.request.contextPath}/public/testupload", false);
//             req.send(form);
    $.ajax({
        url:"#",
        type:"post",
        data:form,
        processData:false,
        contentType:false,
        success:function(data){
            window.clearInterval(timer);
            alert("成功生成");
        },
        error:function(e){
            alert("错误！！");
            window.clearInterval(timer);
        }
    });        
}
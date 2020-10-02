function minus(x,y){
    document.write(x-y+"<br>");
}
minus(x,y);
function check(){
    if(document.frml.pwd.value == document.frml.repwd.value){
        alert("OK");
        return true;
    }else{
        alert("Mật khẩu nhập sai");
        return false;
    }
}
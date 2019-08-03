
function checkuser(){
    var user = document.getElementById("user");
    if(user.value.length==0){
        return false;
    }
    return true;
}
function checkpsw() {
    var psw = document.getElementById("psw");
    if(psw.value.length==0){
        return false;
    }
    return true;
}
function check() {
    if(!checkuser()){
        alert("检查你的用户名！");
        return false;
    }
    if(!checkpsw()){
        alert("检查你的密码！");
        return false;
    }
    return true;
}
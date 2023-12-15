let username = document.querySelector('#username');
let email = document.querySelector('#email');
let passowrd = document.querySelector('#password');
let confirmPassword = document.querySelector('#confirm-password');
let form = document.querySelector('form');
//hàm hiển thị thông báo lỗi
function showError(input,message){
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    parent.classList.add('error');
    small.innerText = message;
}
//hàm hiển thị thông báo an toàn
function showSuccess(input){
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    parent.classList.remove('error');
}
//kiểm tra dữ liệu trống
function checkEmptyError(listInput){
    let isEmptyError = false;
    listInput.forEach(input =>{
        input.value = input.value.trim()
        if(!input.value){
            isEmptyError = true;
            showError(input,"Không được để trống");
        }else{
            showSuccess(input);
        }
    });
    return isEmptyError;
}
function checkEmailError(input){
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    input.value = input.value.trim();
    let isEmtyEmail = !regexEmail.test(input.value);
    if(regexEmail.test(input.value)){
        showSuccess(input);
    }else{
        showError(input,"Email invalid");
    }
    return isEmtyEmail;
}
function checkUsernameError(input){
    const regexUsername = /^[a-zA-Z0-9\.\-\_]{2,100}/;
    input.value = input.value.trim();
    let isEmtyUsername = !regexUsername.test(input.value);
    if(regexUsername.test(input.value)){
        showSuccess(input);
    }else{
        showError(input,"Username invalid");
    }
    return isEmtyUsername;
}
function checkPassWord(passowrdInput,cfPasswordInput){
    if(passowrdInput.value !== cfPasswordInput.value){
        showError(cfPasswordInput,"Mật khẩu không trùng khớp");
        return true;
    }
    return false;
}
//xử lý submit form
form.addEventListener('submit',function(e){
    e.preventDefault();//!load trang
    let isEmptyError = checkEmptyError([username,email,passowrd,confirmPassword]);
    let isEmtyEmail = checkEmailError(email);
    let isEmtyUsername = checkUsernameError(username);
    let isEmptyPassowrd = checkPassWord(passowrd,confirmPassword);
    if(isEmptyError || isEmtyEmail || isEmtyUsername || isEmptyPassowrd){
        alert('hello')
    }else{
        alert("bbbb")
    }
})
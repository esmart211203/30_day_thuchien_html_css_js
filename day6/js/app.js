eKey = document.querySelector('.key p:last-child');
eLocation = document.querySelector('.location p:last-child')
eWich = document.querySelector('.wich p:last-child')
eCode = document.querySelector('.code p:last-child')
alert = document.querySelector('.alert')
box = document.querySelector('.box')
result = document.querySelector('.result')
console.log(eCode);
document.addEventListener('keydown',e =>{
    //bắt sự kiện ấn phím
    alert.classList.add('hide')
    box.classList.remove('hide')
    //hiện thị ra card
    result.innerText = e.code;
    eKey.innerText = e.key;
    eLocation.innerText = e.location;
    eWich.innerText = e.which;
    eCode.innerText = e.code;
});
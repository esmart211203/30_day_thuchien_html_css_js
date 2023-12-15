let btnSuccess = document.querySelector('button.success');
let btnWarning = document.querySelector('button.warning');
let btnError = document.querySelector('button.error');

createToasts = (status) =>{
    let  templateInner = ''
    switch (status){
        case 'success':
            templateInner = `<i class="fa-solid fa-circle-check"></i>
            <span class="message">This is a Success message</span>`
            break;
        case 'warning':
            templateInner =`<i class="fa-solid fa-triangle-exclamation"></i>
            <span class="message">This is a Warning message</span>`
            break;
        case 'error':
            templateInner =`<i class="fa-solid fa-triangle-exclamation"></i>
            <span class="message">This is a Error message</span>`
            break;
    }
    let toast = document.createElement('div');
    toast.classList.add('toast')
    toast.classList.add(status)
    toast.innerHTML = `${templateInner}
    <span class="countdown"></span>`;
    //thêm toast vào div toasts
    var toastList = document.getElementById('toasts');
    toastList.appendChild(toast);
    //hide slide
    setTimeout(() => {
        toast.style.animation = 'slide_hide 2s ease forwards';
    }, 3000);
    //xóa khỏi DOM
    setTimeout(() => {
        toast.remove()
    }, 5000);
}

btnSuccess.addEventListener('click',function(){
    createToasts('success')
});
btnWarning.addEventListener('click',function(){
    createToasts('warning')
});
btnError.addEventListener('click',function(){
    createToasts('error')
});


a = [1,2,3,4,5]
console.log(a);
a.sort();
console.log(a[0]);
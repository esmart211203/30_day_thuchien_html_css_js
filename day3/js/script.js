let btnOpen = document.querySelector('.open-modal-btn');
let modal = document.querySelector('.modal');
let btnClose = document.querySelector('.modal-footer button');
let iClose = document.querySelector('.modal-header i');
function toggleModal(e){
    console.log(e);
    modal.classList.toggle('hide');
}
btnOpen.addEventListener('click',function(){
    toggleModal()
})
btnClose.addEventListener('click',function(){
    toggleModal()
})
iClose.addEventListener('click',function(){
    toggleModal()
})
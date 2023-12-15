let images = document.querySelectorAll('.image img')
let close = document.querySelector('.close')
let prev = document.querySelector('.prev')
let next = document.querySelector('.next')
let galleryImg = document.querySelector('.gallery-inner img')
let gallery = document.querySelector('.gallery')
currentIndex = 0;

function showGallery(){
    //display 
    galleryImg.src = images[currentIndex].src
    gallery.classList.add('show');
    //check prev
    if(currentIndex == 0){
        prev.classList.add('hide')
    }else{
        prev.classList.remove('hide')
    }
    //check next
    if(currentIndex == images.length -1){
        next.classList.add('hide')
    }else{
        next.classList.remove('hide')
    }
}
images.forEach((item,index)=>{
    item.addEventListener('click',function(){
        currentIndex = index;
        showGallery();
    })
})
close.addEventListener('click',function(){
    gallery.classList.remove('show')
})
//ấn vào esc sẽ ẩn đi 
document.addEventListener('keydown',function(e){
    if(e.keyCode == 27){
        gallery.classList.remove('show')
    }
});
prev.addEventListener('click',function(){
    if(currentIndex > 0){
        currentIndex --;
        showGallery();
    }
})
next.addEventListener('click',function(){
    if(currentIndex < images.length -1){
        currentIndex ++;
        showGallery();
    }
})
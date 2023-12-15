let content = document.querySelector('.content');
let input = document.querySelector('.content input');
let removeAll = document.querySelector('.remove-all');
let tags = ['reactjs','javascript'];
function render(){
    content.innerHTML = ''
    for(let i = 0;i< tags.length;i++){
        const tag = tags[i];
        content.innerHTML += `<li> 
        ${tag} 
        <i class="fa-solid fa-xmark" onclick="removeTag(${i})"></i>
        </li>`
    }
    content.appendChild(input);
    input.focus();
}
render()
input.addEventListener('keydown',function(event){
    if(event.key == 'Enter'){
        tags.push(input.value.trim())
        render()
    }
});
function removeTag(index){
    if(index != -1){
        tags.splice(index, 1);
        render();
    }
}
removeAll.addEventListener('click',function(){
    tags.splice(0, tags.length);
    render();
})
// Наведение

let deleteIcon = document.querySelector('.fa-circle-trash');
let changeIcon = document.querySelector('.fa-pen');

deleteIcon.addEventListener('mouseenter', function(){
    $(deleteIcon).toggleClass('fa-solid fa-thin')
})
deleteIcon.addEventListener('mouseleave', function(){
    $(deleteIcon).toggleClass('fa-solid fa-thin')
})
changeIcon.addEventListener('mouseenter', function(){
    $(changeIcon).toggleClass('fa-solid fa-thin')
})
changeIcon.addEventListener('mouseleave', function(){
    $(changeIcon).toggleClass('fa-solid fa-thin')
})

// Создание элемента

let createItem = document.querySelector('.create-item');
createItem.addEventListener('click', function(){

})

// Смена текста

let input = document.querySelector('.item-text');

changeIcon.addEventListener('click', function(){
    input.removeAttribute('disabled');
    input.focus();
    input.selectionStart = input.value.length;
    document.querySelector('.item__wrapper-text').style.background = "#fafafa"
});

// Удаление элемента
let listItem = document.querySelector('.todo-list__item');
deleteIcon.addEventListener('click', function(){
    let confirmed = confirm("Вы уверены, что хотите удалить?");
    if (confirmed == true){
        listItem.remove();
    }
})
// outsdieClick

document.addEventListener("click", event => {
    const elem = event.target;
    if(!elem.classList.contains('item-text') && !elem.classList.contains('fa-pen')){
        input.setAttribute('disabled', 'disabled');
        document.querySelector('.item__wrapper-text').style.background = "#f3f3f3"
    }
})
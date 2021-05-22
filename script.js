const textarea = document.getElementById('text_area');
const block = document.getElementById('text_area_div');
/*
        АРГУМЕНТЫ ФУНКЦИИ
1. textarea - DOM елемент textarea
2. block - DOM елемент блок который будет скрыт
3. line_height - высота строки, задаем это значение в CSS и области ввода и блоку
4. min_line_count - минимальное значение
*/ 
textarea.addEventListener('keyup', e => {
 textarea_resize(textarea,block, 17)
})

function textarea_resize(textarea, block, line_height) {
    /*
    в блок поместили значение value т.к. у div в CSS стоит white-space: pre-wrap; и word-wrap: break-word; то перенос строки отражается в div, а значит высота элемента растет по мере наполнения текстом
    */
    block.textContent = textarea.value;
    // получили высоту блока
    let obj_height = block.offsetHeight;
    // если нажали Enter увеличивается
    if (event.keyCode === 13){
        obj_height += line_height;
    } 
    textarea.style.height = obj_height + 'px';
}



        

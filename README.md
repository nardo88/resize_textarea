# resize_textarea

 [ссылка](https://nardo88.github.io/resize_textarea/) на презентацию

 ## Описание

 ### HTML
```html
<textarea id="text_area" ></textarea>
<div id="text_area_div"></div>
```

### CSS код

```CSS
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
#text_area {
    width: 250px;
    height: 40px;
    min-height: 40px;
    overflow: hidden;
    padding: 10px;
    border: 1px solid #000000;
    font-family: Arial;
    font-size: 15px;
    line-height: 17px;
    color: #000000;
    resize: none;
    display: block;
    margin: 30px auto 0;
}

#text_area_div {
    
    width: 250px;
    padding: 10px;
    font-family: Arial;
    font-size: 15px;
    white-space: pre-wrap;
    word-wrap: break-word;
    line-height: 17px;
    visibility: hidden;
    position: absolute;
    left: -9999px;
    border: 1px solid #000;

}

```

### JavaScript

```JavaScript
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
    в блок поместили значение value т.к. у div в CSS стоит 
    white-space: pre-wrap; и word-wrap: break-word; то перенос 
    строки отражается в div, а значит высота элемента растет 
    по мере наполнения текстом
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
```
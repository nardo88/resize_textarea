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
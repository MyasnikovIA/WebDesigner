// список свойст  которые будут закрыты для редактирования  //  |innerHTML|designMode|click|
var elementSheetSkip = '|nodeValue|isConnected|baseURI|nodeName|nodeType|part|childElementCount|previousElementSibling|outerHTML|shadowRoot|tabIndex|contentEditable|isContentEditable|offsetTop|offsetLeft|offsetWidth|offsetHeight|outerText|namespaceURI|localName|tagName|';
// функция инициализации атрибут у элемента
InitAttributesComponent = function (elems, AttributeSkip) {
    if (AttributeSkip == undefined) {
        AttributeSkip = '';
    }
    AttributeSkip = AttributeSkip.toUpperCase();
    if (elems.AttributesHtml == undefined) {
        elems.AttributesHtml = {};
        for (var key in elems) {
            if (elementSheetSkip.indexOf(key) != -1) {
                continue;
            }
            if (key.toUpperCase() == key) {
                continue;
            } // пропустить все ключи написанные в верхнем регистре
            if ((AttributeSkip.length > -0) && (AttributeSkip.indexOf("|" + key.toUpperCase() + "|") != -1)) {
                continue;
            }
            try {
                var val = elems[key];
            } catch (e) {
                continue;
            }
            if (val === 'undefined') {
                continue;
            }
            if ((val + '').indexOf('[object ') != -1) {
                continue
            }
            if ((key + '').indexOf('jQuery') != -1) {
                continue
            }
            if (((key + '').substring(0, 2)).indexOf('on') != -1) {
                continue
            }
            if ((elems[key] + ' ').indexOf('{ [native code] }') != -1) {
                continue;
            }
            var typeVar = (typeof elems[key]) + '';
            elems.AttributesHtml[key] = {"type": typeVar, "value": val, "isEdit": false};
        }
        elems.AttributesHtml["id"] = {"type": "string", "value": "", "isEdit": false};
    }
    if (elems.EventsHtml == undefined) {
        elems.EventsHtml = {};
        // Список событий
        for (var key in elems) {
            if (((key + '').substring(0, 2)).indexOf('on') == -1) {
                continue;
            }
            if ((elems[key] + ' ').indexOf('{ [native code] }') != -1) {
                continue;
            }
            if ((AttributeSkip.length > -0) && (AttributeSkip.indexOf("|" + key.toUpperCase() + "|") != -1)) {
                continue;
            }
            elems.EventsHtml[key] = {"type": "javascript", "value": "", "isEdit": false};
            ;
        }
    }
    if (elems.StylesHtml == undefined) {
        elems.StylesHtml = {};
        for (var key in elems['style']) {
            try {
                var val = elems['style'][key];
            } catch (e) {
                continue;
            }
            var typeVar = (typeof val) + '';
            if (typeVar == 'function') {
                continue;
            }
            if ((key + '').indexOf('__') != -1) {
                continue;
            }
            if ((elems[key] + ' ').indexOf('{ [native code] }') != -1) {
                continue;
            }
            if ((AttributeSkip.length > -0) && (AttributeSkip.indexOf("|" + key.toUpperCase() + "|") != -1)) {
                continue;
            }
            elems.StylesHtml[key] = {"type": typeVar, "value": val, "isEdit": false};
        }
    }
};

/// Разобратся как рисовать кнопку !!!
// https://tproger.ru/translations/web-components/
/// HTMLElement HTMLParagraphElement
class D3_Input extends HTMLElement {
    value = '';

    constructor() {
        super(); // always call super() first in the constructor.
        var shadow = this.attachShadow({mode: 'open'});
        var wrapper = document.createElement('input');
        shadow.appendChild(wrapper);
        var style = document.createElement('style');
        style.textContent = ' ';
        shadow.appendChild(style);
        InitAttributesComponent(this, '|title|lang|translate|accessKey|draggable|autocapitalize|className|scrollLeft|scrollWidth|scrollHeight|autocapitalize|innerText|innerHTML|scrollLeft|scrollWidth|scrollHeight|');
    }

    //список атрибут элемента для отслеживания изменений
    static get observedAttributes() {
        return ['value'];
    }

    /// Обработка изменений параметра
    attributeChangedCallback(name, oldValue, newValue) {
        var shadow = this.shadowRoot;
        var childNodes = shadow.childNodes;
        for (var i = 0; i < childNodes.length; i++) {
            if (childNodes[i].nodeName === 'INPUT') {
                childNodes[i].value = this.getAttribute('value');
            }
        }
    }
}

customElements.define('d3-input', D3_Input);

/// https://developer.mozilla.org/ru/docs/Web/Web_Components/%D0%98%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5_%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D1%85_%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D0%BE%D0%B2
class D3_Button extends HTMLElement {
    //delete window["hello"];
    img = "";

    constructor() {
        super();
        this.removeAttribute("title");
        var shadow = this.attachShadow({mode: 'open'});
        var wrapper = document.createElement('button');
        wrapper.innerHTML = 'button'
        shadow.appendChild(wrapper);
        var style = document.createElement('style');
        style.textContent = ' ';
        shadow.appendChild(style);
        InitAttributesComponent(this, "|title|lang|translate|accessKey|draggable|autocapitalize|className|scrollLeft|scrollWidth|scrollHeight|");
    }

    static get observedAttributes() {//список атрибут элемента для отслеживания изменений
        return ['img'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log('Атрибуты пользовательского элемента квадрат изменились.');
        console.log(name + ' = ' + newValue + '(' + oldValue + ')');
        var shadow = this.shadowRoot;
        var childNodes = shadow.childNodes;
        for (var i = 0; i < childNodes.length; i++) {
            if (childNodes[i].nodeName === 'STYLE') {
                childNodes[i].textContent = 'div {' + '}'
                // Получить значение атрибута
                // this.getAttribute('img')
            }
        }
    }
};
customElements.define('d3-button', D3_Button);

//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
// Пример создания произвольного  элемента(фрагмент HTML кода)
class D3_Costum extends HTMLElement {
    //delete window["hello"];
    value = "";
    label = "----";

    constructor() {
        super();
        this.removeAttribute("title");
        var shadow = this.attachShadow({mode: 'open'});
        // if ((window.location.search).indexOf('debug=1')!=-1){
        shadow.innerHTML = `<div>
                                     <input value="` + this.label + `">&nbsp;<progress  width="25px" height="25px">progress2</progress>&nbsp;
                                     <div>&nbsp;<div >div3&nbsp;<select >select5</select>&nbsp;&nbsp;<button >button4</button>&nbsp;&nbsp;<select >select6</select>&nbsp;</div>&nbsp;<br>
                                     </div>
                                  `;
        if ((window.location.search).indexOf('debug=1') != -1) { // if ("debug" in urlParams){
            shadow.innerHTML += `<button>DEBUG</button>`;
        }
        shadow.innerHTML += `<div>`;

        var SkypeAttr = "|title|lang|translate|accessKey|draggable|autocapitalize|className|scrollLeft|scrollWidth|scrollHeight|";
        SkypeAttr += "dir|inputMode|offsetParent|innerText|nonce|prefix|classList|slot|spellcheck|assignedSlot|innerHTML|scrollTop|clientTop|clientLeft|clientWidth|clientHeight|nextElementSibling|";
        SkypeAttr += "firstElementChild|lastElementChild|parentNode|parentElement|firstChild|lastChild|previousSibling|previousSibling|textContent|";
        SkypeAttr += "nextSibling|";
        InitAttributesComponent(this, SkypeAttr);
    }

    static get observedAttributes() {//список атрибут элемента для отслеживания изменений
        return ['value'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        /*
        console.log('Атрибуты пользовательского элемента квадрат изменились.');
        console.log(name+' = '+newValue+'('+oldValue+')');
        var shadow = this.shadowRoot;
        var childNodes = shadow.childNodes;
        for(var i = 0; i < childNodes.length; i++) {
           if(childNodes[i].nodeName === 'STYLE') {
              childNodes[i].textContent = 'div {' +'}'
               // Получить значение атрибута
               // this.getAttribute('img')
           }
        }
        */
    }
};
customElements.define('d3-costum', D3_Costum);

isComponentTree = true;
var initComponentArray = function () {
    componentArray = [];
    var htmlElements = {
        "text": "HTML",
        "state": {"opened": false},
        "icon": "img/component/html.png",
        "children": [
            {
                "state": {"selected": true},
                "text": "Button", "ObjectElement": {
                    "TagName": "button", "ContentText": true, "VisualElement": true, "innerHTML": ""
                    , "AttributesSkip": "|accept|scrollWidth|scrollHeight|scrollLeft|title|willValidate|"
                },
                "icon": "img/component/button.png"
            }, {
                "text": "Input", "ObjectElement": {
                    "TagName": "input", "ContentText": false, "VisualElement": true, "innerHTML": ""
                    , "AttributesSkip": "|accept|"
                },
                "icon": "img/component/Input.png"
            }, {
                "text": "Div", "ObjectElement": {
                    "TagName": "div", "ContentText": true, "VisualElement": true, "innerHTML": ""
                    , "AttributesSkip": "|accept|"
                },
                "icon": "img/component/div.png"
            }, {
                "text": "Select", "ObjectElement": {
                    "TagName": "select",
                    "ContentText": true,
                    "VisualElement": true,
                    "innerHTML": "<option>select</option>"
                    ,
                    "AttributesSkip": "|accept|"
                },
                "icon": "img/component/select.png"
            }, {
                "text": "Option", "ObjectElement": {
                    "TagName": "option", "ContentText": true, "VisualElement": false, "innerHTML": ""
                    , "AttributesSkip": "|accept|"
                },
                "icon": "img/component/option.png"
            }, {
                "text": "TextArea", "ObjectElement": {
                    "TagName": "textarea", "ContentText": true, "VisualElement": true, "innerHTML": ""
                    , "AttributesSkip": "|accept|"
                },
                "icon": "img/component/textarea.png"
            }, {
                "text": "CheckBox", "ObjectElement": {
                    "TagName": "input", "ContentText": true, "VisualElement": true, "type": "checkbox", "innerHTML": ""
                    , "AttributesSkip": "|accept|"
                },
                "icon": "img/component/checkbox.png"
            }, {
                "text": "Label", "ObjectElement": {
                    "TagName": "label", "ContentText": true, "VisualElement": true, "innerHTML": ""
                    , "AttributesSkip": "|accept|"
                },
                "icon": "img/component/label.png"
            }, {
                "text": "DataList", "ObjectElement": {
                    "TagName": "datalist", "ContentText": true, "VisualElement": false, "innerHTML": ""
                    , "AttributesSkip": "|accept|"
                },
                "icon": "img/component/datalist.png"
            }, {
                "text": "ProgressBar", "ObjectElement": {
                    "TagName": "progress",
                    "ContentText": false,
                    "VisualElement": true,
                    "innerHTML": "",
                    "width": "25px",
                    "height": "25px"
                    ,
                    "AttributesSkip": "|accept|"
                },
                "icon": "img/component/progressbar.png"
            }, {
                "text": "TrackBar", "ObjectElement": {
                    "TagName": "input",
                    "ContentText": false,
                    "VisualElement": true,
                    "innerHTML": "",
                    "type": "range",
                    "min": "0",
                    "max": "100",
                    "value": "30"
                    ,
                    "AttributesSkip": "|accept|"
                },
                "icon": "img/component/trackbar.png"
            }, {
                "text": "Canvas", "ObjectElement": {
                    "TagName": "canvas", "ContentText": true, "VisualElement": true, "innerHTML": ""
                    , "AttributesSkip": "|accept|"
                },
                "icon": "img/component/canvas.png"
            }, {
                "text": "IFrame", "ObjectElement": {
                    "TagName": "iframe", "ContentText": true, "VisualElement": true, "innerHTML": ""
                    , "AttributesSkip": "|accept|"
                },
                "icon": "img/component/iframe.png"
            }, {
                "text": "Grapic",
                "icon": "img/component/grapoc.png",
                "children": [
                    {
                        "text": "Image", "ObjectElement": {
                            "TagName": "img",
                            "ContentText": false,
                            "VisualElement": true,
                            "innerHTML": "",
                            "width": "25px",
                            "height": "25px"
                            ,
                            "AttributesSkip": "|accept|"
                        },
                        "icon": "img/component/images.png"
                    }
                ]
            }, {
                "text": "Multimedia",
                "icon": "img/component/multimedia.png",
                "children": [
                    {
                        "text": "Audio", "ObjectElement": {
                            "TagName": "audio",
                            "ContentText": true,
                            "VisualElement": true,
                            "innerHTML": "",
                            "controls": false
                            ,
                            "AttributesSkip": "|accept|"
                        },
                        "icon": "img/component/audio.png"
                    }, {
                        "text": "Audio BackGround", "ObjectElement": {
                            "TagName": "audio", "ContentText": true, "VisualElement": true, "innerHTML": ""
                            , "AttributesSkip": "|accept|"
                        },
                        "icon": "img/component/audio.png"
                    }, {
                        "text": "Video", "ObjectElement": {
                            "TagName": "video", "ContentText": true, "VisualElement": true, "innerHTML": ""
                            , "AttributesSkip": "|accept|"
                        },
                        "icon": "img/component/video.png"
                    }, {
                        "text": "Source", "ObjectElement": {
                            "TagName": "source", "ContentText": true, "VisualElement": true, "innerHTML": ""
                            , "AttributesSkip": "|accept|"
                        },
                        "icon": "img/component/source.png"
                    }, {
                        "text": "Track", "ObjectElement": {
                            "TagName": "track", "ContentText": true, "VisualElement": true, "innerHTML": ""
                            , "AttributesSkip": "|accept|"
                        },
                        "icon": "img/component/source.png"
                    }
                ]
            }, {
                "text": "JavaScript",
                "ObjectElement": {
                    "TagName": "script",
                    "ContentText": true,
                    "VisualElement": false,
                    "innerHTML": " ",
                    "language": "JavaScript"
                },
                "icon": "img/component/javascript.png"
            }, {
                "text": "Style", "ObjectElement": {
                    "TagName": "style", "ContentText": true, "VisualElement": false, "innerHTML": " "
                    , "AttributesSkip": "|accept|"
                },
                "icon": "img/component/style.png"
            }, {
                "text": "Link", "ObjectElement": {
                    "TagName": "link", "ContentText": false, "VisualElement": false, "innerHTML": " "
                    , "AttributesSkip": "|accept|"
                },
                "icon": "img/component/link.png"
            }, {
                "text": "Meta", "ObjectElement": {
                    "TagName": "meta", "ContentText": false, "VisualElement": false, "innerHTML": " "
                    , "AttributesSkip": "|accept|"
                },
                "icon": "img/component/meta.png"
            }
        ]
    };

    componentArray.push(htmlElements);


    var CspGroup = {
        "text": "CacheServerPage"
        , "state": {"opened": false}
        , "icon": "img/component/d3.png"
        , "children": [
            {
                "text": "CSP:PARAMETER", "ObjectElement": {
                    "TagName": "CSP:PARAMETER", "ContentText": false, "VisualElement": false, "innerHTML": ""
                   , "AttributesSkip": "|onpointermove|onpointerup|onpointercancel|onpointerover|onpointerout|onpointerenter|onpointerleave|onselectstart|onselectionchange|onbeforecopy|onbeforecut|onbeforepaste|onsearch|onfullscreenchange|onfullscreenerror|onwebkitfullscreenchange|onwebkitfullscreenerror|oncut|oncopy|scrollHeight|scrollWidth|scrollLeft|innerHTML|classList|className|innerText|autocapitalize|draggable|accessKey|hidden|translate|lang|style|id|title|dir|spellcheck|inputMode|offsetParent|nonce|prefix|slot|assignedSlot|scrollTop|clientTop|clientLeft|clientWidth|clientHeight|nextElementSibling|firstElementChild|lastElementChild|parentNode|parentElement|firstChild|lastChild|previousSibling|nextSibling|textContent|"
                   , "AttributesHtml":{"name":"","value":""}
                },
                "icon": "img/component/meta.png"
            },
            {
                "text": "ClassMethod", "ObjectElement": {
                    "TagName": "d3-button", "ContentText": true, "VisualElement": false, "innerHTML": ""
                    , "AttributesSkip": "|title|"
                },
                "icon": "img/component/meta.png"
            }

        ]
    }
    componentArray.push(CspGroup);
    
  /*


    var d3Group = {
        "text": "D3"
        , "state": {"opened": false}
        , "icon": "img/component/d3.png"
        , "children": [
            {
                "text": "d3-input", "ObjectElement": {
                    "TagName": "d3-input", "ContentText": false, "VisualElement": true, "innerHTML": ""
                    , "AttributesSkip": "|title|dir|spellcheck|inputMode|offsetParent|nonce|prefix|slot|assignedSlot|scrollTop|clientTop|clientLeft|clientWidth|clientHeight|nextElementSibling|firstElementChild|lastElementChild|parentNode|parentElement|firstChild|lastChild|previousSibling|nextSibling|textContent|"
                },
                "icon": "img/component/meta.png"
            },
            {
                "text": "d3-button", "ObjectElement": {
                    "TagName": "d3-button", "ContentText": false, "VisualElement": true, "innerHTML": ""
                    , "AttributesSkip": "|title|"
                },
                "icon": "img/component/meta.png"
            }

        ]
    }
    componentArray.push(d3Group);
   */
   return componentArray
}

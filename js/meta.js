function gen () {
// pages
    let  input = document.querySelector('#input');
    let  data = input.value.replace(/\r\n/g,"\n").split("\n");
    let  output = document.querySelector('#output');
    let  newElement = document.createElement("div");

    data.forEach((item) => {
        if (input.value != '') {
                item = item.toLowerCase();
                newElement.appendChild(document.createElement("p")).append(`<meta name="keywords" content="${item}"/>`)
                output.appendChild(newElement)
                newElement.setAttribute('class', 'pages')         
        }
    });
    let child = newElement.childNodes
        child.forEach(function (item, index) {
            item= item.setAttributes({
                "id": "pr" + `${index}`,
                "onClick": "selectAll(this.id)"
            });
        });
    
//learn more
if (input2.value != '') {
    let  input2 = document.querySelector('#input2');
    let  data2 = input2.value.replace(/(\r\n|\n|\r)/gm,", ").split("\n");
    let  output2 = document.querySelector('#output2');
    let  newElement2 = document.createElement("p");
    data2.forEach((item) => {
        item = item.toLowerCase();
        newElement2.append(item)
        output2.appendChild(newElement2);
    });
        
    
    newElement2.prepend('<meta name="keywords" content="');
    newElement2.append('"/>');
    newElement2.setAttributes({
        "id": "learnmore",
        "class": "pages",
        "onClick": "selectAll(this.id)"
    });    
    }
}

// ==================================================
    // case converter
function cnvrt () {
    let inputKey = document.querySelector('#key');
    let keyArr = key.value.replace(/\r\n/g,"\n").split("\n");
    // console.log(keyArr);
    let outputKey = document.querySelector('#outputKey');
    let = newElem = document.createElement("p");
    let caseSelect = document.querySelector('#optn').value
    
    if (caseSelect == "lwrCase") {
        keyArr.forEach((str) => {
            str= str.toLowerCase();
            newElem.append(`${str} `);
            outputKey.appendChild(newElem);
            newElem.appendChild(document.createElement("br"))
            newElem.setAttribute('class', 'phrse')
            
        });

    } else if (caseSelect == "uprCase") {
        keyArr.forEach((str) => {
            str= str.toUpperCase();
            newElem.append(`${str} `);
            outputKey.appendChild(newElem);
            newElem.appendChild(document.createElement("br"))
            newElem.setAttribute('class', 'phrse')
        });
    } else if (caseSelect == "tleCase") {
            keyArr.forEach((str) => {
               let words = str = str.toLowerCase().split(" ");
                for (let i = 0; i < words.length; i++) {
                    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
                }
                
                newElem.append(words.join(" "));
                outputKey.appendChild(newElem);
                newElem.appendChild(document.createElement("br"))
                newElem.setAttribute('class', 'phrse')
                
            });
    }
}
// ====================================
     // clear button
function clearItem () {
            let toRemov = document.querySelector('.pages')
            toRemov.parentNode.removeChild(toRemov);
}
function clearItem2 () {
    let toRemov = document.querySelector('.phrse')
    toRemov.parentNode.removeChild(toRemov);
}
   //=====================================
     // select all text on click
        function selectAll(id){
            let sel, range;
            let el = document.getElementById(id); //get element id
            if (window.getSelection && document.createRange) { //Browser compatibility
              sel = window.getSelection();
              if(sel.toString() == ''){ //no text selection
                 window.setTimeout(function(){
                    range = document.createRange(); //range object
                    range.selectNodeContents(el); //sets Range
                    sel.removeAllRanges(); //remove all ranges from selection
                    sel.addRange(range);//add Range to a Selection.
                },1);
              }
            }else if (document.selection) { //older ie
                sel = document.selection.createRange();
                if(sel.text == ''){ //no text selection
                    range = document.body.createTextRange();//Creates TextRange object
                    range.moveToElementText(el);//sets Range
                    range.select(); //make selection.
                }
            }
        }
//==========================================
    // Element prototype
        Element.prototype.setAttributes = function (attrs) {
            for (var idx in attrs) {
                if ((idx === 'styles' || idx === 'style') && typeof attrs[idx] === 'object') {
                    for (var prop in attrs[idx]){this.style[prop] = attrs[idx][prop];}
                } else if (idx === 'html') {
                    this.innerHTML = attrs[idx];
                } else {
                    this.setAttribute(idx, attrs[idx]);
                }
            }
        };
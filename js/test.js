function gen () {
    let  input = document.querySelector('#input');
    let  data = input.value.replace(/\r\n/g,"\n").split("\n")
    let  output = document.querySelector('#output');
    let  newElement = document.createElement("p");

    let  input2 = document.querySelector('#input2');
    let  data2 = input2.value.replace(/\r\n/g,"\n").split("\n")
    let  output2 = document.querySelector('#output2');
    let  newElement2 = document.createElement("p");
    
// pages
    data.forEach((item) => {
        if (input.value != '') {
                item = item.toLowerCase();
                newElement.append(`<meta name="keyword" content="${item}"/>`);
                output.appendChild(newElement)
                newElement.appendChild(document.createElement("br"))
                newElement.setAttribute('class', 'phrse2')
        }
    });

//learn more
    data2.forEach((item2) => {
        if (input2.value != '') {
            item2 = item2.toLowerCase();
            newElement2.append(` ${item2}, `);
            output2.appendChild(newElement2);
            
        }
        
    });

    newElement2.prepend('<meta name="keyword" content="');
    newElement2.append(' "/>');
    newElement2.setAttribute('class', 'phrse2')

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
            newElem.setAttribute('id', 'phrse')
        });

    } else if (caseSelect == "uprCase") {
        keyArr.forEach((str) => {
            str= str.toUpperCase();
            newElem.append(`${str} `);
            outputKey.appendChild(newElem);
            newElem.appendChild(document.createElement("br"))
            newElem.setAttribute('id', 'phrse')
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
                newElem.setAttribute('id', 'phrse')
            });
    }


}
function clearItem () {
            let toRemov = document.querySelector('#phrse')
            toRemov.parentNode.removeChild(toRemov);
}
function clearItem2 () {
    let toRemov = document.querySelector('.phrse2')
    toRemov.parentNode.removeChild(toRemov);
}


// function titlCase(str){
//     str = str.toLowerCase().split(' ');
//     let final = [ ];
//         for(let  word of str){
//         final.push(word.charAt(0).toUpperCase()+ word.slice(1));
//         }
//     return final.join(' ')
//     }
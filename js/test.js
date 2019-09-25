function gen () {
    let  input = document.querySelector('#input');
    let  input2 = document.querySelector('#input2');
    let data = input.value.replace(/\r\n/g,"\n").split("\n")
    let data2 = input2.value.replace(/\r\n/g,"\n").split("\n")
    
    let  output = document.querySelector('#output');
    let  output2 = document.querySelector('#output2');
    let newElement = document.createElement("p");
    let newElement2 = document.createElement("p");
    
    data.forEach((item) => {
        if (input.value != '') {
                item = item.toLowerCase();
                newElement.append(`<meta name="keyword" content="${item}"/>`);
                output.appendChild(newElement)
                newElement.appendChild(document.createElement("br"))
        }
        if (input2.value != '') {
            
            newElement2.append(`<meta name="keyword" content=" ${j},  \n "/>`);
            output2.appendChild(newElement2)
        }
    });

}

// select all text on click
// data2.forEach((item2) => {
//     if (input2.value != '') {
//         item2 = item2.toLowerCase();
//         newElement2.append(`<meta name="keyword" content="${item2},"/>`);
//         output2.appendChild(newElement2)
//         // newElement2.appendChild(document.createElement("br"))
//     }

// });

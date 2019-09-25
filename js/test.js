function gen () {
    let  input = document.querySelector('#input');
    let data = input.value.replace(/\r\n/g,"\n").split("\n")
    let  output = document.querySelector('#output');
    let newElement = document.createElement("p");

    let  input2 = document.querySelector('#input2');
    let data2 = input2.value.replace(/\r\n/g,"\n").split("\n")
    let  output2 = document.querySelector('#output2');
    let newElement2 = document.createElement("p");
    
// pages
    data.forEach((item) => {
        if (input.value != '') {
                item = item.toLowerCase();
                newElement.append(`<meta name="keyword" content="${item}"/>`);
                output.appendChild(newElement)
                newElement.appendChild(document.createElement("br"))
        }
    });

//learn more
    data2.forEach((item2) => {
        if (input2.value != '') {
            newElement2.append(` ${item2}, `);
        }
        output2.appendChild(newElement2)
    });

    newElement2.prepend('<meta name="keyword" content="');
    newElement2.append('/>')

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

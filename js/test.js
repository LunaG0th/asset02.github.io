function gen () {
    let  input = document.querySelector('#input');
    let  output = document.querySelector('#output');
    let data = input.value.replace(/\r\n/g,"\n").split("\n")
    let newElement = document.createElement("p");
    
    
    data.forEach((item) => {
        newElement.append(`<meta ${item} /> \n`);
        output.appendChild(newElement)
        newElement.appendChild(document.createElement("br"))
    });
    // console.log(data)

    }


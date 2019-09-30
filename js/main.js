function gen () {
    let kw01 = document.querySelector('#kw01').value;
    let kw02 = document.querySelector('#kw02').value;
    let kw03 = document.querySelector('#kw03').value;
    let kw04 = document.querySelector('#kw04').value;
    let kw05 = document.querySelector('#kw05').value;
    let kw06 = document.querySelector('#kw06').value;
    let kw07 = document.querySelector('#kw07').value;
    let kw08 = document.querySelector('#kw08').value;
    let kw09 = document.querySelector('#kw09').value;
    let kw10 = document.querySelector('#kw10').value;

    let kw11 = document.querySelector('#kw11').value;
    let kw12 = document.querySelector('#kw12').value;
    let kw13 = document.querySelector('#kw13').value;
    let kw14 = document.querySelector('#kw14').value;
    let kw15 = document.querySelector('#kw15').value;
    let kw16 = document.querySelector('#kw16').value;
    let kw17 = document.querySelector('#kw17').value;
    let kw18 = document.querySelector('#kw18').value;
    let kw19 = document.querySelector('#kw19').value;
    let kw20 = document.querySelector('#kw20').value;

    let kw21 = document.querySelector('#kw21').value;
    let kw22 = document.querySelector('#kw22').value;
    let kw23 = document.querySelector('#kw23').value;
    let kw24 = document.querySelector('#kw24').value;
    let kw25 = document.querySelector('#kw25').value;
    let kw26 = document.querySelector('#kw26').value;
    let kw27 = document.querySelector('#kw27').value;
    let kw28 = document.querySelector('#kw28').value;
    let kw29 = document.querySelector('#kw29').value;
    let kw30 = document.querySelector('#kw30').value;

    let cty = document.querySelector('#cty').value;
    let ste = document.querySelector('#ste').value;
    let bsn = document.querySelector('#bsn').value;
    let fnme = document.querySelector('#fnme').value;
    let emal = document.querySelector('#emal').value;
    let phn = document.querySelector('#phn').value;
    let wbste = document.querySelector('#wbste').value;
    

    let run = true;
        if (run == true) {
            function titleCase(str){
                str = str.toLowerCase().split(' ');
                let final = [ ];
                    for(let  word of str){
                    final.push(word.charAt(0).toUpperCase()+ word.slice(1));
                    }
                return final.join(' ')
                } // to sentence case each word

                let str = bsn
                let emal2 = emal.toLowerCase()
                let wbste2 = wbste.toLowerCase()
                let ste2 = ste.toUpperCase()
                let hypen = str.toLowerCase().trim().split(/\s+/).join('-'); // add hypen between each word

                function link (str) {
                    let lin = str.toLowerCase().trim().split(/\s+/).join('-');
                    return lin
                }
                function keyw (str2) {
                    let key = str2.toLowerCase().trim().split(/\s+/).join('-');
                    return key
                }
                
                // Output
                document.querySelector('#k1').innerHTML = titleCase(`${kw01} | ${cty} `) + `${ste2} | ${titleCase(bsn)}`
                document.querySelector('#k2').innerHTML = titleCase(`${kw02} | ${cty} `) + `${ste2} | ${titleCase(bsn)}`
                document.querySelector('#k3').innerHTML = titleCase(`${kw03} | ${cty} `) + `${ste2} | ${titleCase(bsn)}`
                document.querySelector('#k4').innerHTML = titleCase(`${kw04} | ${cty} `) + `${ste2} | ${titleCase(bsn)}`
                document.querySelector('#k5').innerHTML = titleCase(`${kw05} | ${cty} `) + `${ste2} | ${titleCase(bsn)}`
                document.querySelector('#k6').innerHTML = titleCase(`${kw06} | ${cty} `) + `${ste2} | ${titleCase(bsn)}`
                document.querySelector('#k7').innerHTML = titleCase(`${kw07} | ${cty} `) + `${ste2} | ${titleCase(bsn)}`
                document.querySelector('#k8').innerHTML = titleCase(`${kw08} | ${cty} `) + `${ste2} | ${titleCase(bsn)}`
                document.querySelector('#k9').innerHTML = titleCase(`${kw09} | ${cty} `) + `${ste2} | ${titleCase(bsn)}`
                document.querySelector('#k10').innerHTML = titleCase(`${kw10} | ${cty} `) + `${ste2} | ${titleCase(bsn)}`

                document.querySelector('#k11').innerHTML = titleCase(`${kw11} | ${cty} `) + `${ste2} | ${titleCase(bsn)}`
                document.querySelector('#k12').innerHTML = titleCase(`${kw12} | ${cty} `) + `${ste2} | ${titleCase(bsn)}`
                document.querySelector('#k13').innerHTML = titleCase(`${kw13} | ${cty} `) + `${ste2} | ${titleCase(bsn)}`
                document.querySelector('#k14').innerHTML = titleCase(`${kw14} | ${cty} `) + `${ste2} | ${titleCase(bsn)}`
                document.querySelector('#k15').innerHTML = titleCase(`${kw15} | ${cty} `) + `${ste2} | ${titleCase(bsn)}`
                document.querySelector('#k16').innerHTML = titleCase(`${kw16} | ${cty} `) + `${ste2} | ${titleCase(bsn)}`
                document.querySelector('#k17').innerHTML = titleCase(`${kw17} | ${cty} `) + `${ste2} | ${titleCase(bsn)}`
                document.querySelector('#k18').innerHTML = titleCase(`${kw18} | ${cty} `) + `${ste2} | ${titleCase(bsn)}`
                document.querySelector('#k19').innerHTML = titleCase(`${kw19} | ${cty} `) + `${ste2} | ${titleCase(bsn)}`
                document.querySelector('#k20').innerHTML = titleCase(`${kw20} | ${cty} `) + `${ste2} | ${titleCase(bsn)}`

                document.querySelector('#k21').innerHTML = titleCase(`${kw21} | ${cty} `) + `${ste2} | ${titleCase(bsn)}`
                document.querySelector('#k22').innerHTML = titleCase(`${kw22} | ${cty} `) + `${ste2} | ${titleCase(bsn)}`
                document.querySelector('#k23').innerHTML = titleCase(`${kw23} | ${cty} `) + `${ste2} | ${titleCase(bsn)}`
                document.querySelector('#k24').innerHTML = titleCase(`${kw24} | ${cty} `) + `${ste2} | ${titleCase(bsn)}`
                document.querySelector('#k25').innerHTML = titleCase(`${kw25} | ${cty} `) + `${ste2} | ${titleCase(bsn)}`
                document.querySelector('#k26').innerHTML = titleCase(`${kw26} | ${cty} `) + `${ste2} | ${titleCase(bsn)}`
                document.querySelector('#k27').innerHTML = titleCase(`${kw27} | ${cty} `) + `${ste2} | ${titleCase(bsn)}`
                document.querySelector('#k28').innerHTML = titleCase(`${kw28} | ${cty} `) + `${ste2} | ${titleCase(bsn)}`
                document.querySelector('#k29').innerHTML = titleCase(`${kw29} | ${cty} `) + `${ste2} | ${titleCase(bsn)}`
                document.querySelector('#k30').innerHTML = titleCase(`${kw30} | ${cty} `) + `${ste2} | ${titleCase(bsn)}`
    //====================================================================================================================

                document.querySelector('#k1d').innerHTML = titleCase(`${kw01} in ${cty}, `) + `${ste2}.`
                document.querySelector('#k2d').innerHTML = titleCase(`${kw02} in ${cty}, `) + `${ste2}.`
                document.querySelector('#k3d').innerHTML = titleCase(`${kw03} in ${cty}, `) + `${ste2}.`
                document.querySelector('#k4d').innerHTML = titleCase(`${kw04} in ${cty}, `) + `${ste2}.`
                document.querySelector('#k5d').innerHTML = titleCase(`${kw05} in ${cty}, `) + `${ste2}.`
                document.querySelector('#k6d').innerHTML = titleCase(`${kw06} in ${cty}, `) + `${ste2}.`
                document.querySelector('#k7d').innerHTML = titleCase(`${kw07} in ${cty}, `) + `${ste2}.`
                document.querySelector('#k8d').innerHTML = titleCase(`${kw08} in ${cty}, `) + `${ste2}.`
                document.querySelector('#k9d').innerHTML = titleCase(`${kw09} in ${cty}, `) + `${ste2}.`
                document.querySelector('#k10d').innerHTML = titleCase(`${kw10} in ${cty}, `) + `${ste2}.`

                document.querySelector('#k11d').innerHTML = titleCase(`${kw11} in ${cty}, `) + `${ste2}.`
                document.querySelector('#k12d').innerHTML = titleCase(`${kw12} in ${cty}, `) + `${ste2}.`
                document.querySelector('#k13d').innerHTML = titleCase(`${kw13} in ${cty}, `) + `${ste2}.`
                document.querySelector('#k14d').innerHTML = titleCase(`${kw14} in ${cty}, `) + `${ste2}.`
                document.querySelector('#k15d').innerHTML = titleCase(`${kw15} in ${cty}, `) + `${ste2}.`
                document.querySelector('#k16d').innerHTML = titleCase(`${kw16} in ${cty}, `) + `${ste2}.`
                document.querySelector('#k17d').innerHTML = titleCase(`${kw17} in ${cty}, `) + `${ste2}.`
                document.querySelector('#k18d').innerHTML = titleCase(`${kw18} in ${cty}, `) + `${ste2}.`
                document.querySelector('#k19d').innerHTML = titleCase(`${kw19} in ${cty}, `) + `${ste2}.`
                document.querySelector('#k20d').innerHTML = titleCase(`${kw20} in ${cty}, `) + `${ste2}.`

                document.querySelector('#k21d').innerHTML = titleCase(`${kw21} in ${cty}, `) + `${ste2}.`
                document.querySelector('#k22d').innerHTML = titleCase(`${kw22} in ${cty}, `) + `${ste2}.`
                document.querySelector('#k23d').innerHTML = titleCase(`${kw23} in ${cty}, `) + `${ste2}.`
                document.querySelector('#k24d').innerHTML = titleCase(`${kw24} in ${cty}, `) + `${ste2}.`
                document.querySelector('#k25d').innerHTML = titleCase(`${kw25} in ${cty}, `) + `${ste2}.`
                document.querySelector('#k26d').innerHTML = titleCase(`${kw26} in ${cty}, `) + `${ste2}.`
                document.querySelector('#k27d').innerHTML = titleCase(`${kw27} in ${cty}, `) + `${ste2}.`
                document.querySelector('#k28d').innerHTML = titleCase(`${kw28} in ${cty}, `) + `${ste2}.`
                document.querySelector('#k29d').innerHTML = titleCase(`${kw29} in ${cty}, `) + `${ste2}.`
                document.querySelector('#k30d').innerHTML = titleCase(`${kw30} in ${cty}, `) + `${ste2}.`
//==================================================================================================================

                document.querySelector('#bsn1').innerHTML = `${keyw (kw01)}` + link(`-${cty}-${ste2}`)
                document.querySelector('#bsn2').innerHTML = `${keyw (kw02)}` + link(`-${cty}-${ste2}`)
                document.querySelector('#bsn3').innerHTML = `${keyw (kw03)}` + link(`-${cty}-${ste2}`)
                document.querySelector('#bsn4').innerHTML = `${keyw (kw04)}` + link(`-${cty}-${ste2}`)
                document.querySelector('#bsn5').innerHTML = `${keyw (kw05)}` + link(`-${cty}-${ste2}`)
                document.querySelector('#bsn6').innerHTML = `${keyw (kw06)}` + link(`-${cty}-${ste2}`)
                document.querySelector('#bsn7').innerHTML = `${keyw (kw07)}` + link(`-${cty}-${ste2}`)
                document.querySelector('#bsn8').innerHTML = `${keyw (kw08)}` + link(`-${cty}-${ste2}`)
                document.querySelector('#bsn9').innerHTML = `${keyw (kw09)}` + link(`-${cty}-${ste2}`)
                document.querySelector('#bsn10').innerHTML = `${keyw (kw10)}` + link(`-${cty}-${ste2}`)

                document.querySelector('#bsn11').innerHTML = `${keyw (kw11)}` + link(`-${cty}-${ste2}`)
                document.querySelector('#bsn12').innerHTML = `${keyw (kw12)}` + link(`-${cty}-${ste2}`)
                document.querySelector('#bsn13').innerHTML = `${keyw (kw13)}` + link(`-${cty}-${ste2}`)
                document.querySelector('#bsn14').innerHTML = `${keyw (kw14)}` + link(`-${cty}-${ste2}`)
                document.querySelector('#bsn15').innerHTML = `${keyw (kw15)}` + link(`-${cty}-${ste2}`)
                document.querySelector('#bsn16').innerHTML = `${keyw (kw16)}` + link(`-${cty}-${ste2}`)
                document.querySelector('#bsn17').innerHTML = `${keyw (kw17)}` + link(`-${cty}-${ste2}`)
                document.querySelector('#bsn18').innerHTML = `${keyw (kw18)}` + link(`-${cty}-${ste2}`)
                document.querySelector('#bsn19').innerHTML = `${keyw (kw19)}` + link(`-${cty}-${ste2}`)
                document.querySelector('#bsn20').innerHTML = `${keyw (kw20)}` + link(`-${cty}-${ste2}`)
                
                document.querySelector('#bsn21').innerHTML = `${keyw (kw21)}` + link(`-${cty}-${ste2}`)
                document.querySelector('#bsn22').innerHTML = `${keyw (kw22)}` + link(`-${cty}-${ste2}`)
                document.querySelector('#bsn23').innerHTML = `${keyw (kw23)}` + link(`-${cty}-${ste2}`)
                document.querySelector('#bsn24').innerHTML = `${keyw (kw24)}` + link(`-${cty}-${ste2}`)
                document.querySelector('#bsn25').innerHTML = `${keyw (kw25)}` + link(`-${cty}-${ste2}`)
                document.querySelector('#bsn26').innerHTML = `${keyw (kw26)}` + link(`-${cty}-${ste2}`)
                document.querySelector('#bsn27').innerHTML = `${keyw (kw27)}` + link(`-${cty}-${ste2}`)
                document.querySelector('#bsn28').innerHTML = `${keyw (kw28)}` + link(`-${cty}-${ste2}`)
                document.querySelector('#bsn29').innerHTML = `${keyw (kw29)}` + link(`-${cty}-${ste2}`)
                document.querySelector('#bsn30').innerHTML = `${keyw (kw30)}` + link(`-${cty}-${ste2}`)

                // other Info
                document.querySelector('#name').innerHTML = titleCase(`${fnme}`)
                document.querySelector('#email').innerHTML = `${emal2}`
                document.querySelector('#phone').innerHTML = `${phn}`
                document.querySelector('#site').innerHTML = `${wbste2}`


            }
        }
    //=====================================
        // select all text on click
        function selectText(id){
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
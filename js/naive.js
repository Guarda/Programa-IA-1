var cantidadx = 0
var cantidady = 0
let arrayofvalues = []
let xsum = []
var ysum1 = 0
var ysum0 = 0
let objetos = []
var obj = {}

function myFunction() {
    var cantidadx = document.getElementById('inputx1').value;
    var cantidady = document.getElementById('inputy1').value;

    if (!!cantidadx && !!cantidady) {
        alert("Se creará una matriz [" + cantidadx + "," + cantidady + "]");

    } else {
        alert("no ha ingresado ninguna cantidad")
    }

    var numquestions = document.getElementById("inputy1").value;
    var numofquestions = parseInt(numquestions)

    var questionAnswerHTML = "";
    for (var i = 0; i <= numofquestions; i++) {
        if (i < numofquestions - 1) {
            questionAnswerHTML += `
          <label for="question${i}">
             F: ${i + 1}
          </label>
          <br />
          <input type="text" 
                 id="question${i}"
                 name="valor"
                 placeholder="Valores de F${i + 1} acá." />

         <br /><br />
            `;
        } else if (i == numofquestions - 1) {
            questionAnswerHTML += `
          <label for="question${i}">
             Y: 
          </label>
          <br />
          <input type="text" 
                 id="question${i}"
                 name="valor"
                 placeholder="Valores de Y acá." />

         <br /><br />
            `;
        }
    }
    var x = document.getElementById("divVis");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    document.getElementById("question-paper").innerHTML = questionAnswerHTML;
    const body = document.getElementById("idbody");
    tbl = document.createElement('table');
    tbl.setAttribute('id', 'tablet');
    tbl.style.width = '100px';
    tbl.style.border = '1px solid black';
    for (let i = 0; i <= cantidadx; i++) {
        const tr = tbl.insertRow();
        for (let j = 0; j < cantidady; j++) {
            if (i == 0) {
                if (j == cantidady - 1) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(`Y`));
                    td.style.border = '1px solid black';
                } else {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(`F${j + 1}`));
                    td.style.border = '1px solid black';
                }
            } else {
                const td = tr.insertCell();
                td.appendChild(document.createTextNode(`Cell I${i - 1}/J${j}`));
                td.style.border = '1px solid black';
            }
        }
    }
    body.appendChild(tbl);
};

function rellenarValores() {

    var inputs = document.getElementsByName("valor")

    var cantidadx = document.getElementById('inputx1').value;
    var cantidady = document.getElementById('inputy1').value;

    for (i = 0; i < inputs.length; i++) {
        arrayofvalues[i] = new Array(cantidadx)
        var t = ""
        t = String(inputs[i].value)
        //arrayofvalues[i] = new Array(cantidadx)
        arrayofvalues[i] = String(t).match(/[0-9]+/g);
    }

    const body1 = document.getElementById("idbody1")
    tbl1 = document.createElement('table');
    tbl1.style.width = '100px';
    tbl1.style.border = '1px solid black';

    for (let i = 0; i <= cantidadx; i++) {
        const tr1 = tbl1.insertRow();
        for (let j = 0; j < cantidady; j++) {
            if (i == 0) {
                if (j == cantidady - 1) {
                    const td1 = tr1.insertCell();
                    td1.appendChild(document.createTextNode(`Y`));
                    td1.style.border = '1px solid black';
                } else {
                    const td1 = tr1.insertCell();
                    td1.appendChild(document.createTextNode(`F${j + 1}`));
                    td1.style.border = '1px solid black';
                }
            } else {
                const td1 = tr1.insertCell();
                td1.appendChild(document.createTextNode(`${arrayofvalues[j][i - 1]}`));
                td1.style.border = '1px solid black';
            }
        }
    }
    body1.appendChild(tbl1);
    proporciones(arrayofvalues)
}

function proporciones(arr) {
    var x = document.getElementById("divcal");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    var cantidadx = document.getElementById('inputx1').value;
    var cantidady = document.getElementById('inputy1').value;
    for (i = 0; i < cantidadx; i++) {
        //console.log(arr[cantidady-1][i])
        if (arr[cantidady - 1][i] == 1) {
            ysum1 += 1
        }
        if (arr[cantidady - 1][i] == 0) {
            ysum0 += 1
        }
    }



    for (i = 0; i < cantidady; i++) {
        xsum[i] = new Array(4)
        xsum[i][0] = 0
        xsum[i][1] = 0
        xsum[i][2] = 0
        xsum[i][3] = 0
        for (j = 0; j < cantidadx; j++) {
            //console.log(""+arr[j][i]+"=?"+ arr[cantidady - 1][i])

            if (arr[cantidady - 1][j] == 1) {
                if (arr[i][j] == 1) {
                    xsum[i][0] = xsum[i][0] + 1
                } else {
                    xsum[i][1] = xsum[i][1] + 1
                }
            } else if (arr[cantidady - 1][j] == 0) {
                if (arr[i][j] == 1) {
                    xsum[i][2] = xsum[i][2] + 1
                } else {
                    xsum[i][3] = xsum[i][3] + 1
                }
            }
            // if (arr[j][i] == 1 && arr[cantidady - 1][i] == 1) {
            //     xsum[i][0] = xsum[i][0] + 1                
            // }
            // if (arr[j][i] == 1 && arr[cantidady - 1][i] == 0) {
            //     xsum[i][1] = xsum[i][1] + 1                
            // }
            // if (arr[j][i] == 0 && arr[cantidady - 1][i] == 1) {
            //     xsum[i][2] = xsum[i][2] + 1                
            // }
            // if (arr[j][i] == 0 && arr[cantidady - 1][i] == 0) {
            //     xsum[i][3] = xsum[i][3] + 1                
            // }

        }
    }
    var numquestions = document.getElementById("inputy1").value;
    var numofquestions = parseInt(numquestions)

    var questionAnswerHTML = "";
    for (var i = 0; i < numofquestions; i++) {
        if (i < numofquestions - 1) {
            questionAnswerHTML += `
          <label for="question${i}">
             F: ${i + 1}
          </label>
          <br />         
          <span id="question${i}" name="valor" class="transpuesta">F${i + 1}(1,1)= ${xsum[i][0]}/${ysum1}</span>
          <span id="question${i}" name="valor" class="transpuesta">F${i + 1}(1,0)= ${xsum[i][1]}/${ysum0}</span>
          <span id="question${i}" name="valor" class="transpuesta">F${i + 1}(0,1)= ${xsum[i][2]}/${ysum1}</span>
          <span id="question${i}" name="valor" class="transpuesta">F${i + 1}(0,0)= ${xsum[i][3]}/${ysum0}</span>

         <br /><br />
            `;
        }
    }
    document.getElementById("question-paper1").innerHTML = questionAnswerHTML;
    ysum0 = ysum0 + 2
    ysum1 = ysum1 + 2
}

function correccion() {

    var numquestions = document.getElementById("inputy1").value;
    var numofquestions = parseInt(numquestions)

    var questionAnswerHTML = "";
    for (var i = 0; i < numofquestions; i++) {
        if (i < numofquestions - 1) {
            questionAnswerHTML += `
          <label for="question${i}">
             F: ${i + 1}
          </label>
          <br />         
          <span id="question${i}" name="valor" style="color:blue" class="transpuesta">F${i + 1}(1,1)= ${xsum[i][0] + 1}/${ysum1}</span>
          <span id="question${i}" name="valor" style="color:blue" class="transpuesta">F${i + 1}(1,0)= ${xsum[i][1] + 1}/${ysum0}</span>
          <span id="question${i}" name="valor" style="color:blue" class="transpuesta">F${i + 1}(0,1)= ${xsum[i][2] + 1}/${ysum1}</span>
          <span id="question${i}" name="valor" style="color:blue" class="transpuesta">F${i + 1}(0,0)= ${xsum[i][3] + 1}/${ysum0}</span>

         <br /><br />
            `;
            xsum[i][0] = xsum[i][0] + 1
            xsum[i][0] = (xsum[i][0] / ysum1)

            xsum[i][1] = xsum[i][1] + 1
            xsum[i][1] = (xsum[i][1] / ysum0)

            xsum[i][2] = xsum[i][2] + 1
            xsum[i][2] = (xsum[i][2] / ysum1)

            xsum[i][3] = xsum[i][3] + 1
            xsum[i][3] = (xsum[i][3] / ysum0)

            k = i + 1
            obj['F' + k + '(1,1)'] = (xsum[i][0])
            obj['F' + k + '(1,0)'] = (xsum[i][1])
            obj['F' + k + '(0,1)'] = (xsum[i][2])
            obj['F' + k + '(0,0)'] = (xsum[i][3])


        }
    }
    document.getElementById("question-paper2").innerHTML = questionAnswerHTML;
}

function nuevo() {

    var x = document.getElementById("divcaso");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }


}

function ingresar() {
    var cantidady = document.getElementById('inputy1').value;
    var texto = document.getElementById('nuevocaso').value;
    arrayx = texto.match(/[0-9]+/g);
    console.log(obj['F1(' + arrayx[0] + ',1)'])
    d1 = ysum0 + 2
    d2 = ysum1 + 2
    respuesta1 = 1
    respuesta2 = 1
    for (i = 0; i < cantidady - 1; i++) {
        k = i + 1
        t1 = ""
        t2 = ""
        t1 = obj['F' + k + '(' + arrayx[i] + ',1)']
        t2 = obj['F' + k + '(' + arrayx[i] + ',0)']
        console.log('F' + k + '(' + arrayx[i] + ',1)' + "," + 'F' + k + '(' + arrayx[i] + ',0)')
        console.log(respuesta1 * (t1).toFixed(2))
        respuesta1 = (respuesta1 * (t1).toFixed(2))
        respuesta2 = (respuesta1 * (t2).toFixed(2))
    }
    console.log("R1=" + respuesta1)
    console.log("R2=" + respuesta2)

    var numquestions = document.getElementById("inputy1").value;
    var numofquestions = parseInt(numquestions)

    var questionAnswerHTML = "";
    
    questionAnswerHTML += `
    <label for="question${i}">
         S(1) Aplicando correccion:
          </label>
          <br />       
          <span id="question${i}" name="valor" style="color:blue" class="transpuesta">RS(${respuesta1})</span>
         <br />
         S(0)  Aplicando correccion:
         </label>
         <br />         
         <span id="question${i}" name="valor" style="color:blue" class="transpuesta">RS(${respuesta2})</span>
         <br />  
            `;
            
        
    
    document.getElementById("question-paper3").innerHTML = questionAnswerHTML;
}

// function createNewElement() {
//     // var testname = document.getElementById("testnameID").value;
//     var numquestions = document.getElementById("numID").value;
//     var numofquestions = parseInt(numquestions)

//     var questionAnswerHTML = "";
//     for (var i = 0; i <= numofquestions; i++) {
//         if (i < numofquestions - 1) {
//             questionAnswerHTML += `
//           <label for="question${i}">
//              F: ${i + 1}
//           </label>
//           <br />
//           <input type="text"
//                  id="question${i}"
//                  placeholder="Valores de F ${i + 1} Here." />

//          <br /><br />
//             `;
//         }else if(i == numofquestions - 1){
//             questionAnswerHTML += `
//           <label for="question${i}">
//              Y:
//           </label>
//           <br />
//           <input type="text"
//                  id="question${i}"
//                  placeholder="Valores de Y Here." />

//          <br /><br />
//             `;
//         }
//     }
//     document.getElementById("question-paper").innerHTML = questionAnswerHTML;
// };
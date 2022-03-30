var clicked = false
let arrayx = []
let arrayy = []

function myFunction() {
    var cantidad = document.getElementById('input1').value;
    if (!!cantidad) {
        alert("La cantidad de valores que ingresará es: " + cantidad);

    } else {
        alert("no ha ingresado ninguna cantidad")
    }
};

function registrarValores() {
    var xtext = document.getElementById('inputx1').value;
    var ytext = document.getElementById('inputy1').value;

    textX = '['
    textY = '['

    /*valores de X*/

    arrayx = xtext.match(/[0-9]+/g);
    for (key in arrayx) {
        textX = textX + toString(arrayx[key]) + ","
        // body of for...in
    }
    textX = textX + "]"

    document.getElementById('Tablax').innerHTML = "[" + arrayx + "]";

    /*valores de Y */

    arrayy = ytext.match(/[0-9]+/g);
    for (key in arrayy) {
        textY = textY + toString(arrayy[key]) + ","
        // body of for...in
    }
    textY = textY + "]"

    document.getElementById('Tablay').innerHTML = "[" + arrayy + "]";
};

function calcular() {
    /*Tabla X1*/
    document.getElementById('TablaxT1').innerHTML = arrayx;

    var X0 = ""
    var X1 = "["
    let X = []
    let XT = []
    for (var i = 0; i < arrayx.length; i++) {
        X[i] = new Array(1);
        X[i][1] = arrayx[i]
        X[i][0] = 1
        if (i < arrayx.length - 1) {
            X0 = X0 + X[i][0] + ","
        } else {
            X0 = X0 + X[i][0]
        }

        /*console.log(X0)*/
        /* console.log("(" + X[i][0] + X[i][1] + ")") */
    }
    document.getElementById('TablaxT0').innerHTML = X0;

    /*Tabla X1 Transpuesta */
    document.getElementById('TablaxTr1').innerHTML = "[" + arrayx + "]";

    for (var i = 0; i < 2; i++) {
        XT[i] = new Array(arrayx.length);
        for (var j = 0; j < arrayx.length; j++) {
            if (i == 0) {
                XT[i][j] = X[j][i]
            } else if (i == 1) {
                XT[i][j] = X[j][i]
            }
        }
    }

    for (var i = 0; i < arrayx.length; i++) {
        if (i < arrayx.length - 1) {
            X1 = X1 + XT[0][i] + ","
        } else {
            X1 = X1 + XT[0][i] + "]"
        }
    }
    document.getElementById('TablaxTr0').innerHTML = X1;

    matriz2x2(X, XT)
}

function matriz2x2(T1, T2) {
    var Tsum = 0
    var texto = ""
    let V = []
    for (i=0;i<2;i++){
        V[i] = new Array(2);
    }
    for (var i = 0; i < arrayx.length; i++) {
        if (i < arrayx.length - 1) {
            texto = texto + T1[i][0] + "*" + T2[0][i] + "+"
            Tsum = Tsum + (T1[i][0] * T2[0][i])
        } else {
            texto = texto + T1[i][0] + "*" + T2[0][i] + "="
            Tsum = Tsum + (T1[i][0] * T2[0][i])
        }
    }
    document.getElementById('TablaxTX0').innerHTML = texto + Tsum;
    V[0][0] = Tsum
    Tsum = 0
    texto = ""

    for (var i = 0; i < arrayx.length; i++) {
        if (i < arrayx.length - 1) {
            texto = texto + T1[i][1] + "*" + T2[0][i] + "+"
            Tsum = Tsum + (T1[i][1] * T2[0][i])
        } else {
            texto = texto + T1[i][1] + "*" + T2[0][i] + "="
            Tsum = Tsum + (T1[i][1] * T2[0][i])
        }        
    }
    document.getElementById('TablaxTX1').innerHTML = texto + Tsum;
    V[0][1] = Tsum
    Tsum = 0
    texto = ""
    for (var i = 0; i < arrayx.length; i++) {
        if (i < arrayx.length - 1) {
            texto = texto + T1[i][0] + "*" + T2[1][i] + "+"
            Tsum = Tsum + (T1[i][0] * T2[1][i])
        } else {
            texto = texto + T1[i][0] + "*" + T2[1][i] + "="
            Tsum = Tsum + (T1[i][0] * T2[1][i])
        }   
        
    }
    document.getElementById('TablaxTX2').innerHTML = texto + Tsum;
    V[1][0] = Tsum
    Tsum = 0
    texto = ""

    for (var i = 0; i < arrayx.length; i++) {
        if (i < arrayx.length - 1) {
            texto = texto + T1[i][1] + "*" + T2[1][i] + "+"
            Tsum = Tsum + (T1[i][1] * T2[1][i])
        } else {
            texto = texto + T1[i][1] + "*" + T2[1][i] + "="
            Tsum = Tsum + (T1[i][1] * T2[1][i])
        }   
        
    }
    document.getElementById('TablaxTX3').innerHTML = texto + Tsum;
    V[1][1] = Tsum
    Tsum = 0
    texto = ""

    var VT = 1/Math.abs(V[0][0]*V[1][1]-V[0][1]*V[1][0])

    document.getElementById('determinante').innerHTML = VT + "*";   

    document.getElementById('TablaV0').innerHTML = "(XtX) = ["+V[0][0]+" "+V[0][1]+","+V[1][0]+" "+V[1][1]+"]";
    /* */
    var v1 = V[1][1] * VT
    var v2 = -V[0][1] * VT
    var v3 = -V[1][0] * VT
    var v4 = V[0][0] * VT

    V[1][1] = v4
    V[0][1] = v3
    V[1][0] = v2
    V[0][0] = v1

    document.getElementById('TablaV1').innerHTML = "(XtX)^-1 = ["+V[0][0]+" "+V[0][1]+","+V[1][0]+" "+V[1][1]+"]";

    calcularY(T2,V,VT)
}

function calcularY(XT,V,VT){
    
    document.getElementById('TablaxY0').innerHTML = arrayy;
    var X0 = ""
    var X1 = ""
    for (var i = 0; i < arrayx.length; i++) {       
        if (i < arrayx.length - 1) {
            X0 = X0 + XT[0][i] + ","
            X1 = X1 + XT[1][i] + ","
        } else {
            X0 = X0 + XT[0][i]
            X1 = X1 + XT[1][i]
        }
        /*console.log(X0)*/
        /* console.log("(" + X[i][0] + X[i][1] + ")") */
    }
    console.log(X1)
    document.getElementById('TablaxTR0').innerHTML = "[" + X0 + "]";
    document.getElementById('TablaxTR1').innerHTML = "[" + X1 + "]";

    var texto = ""
    var Tsum = 0
    let varrayy = []
    /* */
    for (var i = 0; i < arrayy.length; i++) {
        if (i < arrayx.length - 1) {
            texto = texto + XT[0][i] + "*" + arrayy[i] + "+"
            Tsum = Tsum + (XT[0][i] * arrayy[i])
        } else {
            texto = texto + XT[0][i] + "*" + arrayy[i] + "="
            Tsum = Tsum + (XT[0][i] * arrayy[i])
        }
    }
    document.getElementById('TablaxTY0').innerHTML = texto + Tsum;
    varrayy[0] = Tsum    
    Tsum = 0
    texto = ""
    /* */
    for (var i = 0; i < arrayy.length; i++) {
        if (i < arrayx.length - 1) {
            texto = texto + XT[1][i] + "*" + arrayy[i] + "+"
            Tsum = Tsum + (XT[1][i] * arrayy[i])
        } else {
            texto = texto + XT[1][i] + "*" + arrayy[i] + "="
            Tsum = Tsum + (XT[1][i] * arrayy[i])
        }
    }
    document.getElementById('TablaxTY1').innerHTML = texto + Tsum;    
    varrayy[1] = Tsum    
    Tsum = 0
    texto = ""

    document.getElementById('VTT').innerHTML = "(XtX)^-1 = ["+V[0][0]+" "+V[0][1]+","+V[1][0]+" "+V[1][1]+"]";
    document.getElementById('VTY').innerHTML = "XtY = ["+varrayy[0]+" "+varrayy[1]+"]";

    var a = (V[0][0] * varrayy[0] + V[0][1] * varrayy[1]).toFixed(1)
    var b = (V[1][0] * varrayy[0] + V[1][1] * varrayy[1]).toFixed(1)

    document.getElementById('tx2').innerHTML = "a,b=["+a+" ";
    document.getElementById('tx3').innerHTML = ""+b+"]";

    document.getElementById('tx4').innerHTML = "y= "+b+"x + ("+a+")";

}

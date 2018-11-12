    var historial = document.getElementById('historial')
    var resultado = document.getElementById("resultado");
    const number = document.getElementsByClassName("numero");
    const operaciones = document.getElementsByClassName("operacion");
    const igualdad = document.getElementById("igual");
    const clear = document.getElementById("reset");
    let operacion;
    let numero1;
    let numero2;

    function ingresarNumeroHistorial() {

        if (numero1 != undefined && numero2 == undefined) 
            historial.textContent = numero1 + " " + operacion;
        if(numero1 != undefined && numero2 != undefined)
            historial.textContent = numero1 + " " + operacion + " " + numero2;       
    }
        for (let i = 0; i < number.length; i++) {
            number[i].addEventListener('click', function (e) {
                resultado.textContent += number[i].textContent;
            });
            
        }

        for (let i = 0; i < operaciones.length; i++) {
            operaciones[i].addEventListener('click', function (e) {
                if (numero1 == undefined)    {
                    numero1 = parseFloat(resultado.textContent); 
                } 
                operacion = operaciones[i].textContent;
                ingresarNumeroHistorial();
                limpiarPantalla();
            });   
        }
        
    igualdad.onclick = function(e){
            numero2 = parseFloat(resultado.textContent);
            ingresarNumeroHistorial();
            operar();

    }     

    clear.onclick = function (e) {
       reset();
       historial.textContent = "";
    }

    function limpiarPantalla() {
        resultado.textContent = "";
    }

    function reset() {
        resultado.textContent = "";
        numero1 = undefined;
        numero2 = undefined;
        operacion = "";
    }

    function operar() {
        var result;
        switch (operacion) {
            case "+": 
                result = numero1 + numero2;
                break;
            case "-": 
                result = numero1 - numero2;
                break;
            case "/":
                result = numero1 / numero2;
                break;
            case "*":
                result = numero1 * numero2;
                break;
        }
        reset();
        resultado.textContent = result;
    }

//KEYCODE

window.onload = function() { 
document.onkeyup = mostrarInformacionTecla; 
}

function mostrarInformacionTecla(evObject) {
                var teclaPulsada = evObject.keyCode;
                switch (teclaPulsada) {
                    case 96:
                        resultado.textContent += 0;
                        break;
                    case 97:
                        resultado.textContent += 1;
                        break;
                    case 98:
                        resultado.textContent += 2;
                        break;
                    case 99:
                        resultado.textContent += 3;
                        break;
                    case 100:
                        resultado.textContent += 4;
                        break;
                    case 101:
                        resultado.textContent += 5;
                        break;
                    case 102:
                        resultado.textContent += 6;
                        break;
                    case 103:
                        resultado.textContent += 7;
                        break;
                    case 104:
                        resultado.textContent += 8;
                        break;
                    case 105:
                        resultado.textContent += 9;
                        break;
                    case 106:
                        if (numero1 == undefined) {
                            numero1 = parseFloat(resultado.textContent);
                        }
                        operacion = "*";
                        ingresarNumeroHistorial();
                        limpiarPantalla();
                        break;
                    case 107:
                    if (numero1 == undefined) {
                        numero1 = parseFloat(resultado.textContent);
                    }
                        operacion = "+";
                        ingresarNumeroHistorial();
                        limpiarPantalla();
                        break;
                    case 109:
                    if (numero1 == undefined) {
                        numero1 = parseFloat(resultado.textContent);
                    }
                        operacion = "-";
                        ingresarNumeroHistorial();
                        limpiarPantalla();
                        break;
                    case 111:
                    if (numero1 == undefined) {
                        numero1 = parseFloat(resultado.textContent);
                    }
                        operacion = "/";
                        ingresarNumeroHistorial();
                        limpiarPantalla();
                        break;
                    case 13:
                        numero2 = parseFloat(resultado.textContent);
                        ingresarNumeroHistorial();
                        operar();
                        break;
                    case 110:
                        resultado.textContent += "."
                        break;
                    case 8:
                        resultado.textContent = resultado.textContent.substring(0, resultado.textContent.length - 1);
                     break;
                    case 27:
                        reset();
                        historial.textContent = "";
                    }
} 
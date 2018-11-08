
    var resultado = document.getElementById("resultado");
    const number = document.getElementsByClassName("numero");
    const operaciones = document.getElementsByClassName("operacion");
    const igualdad = document.getElementById("igual");
    const clear = document.getElementById("reset");
    let operacion;
    let numero1;
    let numero2;

        for (let i = 0; i < number.length; i++) {
            number[i].addEventListener('click', function (e) {
                resultado.textContent += number[i].textContent;
            });
            
        }

        for (let i = 0; i < operaciones.length; i++) {
            operaciones[i].addEventListener('click', function (e) {
                numero1 = resultado.textContent;
                operacion = operaciones[i].textContent;
                limpiarPantalla();
            });   
        }
        
    clear.onclick = function (e) {
            reset();
    }

    igualdad.onclick = function(e){
        numero2 = resultado.textContent;
        operar();
    } 

    function limpiarPantalla() {
        resultado.textContent = "";
    }

    function reset() {
        resultado.textContent = "";
        numero1 = 0;
        numero2 = 0;
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
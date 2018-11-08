
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
        
    igualdad.onclick = function(e){
            numero2 = resultado.textContent;
            operar();
    }     


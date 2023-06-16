(function(){
    //Variables
    var formulario = document.getElementsByName('formulario')[0],
        elementos = formulario.elements,
        boton = document.getElementById('btn');

    var validarNombre = function(e){
        if (formulario.nombre.value == 0){
            alert("Completa el campo nombre");
            e.preventDefault();
        }
    };

    var validarApellido = function(e){
        if (formulario.apellido.value == 0){
            alert("Completa el campo apellido");
            e.preventDefault();
        }
    };

    var validarConsultas = function(e){
        if (formulario.consultas.value == 0){
            alert("Completa el campo consultas o sugerencias");
            e.preventDefault();
        }
    };

    
    var validarCheckbox = function(e){
        if (formulario.terminos.checked == false){
            alert("Acepta los términos y condiciones");
            e.preventDefault();
        }
    };

    var validar = function(e){
        validarNombre(e);
        validarApellido(e);
        validarConsultas(e);
        validarCheckbox(e);
    };
    formulario.addEventListener("submit", validar);
}())

//ESTO SOLO ES UNA IDEA QUE ESTABA PENSANDO PERO NO LLEVE A CABO.
// variable = click en botonplay
// if variable == botonplay1{tal cosa}
// else if variable == botonplay2{tal cosa}
//     if variable == botonplay3{tal cosa}
//     else if variable == botonplay4{tal cosa}
//         if variable == botonplay5{tal cosa}
//         else if variable == botonplay6{tal cosa}
//             if variable == botonplay7{tal cosa}
//             else if variable == botonplay8{tal cosa}
//                 if variable == botonplay9{tal cosa}
//                 else if variable == botonplay2{tal cosa}
//                     if variable == botonplay10{tal cosa}
//                     else if variable == botonplay11{tal cosa}
//                         if variable == botonplay12{tal cosa}
//                         else if variable == botonplay13{tal cosa}
//                             if variable == botonplay14{tal cosa}
//                             else if variable == botonplay15{tal cosa}
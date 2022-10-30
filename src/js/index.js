const formulario = document.forms.formulario

const inputs = document.querySelectorAll('#formulario .formulario__input')

const btnEnviar = document.getElementById('btnEnviar')

//Validación
let validate = () => {
    let error = false;

    for(let i=0; i < inputs.length; i++){
        if(inputs[i].value === ''){
            inputs[i].classList.add('input-error'); 
            error = true;
        }else{
            inputs[i].classList.remove('input-error');             
        }
    }
    return error;
}

function getInfo(e) {
    e.preventDefault();

    let error = validate();
    //console.log(error)
    
    if(error){
        Swal.fire({
            'title': 'Sus datos no se pudieron enviar.',
            'text': 'Por favor revise los campos resaltados',
            'icon': 'error',
            'timer': '5000'
        });
    }else{        
        Swal.fire({
            'title': 'Formulario enviado con éxito',
            'text': 'A la brevedad nos pondremos en contacto con usted',
            'icon': 'success',
            'timer': '8000'
        });
        const info = {
            nombre: formulario.firstName.value,
            apellido: formulario.lastName.value,
            mensaje: formulario.textarea.value
        }
        //console.log(info)
        borrarFn();
    }
}

function borrarFn(){
    formulario.firstName.value = ''
    formulario.lastName.value = ''
    formulario.textarea.value = ''
}


btnEnviar.onclick = (e) => { getInfo(e) }
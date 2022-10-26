console.clear()

function mutePacks(){
    pack1.classList.replace('bg-danger','bg-muted')
    pack2.classList.replace('bg-danger','bg-muted')
    pack3.classList.replace('bg-danger','bg-muted')
}

function deleteFn(e){
    e.preventDefault()

    packValueWDiscount.innerHTML = ''
    formulario.firstName.value = ''
    formulario.lastName.value = ''
    formulario.email.value = ''
    formulario.cantidad.value = ''
    formulario.opciones.value = ''
    //totalToPay.innerHTML = ''    
    mutePacks()    
}

function summaryFn(e){
    e.preventDefault()
    console.log('RESUMEN')
}

function submitFn(e){
    e.preventDefault()
    console.log('SE HA ENVIADO')
}


deleteBtn.onclick = (e) => { deleteFn(e) }
summaryBtn.onclick = (e) => { summaryFn(e) }
submitBtn.onclick = (e) => { submitFn(e) }
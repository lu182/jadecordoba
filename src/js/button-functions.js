let allDiscounts = [80, 50, 15];

function mutePacks(){
    for(let item of packages){                  
        item.classList.replace('bg-danger','bg-muted')        
    }
}

function deleteFn(e){
    e.preventDefault()

    packValueWDiscount.innerHTML = ''
    formulario.firstName.value = ''
    formulario.lastName.value = ''
    formulario.email.value = ''    
    formulario.opciones.value = ''
    totalToPay.innerHTML = '' 
    totalToPayDiv.classList.replace('border-success', 'border-muted')   
    mutePacks()    
}

function summaryFn(e){
    e.preventDefault()
    let error = validate();
    
    let purchaseAmount = packValueWDiscount.innerHTML * formulario.cantidad.value;
    let discount;
    let totalPurchase;    

    if(pack1.id === 'pack1' && packageValues[0] && select.value === '1'){             
        discount = (purchaseAmount * allDiscounts[0]) / 100;
        totalPurchase = purchaseAmount - discount;
        totalToPay.textContent = totalPurchase;          
    }

    if(pack2.id === 'pack2' && packageValues[1] && select.value === '2'){        
        discount = (purchaseAmount * allDiscounts[1]) / 100;
        totalPurchase = purchaseAmount - discount;
        totalToPay.textContent = totalPurchase;
    }

    if(pack3.id === 'pack3' && packageValues[2] && select.value === '3'){        
        discount = (purchaseAmount * allDiscounts[2]) / 100;
        totalPurchase = purchaseAmount - discount;
        totalToPay.textContent = totalPurchase;
    }

    totalToPay.classList.replace('bg-muted', 'bg-info')    
    totalToPayDiv.classList.replace('border-muted', 'border-success')

    if(error){
        Swal.fire({
            'title': 'Datos incompletos',
            'text': 'Por favor revise los campos resaltados',
            'icon': 'warning',
            'timer': '3000'
        }); 
    }else{
        Swal.fire({
            title: `Usted está por adquirir el PACK: ${formulario.opciones.value}`,
            text: `Los datos ingresados son: 
                    Nombre: ${formulario.firstName.value}
                    Apellido: ${formulario.lastName.value}
                    Correo: ${formulario.email.value}
                    Cantidad: ${formulario.cantidad.value}
                    Total A Pagar: ${totalPurchase}`,
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ok'
        }).then((result) => {
        if (result.isDismissed) {
            deleteFn(e);
        }
        });
    }

}

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
            'title': 'Sus datos no se pudieron enviar. La compra no ha podido ser procesada',
            'text': 'Por favor revise los campos resaltados',
            'icon': 'error',
            'timer': '5000'
        });
    }else{        
        Swal.fire({
            'title': 'Proceso realizado con éxito',
            'text': 'Sus datos se enviaron correctamente.La compra ha sido procesada',
            'icon': 'success',
            'timer': '8000'
        });
        const info = {
            nombre: formulario.firstName.value,
            apellido: formulario.lastName.value,
            correo: formulario.email.value,
            cantidad: formulario.cantidad.value,
            opcion: formulario.opciones.value,
            totalAPagar: totalToPay.innerHTML
        }
        console.log(info)
        deleteFn(e);
    }
}


deleteBtn.onclick = (e) => { deleteFn(e) }
summaryBtn.onclick = (e) => { summaryFn(e) }
submitBtn.onclick = (e) => { getInfo(e) }
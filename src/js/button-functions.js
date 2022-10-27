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
    mutePacks()    
}

function summaryFn(e){
    e.preventDefault()           

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

}    


function submitFn(e){
    e.preventDefault()
    console.log('SE HA ENVIADO')
    //TODO Validar que todos los campos del form esten completos + SweetAlert
}


deleteBtn.onclick = (e) => { deleteFn(e) }
summaryBtn.onclick = (e) => { summaryFn(e) }
submitBtn.onclick = (e) => { submitFn(e) }
let packageValues = [6000, 16000, 25000];

function replaceText1(pack){    
    pack.classList.replace('text-dark', 'text-white')    
}

function replaceText2(pack){
    pack.classList.replace('text-white', 'text-dark')
}

function packOver(pack){    
    pack.id === 'pack1' && pack.classList.replace('bg-muted', 'bg-primary'), replaceText1(pack);
    pack.id === 'pack2' && pack.classList.replace('bg-muted', 'bg-success') , replaceText1(pack);
    pack.id === 'pack3' && pack.classList.replace('bg-muted', 'bg-warning') , replaceText1(pack);     
}

function packLeave(pack){
    pack.id === 'pack1' && pack.classList.replace('bg-primary', 'bg-muted'), replaceText2(pack);
    pack.id === 'pack2' && pack.classList.replace('bg-success', 'bg-muted'), replaceText2(pack);
    pack.id === 'pack3' && pack.classList.replace('bg-warning', 'bg-muted'), replaceText2(pack);
}

function packClick(pack){    
    pack.ariaChecked = true;    
    pack.classList.replace('bg-primary', 'bg-danger')    
    pack.classList.replace('bg-success', 'bg-danger')    
    pack.classList.replace('bg-warning', 'bg-danger')    

    pack.classList.replace('bg-muted','bg-danger')
    select.value =
        pack.id === 'pack1' && (packValueWDiscount.innerHTML = packageValues[0]) && '1' ||
        pack.id === 'pack2' && (packValueWDiscount.innerHTML = packageValues[1]) && '2' ||
        pack.id === 'pack3' && (packValueWDiscount.innerHTML = packageValues[2]) && '3'

    for(let item of packages){
        if(item.id !== pack.id){            
            item.classList.replace('bg-danger','bg-muted')
        }
    }    
}

function assignEvents(pack){
    pack.addEventListener('mouseover', () => packOver(pack))
    pack.addEventListener('mouseleave', () => packLeave(pack))
    pack.addEventListener('click', () => packClick(pack))
}

assignEvents(pack1)
assignEvents(pack2)
assignEvents(pack3)

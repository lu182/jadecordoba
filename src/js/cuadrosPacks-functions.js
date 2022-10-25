function replaceText1(pack){    
    pack.classList.replace('text-dark', 'text-white')    
}

function replaceText2(pack){
    pack.classList.replace('text-white', 'text-dark')
}

function packOver(pack){
    if(pack === pack1){
        pack.classList.replace('bg-muted', 'bg-primary')
        replaceText1(pack)
    }else if(pack === pack2){
        pack.classList.replace('bg-muted', 'bg-success')
        replaceText1(pack)
    }else{
        pack.classList.replace('bg-muted', 'bg-warning')
        replaceText1(pack) 
    }
    
}

function packLeave(pack){
    if(pack === pack1){
        pack.classList.replace('bg-primary', 'bg-muted')
        replaceText2(pack)
    }else if(pack === pack2){
        pack.classList.replace('bg-success', 'bg-muted')
        replaceText2(pack)
    }else{
        pack.classList.replace('bg-warning', 'bg-muted')
        replaceText2(pack)
    }
    
}

function packClick(pack){
    pack.ariaChecked = true;
    pack.classList.replace('bg-primary', 'bg-danger')
    pack.classList.replace('bg-success', 'bg-danger')
    pack.classList.replace('bg-warning', 'bg-danger')

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

function clickedSelection(){
    select.value === '1' && packClick(pack1);
    select.value === '2' && packClick(pack2);
    select.value === '3' && packClick(pack3);
}


select.addEventListener('change', clickedSelection)
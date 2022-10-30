// Cuadros Packs
const pack1 = document.getElementById('pack1')
const pack2 = document.getElementById('pack2')
const pack3 = document.getElementById('pack3')
const packages = document.getElementsByClassName('card')

// Valor de Pack
let packValueWDiscount = document.getElementById('valorPackSinDto')

// Formulario
const form = document.forms.formulario

//Inputs
const inputs = document.querySelectorAll('#formulario .formulario__input')

// Select
const select = document.querySelector('#seleccionPack')

// Total A Pagar
const totalToPay = document.getElementById('totalAPagar')
const totalToPayDiv = document.querySelector('.totalToPayDiv')

// Botones
const deleteBtn = document.getElementById('btnBorrar')
const summaryBtn = document.getElementById('btnResumen')
const submitBtn = document.getElementById('btnEnviar')

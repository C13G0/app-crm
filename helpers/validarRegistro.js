/* Selectores:
getEmelementById
querySelector


querySeelctorAll En el ejemplo de hoy pa seleccionar del formulario todos los inputs
*/

/*
let inputs = document.querySelectorAll("form div input")
let inputs = document.querySelectorAll(".formulario_entrada")
*/



let inputs = document.getElementsByClassName("formulario__entrada")

let arregloInputs = [...inputs]
console.log(inputs)
console.log(arregloInputs)


arregloInputs.map((input)=> {
    console.log(input)
})
    



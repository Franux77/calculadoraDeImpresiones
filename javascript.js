const input=document.getElementById("input")
const button=document.getElementById("boton")
const resultado=document.getElementById("resultado")

boton.addEventListener('click',()=>{
    const ValorIngresado=input.value;
    const numeroDeHojas= parseInt(ValorIngresado);
    const precioPorHoja= 70;
    const precioTotal= numeroDeHojas*precioPorHoja

    resultado.textContent= `El precio total es $${precioTotal.toFixed(2)}`;
})
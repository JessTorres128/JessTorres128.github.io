window.onload = function(){
    btnVenta= document.getElementById('btnVenta')
    btnRenta= document.getElementById('btnRenta')
    btnRenta.style.backgroundColor="rgba(116,131,129,.72)"
    btnVenta.style.color="black"
    btnRenta.style.color="black"
    busTipoV=true
    btnVenta.disabled=true
    btnVenta.addEventListener('click', function(){
        busTipoV=true
        btnRenta.style.backgroundColor="rgba(116,131,129,.72)"
        btnVenta.style.backgroundColor="rgba(170, 170, 170, 0.72)"
        btnVenta.disabled=true
        btnRenta.disabled=false
        console.log(busTipoV)
    })
    btnRenta.addEventListener('click',function(){
        busTipoV=false
        btnVenta.style.backgroundColor="rgba(116,131,129,.72)"
        btnRenta.style.backgroundColor="rgba(170, 170, 170, 0.72)"
        btnVenta.disabled=false
        btnRenta.disabled=true
        console.log(busTipoV)
    })
}

const btnAbrirIngresar = document.querySelector("#Ingresar")
const btnCerrarIngresar = document.querySelector("#btnCerrar")
const Ingresar = document.querySelector("#vIngresar")
const fondoN= document.querySelector("#fondoN")

btnAbrirIngresar.addEventListener('click',function(){
    console.log("abriendo consola")
    fondoN.style.display="block"
    Ingresar.showModal()
})
btnCerrarIngresar.addEventListener('click',function(){
    fondoN.style.display="none"
    Ingresar.close()
})

const nTCuenta = document.querySelector("#nuevaCuenta")
nTCuenta.addEventListener('click', function(){
    Ingresar.close()
    vNuevaC.showModal()
})

const YTCuenta = document.querySelector("#YTCuenta")
YTCuenta.addEventListener('click',function(){
    vNuevaC.close()
    Ingresar.showModal()
})

const btnAbrirReg = document.querySelector("#Registrar")
const btnCerrarReg = document.querySelector("#btnCerrar2")
const Registro = document.querySelector("#btnCrearC")
const vNuevaC = document.querySelector("#vRegistro")


btnAbrirReg.addEventListener('click', function(){
    fondoN.style.display = "block"
    vNuevaC.showModal()
})
btnCerrarReg.addEventListener('click',function(){
    fondoN.style.display = "none"
    vNuevaC.close()
})
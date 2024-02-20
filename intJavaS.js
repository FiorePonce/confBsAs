
const ticketValor=2000

const estudiante=80

const trainee=50

const junior=15

function calcTotal() {
    let cant=document.getElementById("cant").value
    
    let categoria=document.getElementById("catego").value

    let total=0
    if (categoria==1) {
        total=cant*ticketValor*.2
    } else if (categoria==2) {
        total=cant*ticketValor*.5 
    } else {
        total=cant*ticketValor*.85
    }

    document.getElementById("total").innerHTML=`Total a pagar: $${total}`
}

function borrar() {
    document.getElementById("total").innerHTML = "Total a pagar: $ ";
}

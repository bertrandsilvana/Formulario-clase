const formulario =
document.getElementById("formulario")

const resultado =
document.getElementById("resultado")

formulario.addEventListener(
"submit",
function(e){

e.preventDefault()

resultado.textContent =
"Formulario enviado correctamente"

}
)
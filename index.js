// capturar elementi

//const h1 = document.getElementById ("titulo")

// pega todo o texto          h1.textContent
// pega tudo inclusive estrutura                  h1.innerHTML
// não pega textos invisiveis  h1.innerText


//console.log (h1.textContent)

// h1.innerText = "ola"

//const h2 = document.creatteElement ("h2")
//------------------------------------------------------------------------------------------------------------------
// EVENTOS----------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------

const body = document.body

const iptn1 = document.getElementById("n1")
const iptn2 = document.getElementById("n2")
const span = document.getElementById("resposta")
const btnenviar = document.getElementById("btn")

btnenviar.addEventListener("click", ()=> {
    const n1 = Number (iptn1.value)
    const n2 = Number (iptn2.value)
    const soma = n1 + n2
    span.innerHTML = `Total: <bold>${soma}<bold>`
})




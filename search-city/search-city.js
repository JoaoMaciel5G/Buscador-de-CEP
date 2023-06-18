const button = document.querySelector("button#btn");
const lista = document.querySelector("section.lista-cep")

function limparValoresInputs(...variaveis){
    const limpaCampo = variaveis.forEach((elemento)=>{
        elemento.value = ""
    })
}
async function handleSearch(event) {
    event.preventDefault()
    const rua = document.getElementById("rua")
    const cidade = document.getElementById("cidade")
    const estado = document.getElementById("estado")
    const error = document.getElementById("erro")

    const response = await fetch(`https://viacep.com.br/ws/${estado.value}/${cidade.value}/${rua.value}/json/`)
    const data = await response.json()
    limparValoresInputs(cidade, rua, estado)
    
    if(!data.length){//verifica se o array de CEP´s está vazio
        error.style.display = "block"
        return
    }
    error.style.display = "none"
    data.forEach(item => {
        lista.style.display = "block"
        lista.innerHTML += `<div class="dados">
        <p>CEP: <span class="cep">${item.cep}</span></p>
        <p>Bairro: <span class="bairro">${item.bairro}</span></p>
        <p>Rua: <span class="rua">${item.logradouro}</span></p>
      </div>`
    });
}
button.addEventListener("click", handleSearch);
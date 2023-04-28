const button = document.querySelector("button#btn")
const localCidade = document.querySelector("span#local")
const bairroCidade = document.querySelector("span#bairro")
const cepCidade = document.querySelector("span#cep")
const cidade = document.querySelector("span#cidade")
const description = document.querySelector("div#description")

async function handleSearch(event){
    event.preventDefault()
    const input = document.querySelector("input#cep").value
    const inputValue = input.replace(/\s/g, '');
    
    const response = await fetch(`https://viacep.com.br/ws/${inputValue}/json/`)
    const {cep, logradouro, bairro, localidade} = await response.json()
    
    localCidade.innerText = logradouro
    bairroCidade.innerText = bairro
    cepCidade.innerText = cep
    cidade.innerText = localidade
    description.style.display = "block"
    input.value = ""
}
button.addEventListener("click", handleSearch)
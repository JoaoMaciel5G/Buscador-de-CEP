const button = document.querySelector("button#btn");
const description = document.querySelector("div#description");
const error = document.getElementById("erro");

async function handleSearch(event) {
  event.preventDefault();
  const input = document.querySelector("input#cep");
  const cepInputValue = input.value.trim();
  
  const response = await fetch(`https://viacep.com.br/ws/${cepInputValue}/json/`);
  const { cep, logradouro, bairro, localidade, erro } = await response.json();

  if (!erro) {//verifica se o erro não existe
    const localCidade = document.querySelector("span#local").innerText = logradouro
    const bairroCidade = document.querySelector("span#bairro").innerText = bairro
    const cepCidade = document.querySelector("span#cep").innerText = cep
    const cidade = document.querySelector("span#cidade").innerText = localidade
    description.style.display = "block";
    input.value = "";
    error.style.display = "none";
    return
  }
  error.style.display = "block";
}
button.addEventListener("click", handleSearch);

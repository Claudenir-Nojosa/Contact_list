const form = document.getElementById("form");
let linhas ="";
const contatos = [];
const telefones = [];

form.addEventListener("submit", function(e){   
    e.preventDefault();  /*Não resetar a página ao clicar em submit*/

    adicionarLinha();
    atualizarTabela();
})

function adicionarLinha(){
    const inputNomeContato = document.getElementById("nameContact");
    const inputTelContato = document.getElementById("telContact");

    if (contatos.includes(inputNomeContato.value)){
        alert(`O contato: ${inputNomeContato.value} já foi cadastrado.`)  /*Conferência de Contato já cadastrado*/
    }  else if (telefones.includes(inputTelContato.value)){
        alert(`O telefone: ${inputTelContato.value} já foi cadastrado.`) /*Conferência de Telefone já cadastrado*/
    } 
    else{
    contatos.push(inputNomeContato.value);
    telefones.push(inputTelContato.value);

    let linha = "<tr>"
    linha += `<td> ${inputNomeContato.value}</td>`
    linha += `<td> ${inputTelContato.value}</td>`
    linha += "</tr>"
    linhas += linha;
    }
    inputNomeContato.value = "";
    inputTelContato.value = "";
}

function atualizarTabela(){
    const corpoTabela = document.querySelector("tbody")
    corpoTabela.innerHTML = linhas;
}
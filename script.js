const formulario = window.document.getElementById('formulario');
const inputText = window.document.getElementById('input-text');
const inputButton = window.document.getElementById('input-button');
const listaTarefa = window.document.getElementById('lista-tarefa');
const buttonLimpar = window.document.getElementById('button-limpar');
const tarefaConcluida = window.document.getElementById('tarefasConcluidas');
const botaoApagaTudo = window.document.getElementById("botao-apaga-tudo");



//Chamando Eventos 
formulario.addEventListener('submit', adicionaTarefa)
buttonLimpar.addEventListener('click', limpaTarefas)
window.addEventListener('load', focar)
botaoApagaTudo.addEventListener('click', apagaTudo)
inputButton.addEventListener('mouseenter', mudaCorAdiciona)
inputButton.addEventListener('mouseout', restauraCorAdiciona)
buttonLimpar.addEventListener('mouseenter', mudaCorLimpar)
buttonLimpar.addEventListener('mouseout', restauraCorLimpar)
botaoApagaTudo.addEventListener('mouseenter', mudaCorApagaTudo)
botaoApagaTudo.addEventListener('mouseout', restauraCorApagaTudo)
inputText.addEventListener('mouseenter', fazZoom)
inputText.addEventListener('mouseout', desfazZoom)
inputText.addEventListener('input', aoDigitar)



//Função de focar no campo de digitar a tarefa a ser adicionada
function focar(event) {
    inputText.focus()
}

//Função de Adiconar o item ao apertar "Adicionar Tarefa"
function adicionaTarefa(event) {
event.preventDefault();

const itemLista = window.document.createElement('li');
itemLista.textContent = inputText.value
listaTarefa.appendChild(itemLista);

const botaoExcluir = window.document.createElement('button');
botaoExcluir.textContent = 'Excluir';
botaoExcluir.id = 'botaoExcluiTarefa';
window.document.body.appendChild(botaoExcluir);
const botaoExcluiTarefa = window.document.getElementById('botaoExcluiTarefa')
botaoExcluir.addEventListener('mouseenter', mudaCorExcluiTarefa)
botaoExcluir.addEventListener('mouseout', restauraCorExcluiTarefa)
itemLista.appendChild(botaoExcluir);
botaoExcluir.addEventListener('click', excluiTarefa)

const botaoConcluido = window.document.createElement('button')
botaoConcluido.textContent = 'Concluir';
botaoConcluido.id = 'botaoConcluirTarefa';
itemLista.appendChild(botaoConcluido);
botaoConcluido.addEventListener('click', concluiTarefa)

inputText.value = '';
inputText.focus();
}


//Função de Limpar todas as tarefas que estão em "Tarefas a Fazer"
function limpaTarefas(event) {
    while (listaTarefa.firstChild) {
        listaTarefa.removeChild(listaTarefa.firstChild);
    }
}

//Função para Remover a Tarefa da Lista
function excluiTarefa(event) {
    const itemLista = event.target.parentNode;
    listaTarefa.removeChild(itemLista);
}

//Função que ao clicar em Concluir, a tarefa é adicionada em uma nova lista de tarefas concluidas
function concluiTarefa(event) {
    const itemLista = event.target.parentNode;
    const itemListaConcluida = window.document.createElement('li');
    itemListaConcluida.textContent = itemLista.textContent.replace('Remover Tarefa', '').replace('Concluir', '')
    tarefaConcluida.appendChild(itemListaConcluida);

    listaTarefa.removeChild(itemLista);
}

function apagaTudo(event) {
while(listaTarefa.firstChild) {
    listaTarefa.removeChild(listaTarefa.firstChild)
}
while(tarefaConcluida.firstChild) {
    tarefaConcluida.removeChild(tarefaConcluida.firstChild)
}
focar();
}


function mudaCorAdiciona(event) {
    inputButton.style.background = 'blue';
    inputButton.style.transition = 'transform 0.2s';
    inputButton.style.transform = 'scale(1.2)';
}

function restauraCorAdiciona(event) {
    inputButton.style.background = '#05ad02';
    inputButton.style.transition = 'transform 0.2s';
    inputButton.style.transform = 'scale(1.0)';
}

function mudaCorLimpar(event) {
    buttonLimpar.style.background = 'red';
    buttonLimpar.style.transition = 'transform 0.2s';
    buttonLimpar.style.transform = 'scale(1.2)';
}

function restauraCorLimpar(event) {
    buttonLimpar.style.background = '#ff7300';
    buttonLimpar.style.transition = 'transform 0.2s';
    buttonLimpar.style.transform = 'scale(1.0)';
}

function mudaCorApagaTudo(event) {
    botaoApagaTudo.style.background = 'red';
    botaoApagaTudo.style.transition = 'transform 0.2s';
    botaoApagaTudo.style.transform = 'scale(1.2)';
}

function restauraCorApagaTudo(event) {
    botaoApagaTudo.style.background = '#ff7300';
    botaoApagaTudo.style.transition = 'transform 0.2s';
    botaoApagaTudo.style.transform = 'scale(1.0)';
}

function fazZoom(event){
    inputButton.style.transition = 'transform 0.2s';
    inputText.style.transform ='scale(1.1)';
    inputText.style.border = 'solid 5px blue';
    inputText.style.font = 'normal 18pt Arial';
}

function desfazZoom(event){
    inputText.style.transition = 'transform 0.2s';
    inputText.style.transform = 'scale(1.0)';
    inputText.style.border = 'solid 5px black';
    inputText.style.font = 'normal 10pt Arial';5
}

function aoDigitar(event) {
    inputButton.style.transition = 'transform 0.2s';
    inputText.style.transform ='scale(1.1)';
    inputText.style.border = 'solid 5px blue';
    inputText.style.font = 'normal 18pt Arial';
}

function mudaCorExcluiTarefa(event) {
    botaoExcluiTarefa.style.background = 'red';
    botaoExcluiTarefa.style.transition = 'transform 0.2s';
    botaoExcluiTarefa.style.transform = 'scale(1.1)';
}

function restauraCorExcluiTarefa(event) {
    botaoExcluiTarefa.style.background = '#ff7300';
    botaoExcluiTarefa.style.transition = 'transform 0.2s';
    botaoExcluiTarefa.style.transform = 'scale(1.0)';
}
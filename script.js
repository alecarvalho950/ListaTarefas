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

inputButton.addEventListener('mousedown', ClicaMudaCorAdicionaTarefa)
inputButton.addEventListener('mouseup', clicaRestauraCorAdicionaTarefa)
inputButton.addEventListener('mouseenter', mudaCorAdiciona)
inputButton.addEventListener('mouseout', restauraCorAdiciona)

buttonLimpar.addEventListener('mousedown', clicaMudaCorLimpar)
buttonLimpar.addEventListener('mouseup', clicaRestauraCorLimpar)
buttonLimpar.addEventListener('mouseenter', mudaCorLimpar)
buttonLimpar.addEventListener('mouseout', restauraCorLimpar)

botaoApagaTudo.addEventListener('mousedown', clicaMudaCorApagaTudo)
botaoApagaTudo.addEventListener('mouseup', clicaRestauraCorApagaTudo)
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
itemLista.style.width = '350px';

inputText.value = '';
inputText.focus();

const botaoExcluir = window.document.createElement('button');
botaoExcluir.textContent = 'Excluir';
window.document.body.appendChild(botaoExcluir);

botaoExcluir.addEventListener('mouseenter', mudaCorExcluiTarefa)
botaoExcluir.addEventListener('mouseout', restauraCorExcluiTarefa)
itemLista.appendChild(botaoExcluir);
botaoExcluir.addEventListener('click', excluiTarefa)

const botaoConcluido = window.document.createElement('button')
botaoConcluido.textContent = 'Concluir';
itemLista.appendChild(botaoConcluido);
botaoConcluido.addEventListener('mouseenter', mudaCorConcluiTarefa)
botaoConcluido.addEventListener('mouseout', restauraCorConcluiTarefa)
botaoConcluido.addEventListener('click', concluiTarefa)
}

function ClicaMudaCorAdicionaTarefa(event) {
    inputButton.style.transition = 'background 0.1s';
    inputButton.style.background = 'black';
}

function clicaRestauraCorAdicionaTarefa(event) {
    inputButton.style.transition = 'background 0.1s';
    inputButton.style.background = '#05ad02';
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
    itemListaConcluida.textContent = itemLista.textContent.replace('Excluir', '').replace('Concluir', '')
    tarefaConcluida.appendChild(itemListaConcluida);
    itemListaConcluida.style.background = '#CEECF5';
    itemListaConcluida.style.color = 'blue';
    itemListaConcluida.style.font = 'bold 18pt Arial';
    itemListaConcluida.style.border = 'solid 5px #00FF40';


    listaTarefa.removeChild(itemLista);
}

function clicaMudaCorApagaTudo(event) {
    botaoApagaTudo.style.transition = 'background 0.1s';
    botaoApagaTudo.style.background = 'black';
}

function clicaRestauraCorApagaTudo(event) {
    botaoApagaTudo.style.transition = 'background 0.1s';
    botaoApagaTudo.style.background = '#ff7300';
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

function clicaMudaCorLimpar(event) {
    buttonLimpar.style.transition = 'background 0.1s';
    buttonLimpar.style.background = 'black';
}

function clicaRestauraCorLimpar(event) {
    buttonLimpar.style.transition = 'background 0.1s';
    buttonLimpar.style.background = '#ff7300';
}

function mudaCorLimpar(event) {
    buttonLimpar.style.background = '#FF0000';
    buttonLimpar.style.transition = 'transform 0.2s';
    buttonLimpar.style.transform = 'scale(1.2)';
}

function restauraCorLimpar(event) {
    buttonLimpar.style.background = '#ff7300';
    buttonLimpar.style.transition = 'transform 0.2s';
    buttonLimpar.style.transform = 'scale(1.0)';
}

function mudaCorApagaTudo(event) {
    botaoApagaTudo.style.background = '#FF0000';
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
    inputText.style.border = 'solid 5px yellow';
    inputText.style.font = 'normal 16pt Arial';
}

function desfazZoom(event){
    inputText.style.transition = 'transform 0.2s';
    inputText.style.transform = 'scale(1.0)';
    inputText.style.border = 'solid 5px #FFF';
    inputText.style.font = 'normal 10pt Arial';
}

function aoDigitar(event) {
    inputButton.style.transition = 'transform 0.2s';
    inputText.style.transform ='scale(1.1)';
    inputText.style.border = 'solid 5px blue';
    inputText.style.font = 'normal 18pt Arial';
}

function mudaCorExcluiTarefa(event) {
    const botaoExcluiTarefa = event.target;
    botaoExcluiTarefa.style.background = 'red';
    botaoExcluiTarefa.style.transition = 'transform 0.2s';
    botaoExcluiTarefa.style.transform = 'scale(1.1)';
}

function restauraCorExcluiTarefa(event) {
    const botaoExcluiTarefa = event.target;
    botaoExcluiTarefa.style.background = '#ff7300';
    botaoExcluiTarefa.style.transition = 'transform 0.2s';
    botaoExcluiTarefa.style.transform = 'scale(1.0)';
}

function mudaCorConcluiTarefa(event) {
    const botaoConcluiTarefa = event.target;
    botaoConcluiTarefa.style.background = 'red';
    botaoConcluiTarefa.style.transition = 'transform 0.2s';
    botaoConcluiTarefa.style.transform = 'scale(1.1)';
}

function restauraCorConcluiTarefa(event) {
    const botaoConcluiTarefa = event.target;
    botaoConcluiTarefa.style.background = '#ff7300';
    botaoConcluiTarefa.style.transition = 'transform 0.2s';
    botaoConcluiTarefa.style.transform = 'scale(1.0)';
}
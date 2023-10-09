const formulario = window.document.getElementById('formulario');
const inputText = window.document.getElementById('input-text');
const inputButton = window.document.getElementById('input-button');
const listaTarefa = window.document.getElementById('lista-tarefa');
const buttonLimpar = window.document.getElementById('button-limpar');
const tarefaConcluida = window.document.getElementById('tarefasConcluidas');
const botaoApagaTudo = window.document.getElementById("botao-apaga-tudo");

//Adicionando Eventos 
formulario.addEventListener('submit', adicionaTarefa)
buttonLimpar.addEventListener('click', limpaTarefas)
window.addEventListener('load', focar)
botaoApagaTudo.addEventListener('click', apagaTudo)


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
botaoExcluir.textContent = 'Remover Tarefa'
itemLista.appendChild(botaoExcluir);
botaoExcluir.addEventListener('click', excluiTarefa)

const botaoConcluido = window.document.createElement('button')
botaoConcluido.textContent = 'Concluir'
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
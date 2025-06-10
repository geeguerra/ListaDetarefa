// definir constantes para uso no código
const btnAdd = document.getElementById('btn-add');
const tarefa = document.getElementById('tarefa');
const taskList = document.getElementById('taskList');
const titulo = document.getElementById('titulo');

let nome = prompt("qual o seu nome?")
titulo.innerHTML = `lista de tarefa: ${nome}`;

//acompanha o evento de clique do botão adicionar tarefa
btnAdd.addEventListener("click]",criatarefa);

function criatarefa(){
    
}

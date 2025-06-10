//definir constantes para uso no código
const btnAdd = document.getElementById('btn-add');
const tarefa = document.getElementById('tarefa');
const taskiList = document.getElementById('taskList');
const titulo = document.getElementById('titulo');

let nome = prompt("Qual o seu nome?")
titulo.innerHTML = `Lista De tarefas: ${nome}`;

//acompanha o evento de clique do botão adicionar tarefa
btnAdd.addEventListener("click",criaTarefa);

function criaTarefa(){
 const listItem =document.createElement('li')
 listItem.textContent = tarefa.value;
 // pai     recebe     filho
 taskiList.appendChild(listItem);
  
 //Criar botão de deletar tarefa 
 const removeButton = document.createElement('button');
 removeButton.id = "remove";
 removeButton.textContent = "x"
 listItem.appendChild(removeButton);

removeButton.addEventListener("click",function(){
    taskiList.removeChild(listItem);
})

// Criar botão de concluir tarefa
const concluirButton = document.createElement('button');
 concluirButton.id = "conclui";
 concluirButton.textContent = "✓"
 listItem.appendChild(concluirButton);

 /*  listItem.appendChild(concluirButton);   */

 let buttonsItem = document.createElement('div');
 buttonsItem.classList.toggle('buttonsItem')
 buttonsItem.appendChild(concluirButton);
 listItem.appendChild(buttonsItem);
 buttonsItem.appendChild(removeButton)
  concluirButton.addEventListener("click", function(){
    listItem.classList.toggle('completed');
 })

}
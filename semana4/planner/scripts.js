let tarefaSegunda = document.getElementById("tarefas-segunda");
let tarefaTerca = document.getElementById("tarefas-terca");
let tarefaQuarta = document.getElementById("tarefas-quarta");
let tarefaQuinta = document.getElementById("tarefas-quinta");
let tarefaSexta = document.getElementById("tarefas-sexta");
let tarefaSabado = document.getElementById("tarefas-sabado");
let tarefaDomingo = document.getElementById("tarefas-domingo");

const minhaTarefa = document.getElementById("minha-tarefa");

function adicionaTarefa() {

    let tarefa = minhaTarefa.value;
    let d = document.getElementById("dia");
    let diaSelecionado = d.options[d.selectedIndex].value;

    if (diaSelecionado === "Segunda") {
        tarefaSegunda.innerHTML += `<li>${tarefa}</li>`
    } else if (diaSelecionado === "Terça") {
        tarefaTerca.innerHTML += `<li>${tarefa}</li>`
    } else if (diaSelecionado === "Quarta") {
        tarefaQuarta.innerHTML += `<li>${tarefa}</li>`
    } else if (diaSelecionado === "Quinta") {
        tarefaQuinta.innerHTML += `<li>${tarefa}</li>`
    } else if (diaSelecionado === "Sexta") {
        tarefaSexta.innerHTML += `<li>${tarefa}</li>`
    } else if (diaSelecionado === "Sábado") {
        tarefaSabado.innerHTML += `<li>${tarefa}</li>`
    } else if (diaSelecionado === "Domingo") {
        tarefaDomingo.innerHTML += `<li>${tarefa}</li>`
    }

    if (tarefa == "") {
        alert("O espaço para digitar a tarefa não pode ficar em branco.");
    }

    console.log(diaSelecionado);
    minhaTarefa.value = "";
    dia.selectedIndex = "";

}

function limpaTarefa() {

    let limpar = confirm("Tem certeza que deseja limpar todas as tarefas?");
    if (limpar == true) {
        tarefaSegunda.innerHTML = "";
        tarefaTerca.innerHTML = "";
        tarefaQuarta.innerHTML = "";
        tarefaQuinta.innerHTML = "";
        tarefaSexta.innerHTML = "";
        tarefaSabado.innerHTML = "";
        tarefaDomingo.innerHTML = ""; 
    }
}







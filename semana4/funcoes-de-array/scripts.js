/* CADASTRO */
let contadorArray = 1;
let i = 0;

const controlador = {  
    valor: document.getElementById("controlador-valor"),
    tipo: document.getElementById("controlador-tipo"),
    descricao: document.getElementById("controlador-descricao"),
}

let cadastros = [];
let valorTotal = 0;


// sintaxe de push: cadastros.push({valor: x, tipo: y, descricao: z})

const cadastrar = ((cadastro => {
    let valorCadastrado = controlador.valor.value;
    let tipoCadastrado = controlador.tipo.value;
    let descricaoCadastrada = controlador.descricao.value;

    cadastro = {
      valor: valorCadastrado,
      tipo: tipoCadastrado,
      descricao: descricaoCadastrada,
    };

    cadastros.push(cadastro);

    valorCadastrado = "";
    tipoCadastrado = "";
    descricaoCadastrada = "";

}))

/* Despesas */
// FUNCIONALIDADES FALTANDO: Filter.

const despesaPorTipo = (() => {
    let despesaDetalhada = document.getElementById("despesas-lista");
    let d = document.getElementById("despesas-tipo");
    let tipoSelecionado = d.options[d.selectedIndex].value;

    const despesaPorTipo = cadastros.filter((despesa) => {
        tipoSelecionado2 = despesa.tipo === `${tipoSelecionado}`;
    }); 

    for (i; i <= contadorArray;) {
        despesaDetalhada.innerHTML += `<div>${cadastro[i].valor}</div>`;
    }
})

const despesasDetalhadas = (() =>{
    let despesaDetalhada = document.getElementById("despesas-lista");
    let valorExtrato = document.getElementById("valor-total");



    for (i; i <= contadorArray;) {
        despesaDetalhada.innerHTML += "<li id='despesas-lista-header'>" + "<p>" + `R$${cadastros[i].valor} ` + "</p>" + "<p>" + `${cadastros[i].tipo}` + "</p>" + "<p>" + `${cadastros[i].descricao}` + "</p>" + "</li>";
        valorTotal += Number(cadastros[i].valor); 
        contadorArray++;
        i++;
        valorExtrato.innerHTML = valorTotal;
    }

})

function enterBotaoCadastro(event) {
    if (event.key === 'Enter') {
    let postConfirmation = confirm("Tem certeza que deseja cadastrar esta despesa?");
    if (postConfirmation == true) {
      cadastrar();
      despesasDetalhadas();
    } else if (postConfirmation == false) {
      console.log("Confirmação negada.");
    }
  }
}

function cliqueBotaoCadastro() {
    postConfirmation = confirm("Tem certeza que deseja cadastrar esta despesa?");
  if (postConfirmation == true) {
    cadastrar();
    despesasDetalhadas();
  } else {
    console.log("Confirmação negada.");
  }
}

function cliqueDespesasDetalhadas() {
  postConfirmation = confirm("Tem certeza que deseja cadastrar esta despesa?");
  if (postConfirmation == true) {
    despesaPorTipo();
  } else {
    console.log("Confirmação negada.");
  }
}



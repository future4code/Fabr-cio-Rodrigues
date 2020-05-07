/* CADASTRO */
//FUNCIONALIDADES FALTANDO: submit com enter, limpar inputs a cada submit.

const controlador = {  
    valor: document.getElementById("controlador-valor"),
    tipo: document.getElementById("controlador-tipo"),
    descricao: document.getElementById("controlador-descricao"),
}

let cadastros = []

// sintaxe de push: cadastros.push({valor: x, tipo: y, descricao: z})

const cadastrar = ((cadastro => {
    let valorCadastrado = controlador.valor.value;
    let tipoCadastrado = controlador.tipo.value;
    let descricaoCadastrada = controlador.descricao.value;

    cadastro = {
      valor: "R$" + valorCadastrado,
      tipo: tipoCadastrado,
      descricao: descricaoCadastrada,
    };

    cadastros.push(cadastro);

    valorCadastrado = "";
    tipoCadastrado = "";
    descricaoCadastrada = "";

}))

const despesasDetalhadas = (() =>{
    let display = cadastros.text;
    let despesaDetalhada = document.getElementById("despesas-txtbox");

    despesaDetalhada.innerHTML += "despesas" + cadastros.valor;
    
})

function cliqueBotaoCadastro() {
  let subscriptionConfirmation = confirm(
    "Tem certeza que deseja cadastrar esta despesa?"
  );
  if (subscriptionConfirmation == true) {
    cadastrar();
    despesasDetalhadas();

  } else {
    console.log("Confirmação negada.");
  }
}
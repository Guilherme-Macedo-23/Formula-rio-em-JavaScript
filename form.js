  function abrir()
    {
    var mensagem="Clique aqui!";
    document.getElementById("linkformulario").innerHTML=mensagem;
  }
  function fechar()
  {
      alert("Apenas clientes maiores de idade poderão participar das promoções");
      window.close();
  }

function validar() {

  //obter a referência dos valores
  var nome = document.getElementById("name").value;
  var apelido = document.getElementById("nickname").value;
  var dia = document.getElementById("day").value;
  var identidade = document.getElementById("cpf").value;

  //condicional para validação
  if(nome == "" || name.lenght < 2 || name.lenght > 20) alert("Digite o seu nome entre 2 e 20 caracteres");
  if(apelido == "") alert("Digite seu apelido");
  if(dia == "") alert("Digite sua data de nascimento");
  if(identidade == "") alert("Digite o seu CPF"); 
}
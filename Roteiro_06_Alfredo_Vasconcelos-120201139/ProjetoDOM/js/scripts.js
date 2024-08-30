//Etapa 1: Modificar o conteúdo de parágrafos. Se algum dos inputs não estiver preenchido, não modifique o seu respectivo texto.
//Dica01: Utilize a propriedade "textContent" para modificar o texto de um parágrafo.
//Dica02: Utilize a propriedade "value" para recuperar a informação preenchida nos campos de input.
const alterarTextos = () => {
  const input1 = document.getElementById("input1");
  const texto1 = document.getElementById("texto1");
  if (input1.value) texto1.textContent = input1.value;

  const input2 = document.getElementById("input2");
  const texto2 = document.getElementById("texto2");
  if (input2.value) texto2.textContent = input2.value;

  const input3 = document.getElementById("input3");
  const texto3 = document.getElementById("texto3");
  if (input3.value) texto3.textContent = input3.value;
};

//Etapa 2: Adicionar e remover elementos no final da lista de itens
//Dica01: Utilize o método createElement para criar li
//Dica02: Utilize a propriedade "textContent" do li para modificar o seu conteúdo
//Dica03: Utilize a propriedade "ul.children.length" para saber a quantidade de itens na lista
//Dica04: Utilize a propriedade "ul.appendChild" para adicionar o li na lista
function adicionarItem() {
  const lista = document.getElementById("listaItens");

  const newLi = document.createElement("li");
  lista.appendChild(newLi);

  const newContent = document.createTextNode(`Item ${lista.children.length}`);
  newLi.appendChild(newContent);
}

//Dica05: Utilize as propriedades "ul.removeChild" e "ul.lastChild" para fazer remoções de li na lista
//Dica06: Lembre-se de só deixar remover se a lista tiver pelo menos um elemento
function removerItem() {
  const lista = document.getElementById("listaItens");
  console.log(lista.children.length);
  if (lista.children.length > 1) lista.removeChild(lista.lastChild);
}

//Etapa 3: Modificar estilos de inputs do tipo text
//Obrigatório: Uso de callback function para alterar a cor de fundo de todos os inputs
//Dica01: Utilize a propriedade "style.backgroundColor" para modificar a cor de fundo dos inputs
function mudarCorFundo() {
  const inputs = document.querySelectorAll('input[type="text"]');
  inputs.forEach((elem) => {
    elem.style.background = document.getElementById("inputCor").value;
  });
}

//Etapa 4: Ocultar e Exibir Elementos
//Dica01: Utilize a propriedade "style.display" e o valor da variável estilo para ocultar ou exibir a imagem
function ocultarImagem() {
  estilo = "none";
  document.getElementById("imagem").style.display = estilo;
}

function exibirImagem() {
  estilo = "block";
  document.getElementById("imagem").style.display = estilo;
}

//Etapa 4: Mover elementos na página
//Dica01: Utilize apenas as propriedades "box.style.left" e "box.style.top" para fazer a movimentação do elemento
function mover(direcao) {
  const box = document.getElementById("divDeslizavel");
  let left = parseInt(window.getComputedStyle(box).left) || 0;
  let top = parseInt(window.getComputedStyle(box).top) || 0;

  switch (direcao) {
    case "esquerda":
      box.style.left = `${left - 10}px`;
      break;
    case "direita":
      box.style.left = `${left + 10}px`;
      //TODO
      break;
    case "cima":
      box.style.top = `${top - 10}px`;
      //TODO
      break;
    case "baixo":
      box.style.top = `${top + 10}px`;
      //TODO
      break;
  }
}

//Exercício 6: Trocar Classe de Elementos
//Dica01: Utilize a propriedade "p.classList.toggle" para fazer a alternância
function alternarClasse() {
  const p = document.getElementById("classeParagrafo");
  p.classList.toggle("classeAzul");
  p.classList.toggle("classeVermelha");
  if (p.classList == "classeAzul")
    p.textContent = "Este parágrafo é da classe azul.";
  if (p.classList == "classeVermelha")
    p.textContent = "Este parágrafo é da classe vermelho.";
}

//Exercício 7: Galeria de Imagens com Zoom
//Dica01: Utilize a função replace para substitutir o 100 por 300 no valor de src da imagem
function mostrarImagemMaior(img) {
  const imagemMaior = document.getElementById("imagem-maior");
  imagemMaior.src = img.src.replace("100", "300");
}

// Exercício 8: Validação de Formulário
//Obrigatório: É preciso aplicar estratégias de validação dos valores dos quatro campos do formulário.
//Pelo menos: não aceitar nome vazio, o cpf precisa estar mascarado e com 14 dígitos,
//o email precisa ter pelo menos um @ e um ponto duas posições após o @ e a senha não deve conter menos que 8 caracteres.
function validarFormulario() {
  const erro = document.getElementById("mensagem-erro");

  const nome = document.getElementById("nome").value;
  if (nome.trim() == "") {
    erro.textContent = "nome vazio";
    return false;
  }

  const cpf = document.getElementById("cpf").value;
  if (cpf.length != 14) {
    erro.textContent = "cpf precisa 14 dígitos";
    return false;
  }
  if (!cpf.match(/^([0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2})$/)) {
    erro.textContent = "cpf invalido";
    return false;
  }

  const email = document.getElementById("email").value;
  if (
    !email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  ) {
    erro.textContent = "email invalido";
    return false;
  }

  const senha = document.getElementById("senha").value;
  if (senha.length < 8) {
    erro.textContent = "senha precisa de no minimo 8 digitos";
    return false;
  }
  erro.textContent = "";
  return true;
}

// Exercício 9: Contador Incremental
//Dica01: Utilize a propriedade "textContent" para modificar o texto de um parágrafo.
//Desafio01: Implemente a geração da música "Um Elefante Incomodaa Muita Gente"
//quando o número de versos for maior que 9, a função deve colocar reticência (...) para o caso
//do número de "incomodam" ser maior ou igual a 10.
let contador = document.getElementById("contador").textContent;
function incrementar() {
  contador++;
  document.getElementById("contador").textContent = contador;
  geraMusicaElefante()
}

function decrementar() {
  if (contador > 0) {
    contador--;
    document.getElementById("contador").textContent = contador;
    geraMusicaElefante()
  }
}

function geraMusicaElefante() {
  let letra = "";

  for (let i = 1; i <= contador; i++) {
    if (i === 1) {
      letra += `${i} elefante incomoda muita gente.\n`;
    } else if (i <= 9) {
        if(i%2 == 0) {
            let incomodam = "incomodam ".repeat(i).trim();
            letra += `${i} elefantes ${incomodam} muito mais.\n`;
        } else {letra += `${i} elefantes incomodam muita gente.\n`;}
    } else {
        if(i%2 == 0) {
            letra += `${i} elefantes incomodam ... muito mais\n`;
        } else {letra += `${i} elefantes incomodam muita gente.\n`;}
    }
  }
  console.log(document.getElementById("paragrafoMusica").textContent)
  document.getElementById("paragrafoMusica").textContent = letra
}

// Exercício 10: Filtrar Itens de uma Lista com callback e arrow function
//Dica01: Utilize a propriedade "textContent" para modificar o texto de um parágrafo.
//Desafio02: Transforme a lista de itens em objetos (professor: nome, area, laboratorio, disciplina) e utilize o filtro para atuar considerando todos os atributos do projeto.
function filtrarItens() {
  const filtro = document.getElementById("filtro").value.toLowerCase();
  const itens = document
    .getElementById("lista-professores")
    .getElementsByTagName("li");
  [...itens].forEach((li) => {
    if (li.textContent.toLowerCase().indexOf(filtro) > -1) {
      li.style.display = "";
    } else li.style.display = "none";
  });
}

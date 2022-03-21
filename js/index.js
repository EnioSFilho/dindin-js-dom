
// ----------------------------------------------------------------------
// 1 Exercicio realizado
// O header deve ter cor de fundo #2E948A

let header = document.getElementsByTagName('header')

// console.log(header[0]);

header[0].style.backgroundColor = '#2E948A';

// 2 Exercicio No menu do header, está faltando o link do item Cursos que deve redirecionar
// para cursos.html

let link = document.querySelector('#menu_opcoes nav a:nth-child(1)')

link.setAttribute('href', 'cursos.html')
// console.log(link)



// Home ------------------------------------------------------------------------------
// 1. No banner da home, está faltando centralizar os elementos filhos da section que
// tem o id #introducao.






// 2. Na etapa de depoimentos, o título deveria ser 'O que falam sobre nós'.

let texto = document.querySelector(`.titulo.depoimento h3`);

texto.innerHTML="O que falam sobre nós ";



// 3. Na etapa de blog, o título deveria ser "Mais conteúdo pra você".

let blog = document.querySelectorAll('.titulo h3')

blog[1].innerHTML = 'Mais conteúdo pra você';



// 4. Todos os textos que estiverem com a classe .titulo devem apresentar todas as
// letras maiúsculas.

let maiusculas = document.querySelectorAll('.titulo h3')

maiusculas[0].innerHTML = 'O QUE FALAM SOBRE NÓS'
maiusculas[1].innerHTML = 'MAIS CONTEÚDO PARA VOCÊ'



// 5. o botão "ver todos os posts" deve ter um link que direciona para o arquivo
// blog.html

let todos = document.querySelector('#todos_posts')

todos.setAttribute('href', 'blog.html')


// 6. Adicionar um novo curso na section que contém o id
// investimentos_poupando_independencia:

let add = document.querySelectorAll('#investimentos_poupando_independencia')



// Página Contato

// 1. O formulário não está funcionando, o atributo action deve mandar para url
// sucesso.html

let action = document.getElementsByTagName('form');

action.setAttribute('action', 'sucesso.html')



// 2. Após o campo de email, precisamos de um novo campo para que o usuário
// adicione também um número de telefone.

// 3. O campo de mensagem está ultrapassando o tamanho do elemento pai.
// Podemos resolver adicionando o atributo box-sizing: border-box;

// 4. O botão não está do tamanho adequado, precisa ter uma largura maior;

let botao = document.getElementById('enviar')

botao.style.color ='black'

console.log(botao)

// 5. Abaixo da section do formulário, adicione uma seção de comentário igual a
// página Home.





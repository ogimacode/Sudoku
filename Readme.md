Manual do Usuário

O manual tem como objetivo explicar de maneira simples como funciona a utilização do projeto para os usuários.

Tela Inicial

Ao acessar o localhost, a tela inicial é mostrada, apresentando duas opções:

Login: Para usuários já cadastrados.

Clique no botão "Login" para acessar a página de login.
Insira seu apelido na caixa "Username" e sua senha na caixa "Password".
Após preencher as caixas de texto, clique em "Login".
Para retornar à página inicial, clique em "Exit".
Signup: Para usuários sem cadastro.

Clique no botão "Signup" para acessar a página de registro.
Insira um apelido na caixa "Username" e uma senha na caixa "Password".
Após preencher as caixas de texto, clique em "Signup".
Para retornar à página inicial, clique em "Exit".
Regra Especial do Sudoku

O Sudoku gerado pelo algoritmo possui uma peculiaridade adicional nas regras do jogo:

O usuário deve preencher o sudoku de forma "crescente", ou seja, com os números de 1 a 9.
Cada número de 1 a 9 deve ser repetido exatamente 9 vezes ao longo do jogo.
A linha "Current number to insert" indica qual número deve ser inserido no momento.
Página do Sudoku

Após o usuário se cadastrar e logar em sua sessão, um tabuleiro de sudoku tradicional será exibido na tela, com as seguintes opções disponíveis:

Create Game: Gera uma matriz de sudoku válida para começar a jogar.
Solve: Resolve o tabuleiro gerado, preenchendo todas as células corretamente.
Reset: Remove todos os números inseridos pelo usuário.
Clean: Remove todos os números das células, incluindo os gerados para o tabuleiro.
Validate: Verifica se o sudoku está válido a qualquer momento. Uma mensagem de "Sudoku is invalid" aparecerá se houver algum número inserido que não siga as regras do sudoku; caso contrário, aparecerá "Sudoku is valid".
Exit: Retorna para a tela inicial.
# RequestsWithJavaScript

## ->Página web onde o usuário informa seu estado, cidade e rua. Retornando uma tabela com o CEP, bairro e de todos os registros da requisição.

- No arquivo .html foram criados:
  - Estrutura padrão do html;
  - uma tag h1 que foi usado como cabeçalho da página;
  - uma tag div com o id="form" que possui os inputs para a entrada de dados do usuário;
  - uma tag div com id="teste" para guardar a tabela que será retornada pelo arquivo javaScript com as informações de cep, bairro e nome das ruas;
  - tag script que chama o arquivo teste.js.
    
- No arquivo .css foram criados:
  - A divisão de pixels para computadores, tablets e celulares;
  - Estilização do cabeçalho, tag div com id="form", tag div com id="teste", input, b, p.
    
- No arquivo .js foram feitos:
    - A partir do momento o usuário clica no botão um envento e disparado chamando a função do js;
    - Depois é feita a requisição com os dados fornecidos pelo usuário recuperados pelo arquivo.js;
    - Depois pegamos todos os valores rernados em forma de json e fazemos o parse;
    - Logo em seguida criamos uma tabela e adicionamos seu cabeçalho;
    - Logo em seguida fizemos um for para pegar e passar para a tabela;
    - Depois passamos a tabela do arquivo js para o arquivo html para div com id="test".

## ->Funcionamento

- Página antes da requisição:
<img src="https://github.com/LeticiaKOSilva/RequestsWithJavaScript/blob/main/Imagens/pagina.png" width="900px">

- Página depois da requisição:
<img src="https://github.com/LeticiaKOSilva/RequestsWithJavaScript/blob/main/Imagens/requisicaoFeita.png" width="900px">
  

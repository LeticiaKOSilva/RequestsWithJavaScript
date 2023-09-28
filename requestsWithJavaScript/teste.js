var btn = document.querySelector("#btn");

/*Essa função começa a ser executada apartir do momento em que o botão "Procurar" e precionado pelo usuário*/
btn.onclick = function(){
    
    var estado = document.getElementById("estado")
    var cidade = document.getElementById("cidade")
    var rua = document.getElementById("rua")
    var tabela = document.getElementById("tabela")
    var req = new XMLHttpRequest();

    req.onloadend = function(){
        resp = req.responseText;
        console.log(resp)
        resp_obj = JSON.parse(resp);
        /*Mensagem usada para teste
            alert('O CEP ' + resp_obj.cep + ' pertence à rua ' +
            resp_obj.logradouro + ' do bairro ' + resp_obj.bairro);
        */

        /*Cria uma nova tebela*/
        var newTable = document.createElement("table");
        
        /*Cria cabeçalho da tabela */
        var cabecalho = newTable.createTHead();
        var cabecalhoRow = cabecalho.insertRow();
        cabecalhoRow.innerHTML = '<th>Cep</th><th>Rua</th><th>Bairro</th>'
        
        /*Preenchendo a tabela*/
        for(var index = 0; index < resp_obj.length; index++){
            var line = newTable.insertRow();
            var column1 = line.insertCell(0);
            var column2 = line.insertCell(1);
            var column3 = line.insertCell(2);
            column1.innerHTML = resp_obj[index].cep;
            column2.innerHTML = resp_obj[index].logradouro;
            column3.innerHTML = resp_obj[index].bairro;    
        }
        /*
            Pega o id da div ="test" limpa a tabela para caso o usuário perquisar um novo valor em seguida
            e coloca todo o conteúdo na tabela
        */
        var table = document.getElementById('test');
        table.innerHTML = '';
        table.appendChild(newTable);
    }
    /*Chama a API de requisição para procurar e retornar um json com determinado estado, cidade e rua*/ 
    req.open('GET','https://viacep.com.br/ws/' + estado.value + '/' + cidade.value + '/' + rua.value + '/json/');
    req.send(null);
}
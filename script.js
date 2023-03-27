function adicionar() {
    var produto = prompt('Qual é o seu produto?');
    var quantia = prompt('Qual é a quantia?');
    var resultado = document.querySelector('#resultado');
    var quantidade = document.querySelector('#quantidade');
  
    if (confirm('Deseja adicionar o nome: ' + produto + ' ' + quantia + '?')) {
      alert('Você adicionou com sucesso!');
      resultado.innerHTML = produto;
      var novoProduto = document.createElement('td')
      novoProduto.className = 'add'
      novoProduto.innerHTML = produto
  
      quantidade.innerHTML = quantia
      var novaQuantia = document.createElement('td')
      novaQuantia.className = 'add'
      novaQuantia.innerHTML = quantia
  
      var novaLinha = document.createElement('tr');
      novaLinha.appendChild(novoProduto);
      novaLinha.appendChild(novaQuantia);
  
      var tabela = document.querySelector('table');
      tabela.appendChild(novaLinha);
  
      var botaoApagar = document.createElement('button')
      botaoApagar.className = 'apagar'
      botaoApagar.innerHTML = 'Apagar'
  
      botaoApagar.addEventListener('click', apagar);
  
      novaLinha.appendChild(botaoApagar);

      var botaoeditar = document.createElement('button')
      botaoeditar.className = 'editar'
      botaoeditar.innerHTML = 'Editar'
  
      botaoeditar.addEventListener('click', editar);
  
      novaLinha.appendChild(botaoeditar);
  
    } else {
      alert('Você clicou em Cancelar ou fechou a caixa de diálogo.');
    }
  }
  
  function apagar() {
    var linha = document.querySelector('tr:last-child');
    linha.remove();
  }

  function editar(){
    var produto = prompt('Qual é o seu produto?');
    var quantia = prompt('Qual é a quantia?');
    var resultado = document.querySelector('#resultado');
    var quantidade = document.querySelector('#quantidade');

    if (confirm('Deseja editar o nome: ' + produto + ' ' + quantia + '?')) {
        alert('Você editou com sucesso!');
        resultado.innerHTML = produto;
        var novoProduto = document.createElement('td')
        novoProduto.className = 'add'
        novoProduto.innerHTML = produto
    
        quantidade.innerHTML = quantia
        var novaQuantia = document.createElement('td')
        novaQuantia.className = 'add'
        novaQuantia.innerHTML = quantia
    
        var novaLinha = document.createElement('tr');
        novaLinha.appendChild(novoProduto);
        novaLinha.appendChild(novaQuantia);
  }else{

  }
}
let listaNomes = []
let listaSorteioOriginal = document.getElementById('lista-sorteio').value;
let amigosIncluidos = document.getElementById('lista-amigos').value;
function adicionar() {
    if (listaNomes.includes(document.getElementById('nome-amigo').value)) {
        alert('Este nome já foi adicionado ao sorteio, informe outro!');
    } else {
        if (document.getElementById('nome-amigo').value == '') {
            alert('Por favor preencha um nome no campo!');
        } else{
            listaNomes.push(document.getElementById('nome-amigo').value);
            document.getElementById('lista-amigos').innerHTML = listaNomes;
            document.getElementById('nome-amigo').value = '';
        }
        }
    }
    
function sortear() {
    if (listaNomes.length < 3) {
        alert('Adicione pelo menos 3 amigos');
    } else {
        embaralhar(listaNomes);
    document.getElementById('lista-sorteio').innerHTML = ''
    let i = 0
    let sorteio = document.getElementById('lista-sorteio');
    while (i != listaNomes.length) {
        if (i == listaNomes.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + listaNomes[i] + ' --> ' + listaNomes[0] + ' <br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + listaNomes[i] + ' --> ' + listaNomes[i + 1] + ' <br>';
        }
        i++
        
    }
    }
    
}
function embaralhar(array) {
    array.sort(() => Math.random() - 0.5);
  }

  function reiniciar() {
    listaNomes = [];
    amigosIncluidos = '';
    listaSorteioOriginal = '';
    document.getElementById('lista-amigos').innerHTML = amigosIncluidos;
    document.getElementById('lista-sorteio').innerHTML = listaSorteioOriginal;
    document.getElementById('nome-amigo').value = '';
  }


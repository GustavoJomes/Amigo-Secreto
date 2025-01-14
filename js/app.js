let listaNomes = []
let listaSorteioOriginal = document.getElementById('lista-sorteio').value;
let amigosIncluidos = document.getElementById('lista-amigos').value;
function adicionar() {
    listaNomes.push(document.getElementById('nome-amigo').value);
    document.getElementById('lista-amigos').innerHTML = listaNomes;
}
function sortear() {
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
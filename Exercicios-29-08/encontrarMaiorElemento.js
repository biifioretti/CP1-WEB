function encontrarMaiorElemento(array) {
    // Verificamos se o array está vazio e lançamos um erro se estiver
    if (array.length === 0) {
        throw new Error("O array não pode estar vazio.");
    }
    // Inicializamos o maior elemento como o primeiro do array
    var maior = array[0];
    // Iteramos pelos elementos do array para encontrar o maior
    for (var i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i]; // Atualizamos o maior se o elemento atual for maior
        }
    }
    // Retornamos o maior elemento encontrado
    return maior;
}
// Exemplo de uso:
var maiorNumero = encontrarMaiorElemento([10, 20, 30]); // 30
var maiorPalavra = encontrarMaiorElemento(['gato', 'elefante', 'zebra']); // 'zebra'
console.log(maiorNumero); // Imprime 30
console.log(maiorPalavra); // 'zebra'

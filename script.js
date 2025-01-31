let saldo = 0;
let entradas = 0;
let saidas = 0;

function adicionarTransacao() {
    const descricao = document.getElementById("descricao").value;
    const valor = parseFloat(document.getElementById("valor").value);

    if (!descricao || isNaN(valor)) return;

    const lista = document.getElementById("historico-lista");
    const item = document.createElement("li");
    item.textContent = `${descricao}: R$ ${valor.toFixed(2)}`;
    lista.appendChild(item);

    if (valor > 0) {
        entradas += valor;
        document.getElementById("entradas-valor").textContent = `R$ ${entradas.toFixed(2)}`;
    } else {
        saidas += Math.abs(valor);
        document.getElementById("saidas-valor").textContent = `R$ ${saidas.toFixed(2)}`;
    }

    saldo += valor;
    document.getElementById("saldo-valor").textContent = `R$ ${saldo.toFixed(2)}`;

    // Limpa os campos após adicionar
    document.getElementById("descricao").value = "";
    document.getElementById("valor").value = "";
}

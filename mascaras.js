function formatarMoeda(elemento) {
  let valor = elemento.value;

  // 1. Remove tudo que não for número
  valor = valor.replace(/\D/g, "");

  if (valor === "") {
    elemento.value = "";
    return;
  }

  // 2. Converte para número e divide por 100 para ter os centavos
  valor = (parseInt(valor) / 100).toFixed(2) + "";

  // 3. Troca o ponto da conta (1234.50) pela vírgula (1234,50)
  valor = valor.replace(".", ",");

  // 4. Adiciona o ponto de milhar (RegEx: olha grupos de 3 números)
  valor = valor.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");

  // 5. Adiciona o R$ na frente
  elemento.value = "R$ " + valor;
}

// --- MÁSCARAS ---
function mascaraCPF(i) {
  let v = i.value.replace(/\D/g, "");
  v = v.replace(/(\d{3})(\d)/, "$1.$2");
  v = v.replace(/(\d{3})(\d)/, "$1.$2");
  v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  i.value = v;
}
function mascaraTelefone(i) {
  let v = i.value.replace(/\D/g, "");
  v = v.replace(/^(\d\d)(\d)/g, "($1) $2");
  v = v.replace(/(\d{5})(\d)/, "$1-$2");
  i.value = v;
}

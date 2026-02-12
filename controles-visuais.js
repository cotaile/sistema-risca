function toggleAreaVenda() {
  const area = document.getElementById("area-nova-venda");
  const btn = document.getElementById("btn-venda");
  const icone = document.getElementById("icone-btn-venda");
  const text = document.getElementById("text-btn-venda");

  // Se estiver escondido (none), mostramos (block)
  if (area.style.display === "none") {
    area.style.display = "block";

    // 2. Muda o Botão para VERMELHO (Adiciona classe)
    btn.classList.remove("btn-nova-venda-estilo-lindo");
    btn.classList.add("btn-nova-venda-estilo-lindo-cancelar");

    // 3. Muda Texto e Ícone
    text.innerText = "CANCELAR VENDA";
    icone.innerText = "close"; // Ícone de X

    // Opcional: focar no primeiro campo automaticamente
    setTimeout(() => document.getElementById("busca-cpf").focus(), 100);
  }
  // Se estiver visível, escondemos
  else {
    area.style.display = "none";

    // 2. Muda o Botão para VERMELHO (Adiciona classe)
    btn.classList.remove("btn-nova-venda-estilo-lindo-cancelar");

    // 3. Volta Texto e Ícone originais
    text.innerText = "NOVA VENDA";
    icone.innerText = "add_shopping_cart"; // Ícone de Carrinho

    limpezaCamposVisuais();
  }
}

function limpezaCamposVisuais() {
  const area = document.getElementById("area-nova-venda");
  const btn = document.getElementById("btn-venda");
  const icone = document.getElementById("icone-btn-venda");
  const text = document.getElementById("text-btn-venda");

  //Fecha o botão novo cadastro
  document.getElementById("area-carrinho").classList.remove("hidden");
  document.getElementById("btn-novo-cadastro").classList.add("hidden");

  area.style.display = "none";

  // 2. Muda o Botão para VERMELHO (Adiciona classe)
  btn.classList.remove("btn-nova-venda-estilo-lindo-cancelar");

  // 3. Volta Texto e Ícone originais
  text.innerText = "NOVA VENDA";
  icone.innerText = "add_shopping_cart"; // Ícone de Carrinho

  // Limpa campos visuais
  document.getElementById("busca-cpf").value = "";
  document.getElementById("area-carrinho").classList.add("hidden"); // Esconde a área de venda
  document.getElementById("resultado-cliente").innerHTML = "";
  document.getElementById("qtd-produto").value = 1;
  document.getElementById("preco-custom-produto").value = "";
  document.getElementById("select-produto").value = "";

  //Limpa o carrinho com os produtos
  const tb = document.getElementById("lista-carrinho");
  tb.innerHTML = "";

  //Zera o valor total da venda
  carrinho = [];
  document.getElementById("valor-total-venda").innerText = "R$ 0,00";
}

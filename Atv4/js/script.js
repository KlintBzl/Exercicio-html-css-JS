const frm = document.querySelector("form");
const resposta = document.querySelector("h2");

function verificarGenero() {
  const radios = document.getElementsByName("decidir");
  let valorSelecionado = null;

  for (const radio of radios) {
    if (radio.checked) {
      valorSelecionado = radio.value;
      break;
    }
  }

  if (valorSelecionado) {
    alert("Gênero selecionado: " + valorSelecionado);
  } else {
    alert("Nenhuma opção selecionada.");
  }
}

frm.addEventListener("submit", (e) => {
e.preventDefault();

verificarGenero();

    

})
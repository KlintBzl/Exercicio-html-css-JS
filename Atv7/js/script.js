document.getElementById('form-lista').addEventListener('submit', function(e) {
      e.preventDefault(); // Evita o recarregamento da página

      const itemInput = document.getElementById('item');
      const itemTexto = itemInput.value.trim();

      if (itemTexto === '') {
        alert('Por favor, digite um item válido.');
        return;
      }

      const lista = document.getElementById('lista-compras');
      const novoItem = document.createElement('li');
      novoItem.textContent = itemTexto;
      lista.appendChild(novoItem);

      itemInput.value = ''; // Limpa o campo
      itemInput.focus();    // Foca novamente no input
    });
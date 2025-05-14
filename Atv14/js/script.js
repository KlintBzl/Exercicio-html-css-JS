function sortear() {
      const min = parseInt(document.getElementById('min').value);
      const max = parseInt(document.getElementById('max').value);
      const resultado = document.getElementById('resultado');

      if (isNaN(min) || isNaN(max)) {
        resultado.textContent = "Por favor, insira valores válidos.";
        return;
      }

      if (min > max) {
        resultado.textContent = "O valor mínimo deve ser menor ou igual ao máximo.";
        return;
      }

      const numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;
      resultado.textContent = `🎲 Número sorteado: ${numeroSorteado}`;
    }
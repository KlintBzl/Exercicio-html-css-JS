const frm = document.querySelector("form")

frm.addEventListener("submit", (e) => {
e.preventDefault();
      const inicio = parseInt(document.getElementById("inicial").value);
      const fim = parseInt(document.getElementById("final").value);
      let passo = parseInt(document.getElementById("valor").value);
      const resultado = document.querySelector("h2");


      

      if (inicio < fim) {
        for (let i = inicio; i <= fim; i += passo) {
          resultado.innerHTML += `${i} `;
        }
      } else {
        for (let i = inicio; i >= fim; i -= passo) {
          resultado.innerHTML += `${i} `;
        }
      }

    })
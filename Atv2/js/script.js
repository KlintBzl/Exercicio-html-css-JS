const frm = document.querySelector("form") 
const hagadois = document.querySelector("h2")
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
frm.addEventListener("submit", (e) => {
    
    let maiores = numeros.filter(n => n % frm.valor.value);
    e.preventDefault();
});


hagadois.innerText(` Sequência: ${maiores}`);
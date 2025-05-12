const frm = document.querySelector("form");
const h2 =document.querySelector("h2");

frm.addEventListener("submit", (e) => {

    e.preventDefault();

    const media = (frm.numero1.value * frm.numero2.value * frm.numero3.value) / 3;

    h2.textContent = `Média: ${media}`;
})
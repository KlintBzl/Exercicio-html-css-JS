const frm = document.querySelector("form");
const h2 = document.getElementById("resp");

frm.addEventListener("submit", (e) => {

    e.preventDefault();

    let media = (frm.numero1.value * frm.numero2.value * frm.numero3.value) / 3;

    h2.textcontent = `Média: ${media}`;
})
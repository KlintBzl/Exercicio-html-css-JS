const aga2 = document.querySelector("h2");
const frm = document.querySelector("form")


frm.addEventListener("submit", (e) => {
    
    const txtval = Number(frm.valor.value);
    if(txtval % 2 == 0){
        aga2.innerText = `O número ${txtval} é Par`;
    }else{
        aga2.innerText = `O número ${txtval} é Impar`;
    }
    e.preventDefault;
});
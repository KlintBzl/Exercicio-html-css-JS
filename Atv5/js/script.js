const frm = document.querySelector("form");
const h2 = document.querySelector("h2");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    if(frm.idade.value < 18){
        h2.innerText = "Você é menor de idade";
    }else if(frm.idade.value >= 18 && frm.idade.value < 60){
        h2.innerText = "Você é maior de idade";
    }else{
        h2.innerText = "Você é idoso"
    }

    
})
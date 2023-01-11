const inputText = document.querySelectorAll(".input-text");
const alerta = document.querySelectorAll(".small-required");
const btnEnviar = document.querySelector(".btn");


inputText.forEach(input => {
    input.addEventListener("change", () => {
        if(input.value !== "") {
            input.classList.add("campo-preenchido")
        } else {
            input.classList.remove("campo-preenchido")
        }
    });
});


function setError(index) {
    inputText[index].style.border = "2px solid red";
    alerta[index].style.display = "block";  
};

function removeError(index) {
    alerta[index].style.display = "none";
};


btnEnviar.addEventListener("click", function() {
    inputText.forEach((e, index) => {
        if(e.value === "") {
            setError(index)
        } else {
            removeError(index)
        }
    })
});
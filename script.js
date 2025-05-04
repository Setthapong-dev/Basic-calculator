const buttonsEl = document.querySelectorAll("button");
const inputFieldEl = document.getElementById("result");

for(let i = 0; i < buttonsEl.length; i++){
    buttonsEl[i].addEventListener("click", () => {
        const buttonsvalue = (buttonsEl[i].textContent);
        if(buttonsvalue === "C"){
            clearResault();
        }else if(buttonsvalue==="="){
            calculateResault();
        }else{
            appendValue(buttonsvalue);
        }
    });
}

function clearResault() {
    inputFieldEl.value = "";
}

function calculateResault() {
    inputFieldEl.value = eval(inputFieldEl.value);
}

function appendValue(buttonsvalue) {
    inputFieldEl.value += buttonsvalue;
}
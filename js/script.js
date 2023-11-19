const text = document.querySelector("#qrgenerator-input");
const create = document.querySelector("#qrgenerator-submit");
const container = document.querySelector(".box-container");
const qrCodeImg = document.querySelector("#qrcode-result img");

// Funções

const generateQrcode = () => {
    const textValue = text.value;  

    if(!textValue) return;
    
    create.innerHTML = "Gerando Código..."

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${textValue}`

    qrCodeImg.addEventListener("load", () => {
        container.classList.add("active")
        create.innerHTML = "Código Gerado!"
    })

    text.value = "";
}

// Eventos

create.addEventListener("click", (e) => {
    e.preventDefault()
    generateQrcode();
})

text.addEventListener("keydown", (e) => {
   console.log(e);
})


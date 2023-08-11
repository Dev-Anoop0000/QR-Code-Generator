let img = document.querySelector("img");
let input = document.querySelector("input");
let btn = document.querySelector("button");
let api1 = `https://api.qrserver.com/v1/`;
let api2 = `create-qr-code/?size=150x150&data=`;

btn.addEventListener("click", () => {
    img.src = `${api1}${api2}${input.value}`;
    input.value = "";
});
const button = document.querySelector(".btn");
const body = document.body;

function randomcolor() {
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const generateColor = `rgb(${red},${green},${blue})`;
    return generateColor;
}

button.addEventListener("click", ()=>{
    const randomGenerateColor = randomcolor();
    body.style.backgroundColor = randomGenerateColor;
})

const colors = ["#4ea8de", "#a3cef1", "#b6e2d3", "#f9dbbd", "#f7a072"];
const colorNames = ["Sky Blue", "Light Blue", "Mint Green", "Peach", "Soft Orange"];
const textColors = ["#25618a", "#397ba6", "#4b8c7b", "#c49a6c", "#b85c2b"];


document.querySelector(".color-btn").addEventListener("click",function(){
    const r = Math.floor(Math.random()*256)
    const g = Math.floor(Math.random()*256)
    const b = Math.floor(Math.random()*256)
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    const h4 = document.querySelector("h4");
    h4.textContent = colorNames[randomIndex];
    h4.style.color = textColors[randomIndex];
})


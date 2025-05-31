const colors = ["#4ea8de", "#a3cef1", "#b6e2d3", "#f9dbbd", "#f7a072"];
const colorNames = ["Sky Blue", "Light Blue", "Mint Green", "Peach", "Soft Orange"];
const textColors = ["#25618a", "#397ba6", "#4b8c7b", "#c49a6c", "#b85c2b"];


document.querySelector(".color-btn").addEventListener("click",function(){
    const randomIndex = Math.floor(Math.random()*colors.length)
    document.body.style.backgroundColor = colors[randomIndex];
    const h4 = document.querySelector("h4");
    h4.textContent = colorNames[randomIndex];
    h4.style.color = textColors[randomIndex];
})


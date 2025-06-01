const textColors = ["#25618a", "#397ba6", "#4b8c7b", "#c49a6c", "#b85c2b"];


document.querySelector(".color-btn").addEventListener("click",function(){
    const r = Math.floor(Math.random()*256)
    const g = Math.floor(Math.random()*256)
    const b = Math.floor(Math.random()*256)
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    document.querySelector(".color").textContent = `rgb(${r}, ${g}, ${b})`;
    const colorInstructions= document.querySelector(".color-instruction");
    colorInstructions.textContent = "\u00A0";
})


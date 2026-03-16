// Get buttons
const noBtn = document.getElementById("noBtn");
const yesBtn = document.querySelector(".yes");

// No button runs away
noBtn.addEventListener("mouseover", () => {

    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

});


// When user clicks forgive
yesBtn.addEventListener("click", () => {

    document.getElementById("response").innerHTML =
    "Thank you for being understanding 💙 <br>" +
    "You're an amazing person ✨ <br>" +
    "I promise I'll be more careful next time 🙏";

    createStars();

});


// Create star celebration
function createStars(){

    for(let i=0;i<25;i++){

        let star = document.createElement("div");

        star.innerHTML = "⭐";

        star.style.position = "absolute";
        star.style.left = Math.random()*100 + "vw";
        star.style.bottom = "0";
        star.style.fontSize = "20px";
        star.style.animation = "float 4s linear";

        document.body.appendChild(star);

        setTimeout(()=>{
            star.remove();
        },4000);

    }

}

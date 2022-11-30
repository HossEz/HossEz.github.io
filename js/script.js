// Kilde for responsiv navbar: https://www.youtube.com/watch?v=At4B7A4GOPg

const toggleBtn = document.getElementsByClassName("navtoggleBtn")[0]
const navBars = document.getElementsByClassName("navbars")[0]

toggleBtn.addEventListener("click", ()=> {
    navBars.classList.toggle("active")
})


const closeshareBtn = document.getElementsByClassName("closeshareBtn")[0]
const shareBtn = document.getElementsByClassName("socialMediaBtns")[0]

closeshareBtn.addEventListener("click", ()=> {
    if(shareBtn.style.display === "none"){
        shareBtn.style.display = "flex";
        closeshareBtn.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
    } else {
        shareBtn.style.display = "none";
        closeshareBtn.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';

    }
})


let likeHeart = document.getElementById("like_heart")
let clickImg = document.querySelector(".profile_img")
let heart = document.querySelector(".left_icons span .ri-heart-fill")

clickImg.addEventListener("dblclick",()=>{
    // heart.classList[0]
    likeHeart.style.transform = `translate(-50%,-50%) scale(1)`
    likeHeart.style.opacity = 0.9
    heart.style.opcity = 0.9
    heart.style.transform = `scale(1.3)`
    setTimeout(() => {
        heart.style.transform = `scale(1)`
    },300);
    setTimeout(() => {
        likeHeart.style.opacity = 0
        // heart.style.transform = `scale(1.1)`
    },200);
    setTimeout(() => {
        likeHeart.style.transform = `translate(-50%,-50%) scale(0)`
    },500);
})

heart.addEventListener("click",(e)=>{
e.target.style.transform = `scale(0)`
})
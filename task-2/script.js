let con = document.querySelector("#container")
let love = document.querySelector("i")
let countLikes = 0;
con.addEventListener("dblclick",function(){
    love.style.transform = `translate(-50%,-50%) scale(1)`
    love.style.opacity = 0.8
    setTimeout(() => {
        love.style.opacity = 0
    },200);
    setTimeout(() => {
        love.style.transform = null
    },500);
})



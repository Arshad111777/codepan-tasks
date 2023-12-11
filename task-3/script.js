let cur = document.querySelector(".cursor")
let main = document.querySelector("main")

main.addEventListener("mousemove",function(e){
    cur.style.left = `${e.x}px`
    cur.style.top = `${e.y}px`
})
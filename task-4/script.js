let elem = document.querySelectorAll('.elem')


// elem.forEach((el)=>{
//     el.addEventListener("mouseenter",(e)=>{
//         el.childNodes[3].style.opacity = 1
//     })

//     el.addEventListener("mouseleave",(e)=>{
//         el.childNodes[3].style.opacity = 0
//     })

//     el.addEventListener("mousemove",(e)=>{
//         el.childNodes[3].style.left = `${e.x}px`
//         el.childNodes[3].style.top = `${e.y}px`
//     })
// })


elem.forEach((el)=>{
    el.addEventListener("mouseenter",()=>{
        el.childNodes[3].style.opacity = 1
    })

    el.addEventListener("mouseleave",()=>{
        el.childNodes[3].style.opacity = 0
    })

    el.addEventListener("mousemove",function(e){
        el.childNodes[3].style.left = `${e.x}px`
        el.childNodes[3].style.top = `${e.y}px`
    })
    
})
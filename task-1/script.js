let stat = document.querySelector('h5')
let check = false
let btn = document.querySelector("#add")


btn.addEventListener("click",function(){
    if(!check){
        stat.innerHTML = "Friend"
        stat.style.color = "yellowgreen"
        btn.innerHTML = "Remove Friend"
        check = true
    }else{
        stat.innerHTML = "Stranger"
        stat.style.color = null
        btn.innerHTML = "Add Friend"
        check = false
    }


})



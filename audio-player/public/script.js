
let player = document.getElementById('myPlayer')
const btns = document.querySelectorAll("i")
btns.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        if(e.target.className === 'ri-play-fill'){
            // console.log(player)
            player.play()
            // console.log(player.duration % 60)
            // console.log(e.target)
            e.target.setAttribute('class','ri-pause-line')

        }else if(e.target.className === 'ri-pause-line'){
            player.pause()
            e.target.setAttribute('class','ri-play-fill')
        }

    })
})

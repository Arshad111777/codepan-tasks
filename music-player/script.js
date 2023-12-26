// console.log('test')
let songs = [
    {
      s_name: "Jamal Kudu",
      s_artist: "test",
      s_image: "./images/jamal-kudu.jpg",
    },
  
    {
      s_name: "Leke Prabhu Ka Naam",
      s_artist: "arijit singh",
      s_image: "./images/leke-prabhu-ka-naam.jpg",
    },
  
    {
      s_name: "Ruaan",
      s_artist: "arijit singh",
      s_image: "./images/ruaan.jpg",
    },
  
    {
      s_name: "Sooraj Hi Chhaon Banke",
      s_artist: "test",
      s_image: "./images/sooraj-hi-chhaon-banake.jpg",
    },
  
    {
      s_name: "Tu Jaane Na",
      s_artist: "atif aslam",
      s_image: "./images/Tu-Jaane-Na.jpg",
    },
  ];
  


const myPlayer = document.createElement("audio");
myPlayer.setAttribute("src", "./audio/Ruaan.mp3");
document.body.appendChild(myPlayer);

const musicBtns = document.querySelectorAll(".music-btns i");
let list = document.querySelector(".music-lists-wrapper");
let song = {};

let musicCard = "";
songs.forEach((song, ind) => {
  musicCard += `
    <div class="list-card" id="${ind}">

<div class="list-card-content">
    <img src="${song.s_image}" alt="list-card-img">
    <div class="list-details">
        <p>${song.s_name}</p> 
       <span>${song.s_artist}</span>
    </div>
</div>
<span><i class="ri-more-2-fill"></i></span>
</div>
    `;
  // console.log(song)
  list.innerHTML = musicCard;
});

// Click Card Logic

for (let i = 0; i < list.children.length; i++) {
  list.children[i].addEventListener("click", (e) => {
    changeBg();
    let sid = parseInt(e.currentTarget.id);
    musicBtns[1].classList.replace("ri-pause-line","ri-play-line")
    myPlayer.setAttribute("src", `./audio/${songs[sid].s_name}.mp3`);
    // myPlayer.children[0].setAttribute('src',`./audio/${songs[sid].s_name}.mp3`)
    // console.log(myPlayer)
    // console.log(songs[sid])
    document.querySelector(".card-content img").src = `${songs[sid].s_image}`;
    document.querySelector("#music-title").innerHTML = `${songs[sid].s_name}`;
    document.querySelector(
      "#artist-name"
    ).innerHTML = `By ${songs[sid].s_artist}`;
  });
}

musicBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.className === "ri-play-line") {
      myPlayer.play();
      e.target.setAttribute("class", "ri-pause-line");
    } else if (e.target.className === "ri-pause-line") {
      myPlayer.pause();
      e.target.setAttribute("class", "ri-play-line");
    }
  });
});


document.addEventListener("keyup",(e)=>{
  // console.log(myPlayer.volume)
  let vol = 10;
  if(e.key === 'ArrowUp'){
    console.log('audio increase')
    myPlayer.volume = 1
  }else if(e.key === 'ArrowDown'){
    console.log('audio decrease')
    // myPlayer.volume = 0.5
    myPlayer.volume = 0.2
    // myPlayer.volume = 0
  }else if(e.key === 'b'){
    myPlayer.pause()
    musicBtns[1].classList.replace("ri-pause-line","ri-play-line")
  }else if(e.key === 'p'){
    myPlayer.play()
    musicBtns[1].classList.replace("ri-play-line","ri-pause-line")
  }

})

function changeBg(){
  let rand = Math.floor(Math.random() * 10 + 1)
  document.body.style.backgroundImage = `url(./images/music-bg-${rand}.gif)`;
}

changeBg()

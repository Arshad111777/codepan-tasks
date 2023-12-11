let stories = document.querySelector(".stories")

let profiles = [
    {
        dpImg:"https://images.unsplash.com/photo-1522307837370-cc113a36b784?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        storyImg:"https://images.unsplash.com/photo-1488778578932-0f84d315fcae?q=80&w=1581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    {
        dpImg:"https://images.unsplash.com/photo-1462804993656-fac4ff489837?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        storyImg:"https://images.unsplash.com/photo-1523359346063-d879354c0ea5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    {
        dpImg:"https://images.unsplash.com/photo-1473707669572-40d832255b5e?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        storyImg:"https://images.unsplash.com/photo-1656432606161-41c3071950ca?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    {
        dpImg:"https://images.unsplash.com/photo-1661437800395-46696bb4e279?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        storyImg:"https://images.unsplash.com/photo-1655500957883-ba1736e9ef28?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    {
        dpImg:"https://images.unsplash.com/photo-1584088743546-db0289ee9b07?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        storyImg:"https://images.unsplash.com/photo-1586246698829-4258572d1e76?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
]

let element = ""

profiles.forEach((user,ind)=>{
    element += `
    <div class="story">
    <img id="${ind}" src="${user.dpImg}" alt="profile">
</div>
    `;
})

stories.innerHTML = element


stories.addEventListener("click",(e)=>{
    document.querySelector(".story-img").style.display = "block"
    document.querySelector(".story-img").style.backgroundImage = `url(${profiles[e.target.id].storyImg})`

    setTimeout(() => {
        document.querySelector(".story-img").style.display = "none"
    },7100);
})
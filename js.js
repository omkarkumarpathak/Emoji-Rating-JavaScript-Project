const starEl=document.querySelectorAll(".fa-star")
const emojiEl=document.querySelectorAll(".fa-regular")

starEl.forEach((starEl,index)=>{
    starEl.addEventListener("click",()=>{
        updateRating(index);
    })
})

function updateRating(index){
    starEl.forEach((starEl,idx)=>{
        console.log(idx,index+1)
        if(idx<index+1){
            starEl.classList.add("live")
        }
        else{
            starEl.classList.remove("live")
        }
    })

    emojiEl.forEach((emojiEl)=>{
        emojiEl.style.transform=`translateX(-${50*index}px)`
    })
}

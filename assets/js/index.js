let navEle=document.getElementById("navBtn");
let navLinks=document.querySelectorAll("#navBar>a");

let navCloseEle = document.getElementById("navClose")
let navBar = document.getElementById("navBar")
navEle.addEventListener("click",()=>{
  
   navEle.classList.add("hide")
   navCloseEle.classList.remove("hide")
   navBar.classList.add("show")
  
})
navCloseEle.addEventListener("click",()=>{
    navCloseEle.classList.add("hide")
    navEle.classList.remove("hide")
    navBar.classList.remove("show")
    console.log(navCloseEle)
})
function Menu(){
    console.log(navLinks)
    for(i=0; i<navLinks.length; i++){
        navLinks[i].addEventListener("click",()=>{
            navBar.classList.remove("show")
            navCloseEle.classList.add("hide")
            navEle.classList.remove("hide")
        })
    }
}
Menu()
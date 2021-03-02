const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove",e=> {
  cursor.setAttribute("style", "top:"+e.pageY + "px;left:"+e.pageX+"px");
});
document.addEventListener("click",()=>{
  cursor.classList.add("new");
  setTimeout(()=>{
    cursor.classList.remove("new");
  },500)
})
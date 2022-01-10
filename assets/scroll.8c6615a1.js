const l=document.querySelector(".flex-container");l.addEventListener("wheel",e=>{e.preventDefault(),console.log("scroll horizontal"),l.scrollBy({left:e.deltaY<0?-30:30})});

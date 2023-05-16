// top meno scroll start
let top_meno = document.querySelector(".top_meno");
window.onscroll = function(){
    let SCROLL = window.scrollY;
    if(SCROLL >= 0.1){
        top_meno.classList.add("new_top_meno")
    }else{
        top_meno.classList.remove("new_top_meno")
    }
 }
// top meno scroll end


// footer_errokey start
let footer_errokey = document.querySelector("#footer_errokey");
footer_errokey.addEventListener("click",function(){
    window.scrollTo(0,0)
});
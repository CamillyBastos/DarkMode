var btn = document.querySelector("#btn")

function darkMode(){
    var body = document.querySelector("body");

    body.classList.toggle("darkmode")


   if (body.classList.contains("darkmode")){
       btn.innerHTML = "Desativar"
}else{
    btn.innerHTML = "Ativar"
}
}

btn.addEventListener("click",darkMode)
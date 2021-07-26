//***********************************************
// ******* MOSTRAR NAV BG & GO TOP **************
//***********************************************
let navMain = document.getElementById("nav-main"),
  navRedes = document.getElementById("nav-redes"),
  goTop = document.getElementById("goTop");

window.onscroll = function () {
  if (window.pageYOffset < 20) {
    navMain.classList.remove("scrolled");
    goTop.style.display = "none";
  } else {
    navMain.classList.add("scrolled");
    goTop.style.display = "block";
  }

  if (window.pageYOffset > 700) {
    navRedes.classList.add("show");
    navMain.classList.remove("justify");
  } else {
    navRedes.classList.remove("show");
    navMain.classList.add("justify");
  }
};

goTop.addEventListener("click", () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

//***********************************************
// **************** PRELOADER *******************
//***********************************************
const preloader = document.querySelector(".preloader-bg");

window.addEventListener("load", () => {
  preloader.classList.add("ocultar");
});

//***********************************************
// ********** DESCRIP PROYECTO ITEM**************
//***********************************************
let proyItem = document.querySelectorAll(".proyecto-item");

for (let i = 0; i < proyItem.length; i++) {
  proyItem[i].addEventListener("click", (e) => {
    proyItem[i].classList.add("descrip");
    setTimeout(() => {
      proyItem[i].classList.remove("descrip");
    }, 5000);
  });
}


//***********************************************
// ********** COPIAR AL PORTAPAPELES ************
//***********************************************

let miCorreo = document.getElementById('miCorreo'),
    copiarCorreo = document.getElementById('copiarCorreo'),
    correoCopiado = document.querySelector('.correo label');

const copiarAlPortapapeles = () => {
  var aux = document.createElement('input');
  aux.setAttribute('value', "teq-instalaciones@hotmail.com");
  document.body.append(aux);
  aux.select();
  document.execCommand('copy');
  document.body.removeChild(aux);

  correoCopiado.innerHTML = "¡Correo copiado!";
  setTimeout(() => {
    correoCopiado.innerHTML = ""
  }, 3000);

}

miCorreo.addEventListener('click', copiarAlPortapapeles);
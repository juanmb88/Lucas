/*************CONTACT FORM**************/

((d)=>{
    const $form = d.querySelector(".contact-form");
          $loader = d.querySelector(".contact-form-loader");
          $response = d.querySelector(".contact-form-response");

          $form.addEventListener("submit", e =>{
            e.preventDefault();
            $loader.classList.remove("none");
            /*correo de destino*/
            fetch("https://formsubmit.co/ajax/teq-instalaciones@hotmail.com", {
                method: "POST",
                body: new FormData(e.target),
            })
            .then((res => res.ok ? res.json():Promise.reject(res)))
            .then(json => {
                console.log(json);
                location.hash = "#gracias";
                $form.reset();
            })
            .catch(err => {
             console.log(err);
             let message = err.statusText || "Ocurrio un error al enviar, Intenta nuevamente";
             $response.querySelector("h3").innerHTML = `Error ${err.status}:${message}`;
            }).finally(() =>{
                $loader.classList.add("none");
                setTimeout(() => {
                    location.hash = "#close";
                },2000);
            });
        });
})(document);
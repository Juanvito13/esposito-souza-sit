// Navegação suave pelo menu

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', function(event){

        event.preventDefault();

        const destino = document.querySelector(
            this.getAttribute('href')
        );

        if(destino){

            destino.scrollIntoView({
                behavior:'smooth'
            });

        }

    });

});


// Mensagem de carregamento

window.addEventListener("load", () => {

    console.log(
        "Esposito & Souza Advogados Associados - Site carregado."
    );

});

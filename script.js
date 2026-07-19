// Rolagem suave para os links do menu
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const destino = document.querySelector(this.getAttribute('href'));

    if (destino) {
      destino.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Mensagem no console
console.log("Site Esposito & Souza carregado com sucesso!");

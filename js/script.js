//  aqui eu criei para a palavra "website" do sobre ficar escrevendo sozinho
var typingeffect = new Typed(".digitando", {
  strings: ["WEBSITE"],
  loop: true,
  typeSpeed: 150,
  backSpeed: 100,
  backDelay: 1500,
});

// aqui eu criei para quando clicar no link do cookies a div sumir
const linksCookies = document.getElementsByClassName('linksCookies');
const cookies = document.getElementsByClassName('cookies')[0];

for (let i = 0; i < linksCookies.length; i++) {
  linksCookies[i].addEventListener('click', function(event) {
    event.preventDefault(); 

    if (cookies.style.display === 'none') {
      cookies.style.display = 'block';
    } else {
      cookies.style.display = 'none';
    }
  });
};

// aqui é para dar uma função ao clicar no menu mobile
document.querySelector(".menu-abrir").onclick = function () {
  document.documentElement.classList.add("menu-ativo");
}

document.querySelector(".menu-fechar").onclick = function () {
  document.documentElement.classList.remove("menu-ativo")
}

// carrosel serviços realizados
$('.slide-servRealizados').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  dots: true,
  autoplaySpeed: 3000,
});

$('.slide-avaliacoes').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
});

$('.slide-blog').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
});
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
$('.slide-avaliacoes').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});


$('.slide-servRealizados').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  responsive: [    
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.slide-blog ').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },

    {
      breakpoint: 845,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 380,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.slide-servRealizados').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 380,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});

function linkWhats(){
  var numFone = '5511978456588'
  window.open('https://api.whatsapp.com/send?phone=' + numFone)
}


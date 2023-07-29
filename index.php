<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ascensão Dev</title>

   

    <link rel="stylesheet" href="css/reset.css">

    <link rel="shortcut icon" href="img/fav.png" type="image/x-icon">

    <link rel="stylesheet" href="css/slick.css">
    <link rel="stylesheet" href="css/slick-theme.css">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <link rel="stylesheet" href="css/estilo.css">

    <!-- efeito aos js -->
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">

</head>
<body>

<main>
<?php require_once('conteudo/topo.php'); ?>
<?php require_once('conteudo/sobre.php'); ?>
<?php require_once('conteudo/servicos.php'); ?>
<?php require_once('conteudo/portfolio.php'); ?>
<?php require_once('conteudo/etapas.php'); ?>
<?php require_once('conteudo/trabalheconosco.php'); ?>
<?php require_once('conteudo/avaliacoes.php'); ?>
<?php require_once('conteudo/blog.php'); ?>
</main>

<?php require_once('conteudo/rodape.php'); ?>

<div  data-aos="fade-up"
data-aos-duration="1500" class="cookies">
    <h2>Proteja sua privacidade</h2>
    <span>Neste site usamos Cookies para melhorar sua navegação.</span>
    <ul>
        <a class="linksCookies" href="#">Recusar</a>
        <a class="linksCookies" href="#">Aceitar</a>
    </ul>    
</div>

<div class="whatsapp">
    <a onclick="linkWhats()" href="#"><img src="img/icon-whatsapp.png" alt="Icone Whatsapp"></a>
</div>

<!-- jquery -->
<script src="https://code.jquery.com/jquery-3.7.0.min.js"></script>


<!-- slick animator-->
<script src="js/slick.js"></script>

<!-- escrita animada em js -->
<script src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"></script>

<!-- aos js -->
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

<script>
    AOS.init();
</script>

  <!-- script local -->
<script src="js/script.js"></script>
</body>
</html>
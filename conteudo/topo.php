<!--fazendo o corpo da página-->
<header class="topo site">
    <div class="logo">
    <h1><img src="img/logo.png" alt="logo"></h1>
    </div>
            <button class="menu-abrir"></button>
        <nav class="menu">
            <button class="menu-fechar"></button>

<?php
    $url = $_SERVER['REQUEST_URI'];
    $urlBase = basename($url)
    // echo $urlBase;
?>

        <div>
        <ul>
            <li><a href="index.php" <?php if($urlBase == 'index.php') echo 'class="ativo"'; ?>>Home</a></li>
            <span class="linha"></span>
            <li><a href="servicos.php" <?php if($urlBase == 'sobre.php') echo 'class="ativo"'; ?>>Serviços</a></li>
            <span class="linha"></span>
            <li><a href="portfolio.php" <?php if($urlBase == 'servico.php') echo 'class="ativo"'; ?>>Portfólio</a></li>
            <span class="linha"></span>
            <li><a href="avaliacoes.php" <?php if($urlBase == 'contato.php') echo 'class="ativo"'; ?>>Avaliações</a></li>
            <span class="linha"></span>
            <li><a href="#blog" <?php if($urlBase == 'contato.php') echo 'class="ativo"'; ?>>Blog</a></li>
        </ul>
    </div>

            <span class="linha"></span>

            <a href="#" class="login-menu">Entrar</a>

        </nav>

            <div class="btnMenu">
                <button>Entrar</button>
            </div>
</header>

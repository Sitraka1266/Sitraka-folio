<?php
session_start();
?>

<!DOCTYPE html>
<html lang="fr" data-theme="light">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sitraka RATOVONARIVO</title>
    <link rel="shortcut icon" href="logo/favicon.svg" type="image/*">
    <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="fontawesome-free-6.5.2-web/css/all.min.css">
    
    <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
          
    <link rel="stylesheet" href="devicon-master/devicon.min.css"> 
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="/css/bootstrap.min.css">
     <link rel="stylesheet" href="css/style.css">
</head>

<body>

    <div id="preloader">
        <div class="preloader-cube-grid">
            <div class="preloader-cube preloader-cube1"></div>
            <div class="preloader-cube preloader-cube2"></div>
            <div class="preloader-cube preloader-cube3"></div>
            <div class="preloader-cube preloader-cube4"></div>
            <div class="preloader-cube preloader-cube5"></div>
            <div class="preloader-cube preloader-cube6"></div>
            <div class="preloader-cube preloader-cube7"></div>
            <div class="preloader-cube preloader-cube8"></div>
            <div class="preloader-cube preloader-cube9"></div>
        </div>
        <p class="loading-text">Loading...</p>
    </div>

    <nav class="navbar navbar-expand-lg fixed-top shadow-complex">
        <div class="container">
            <a class="navbar-brand" href="#hero"><img src="logo/favicon.svg" width="50" alt=""> Folio</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#hero">Acceuille</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#a-propos">À propos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#projets">Projets</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contact">Contact</a>
                    </li>
                    <button id="theme-toggle" class="btn btn-outline-secondary btn-sm button-shadow-subtle">
                        <i class="fas fa-moon"></i> <span class="d-none d-lg-inline">Dark mode</span>
                    </button>
                </ul>
            </div>
        </div>
    </nav>

    <section id="hero"
        class="d-flex align-items-center justify-content-center text-center vh-100 position-relative overflow-hidden">
        <div id="heroCarousel" class="carousel slide h-100 w-100" data-bs-ride="carousel" data-bs-interval="5000">
            <div class="carousel-inner h-100">
                <div class="carousel-item active h-100">
                    <img src="img/1749801946371.jpg" class="d-block w-100 h-100 object-fit-cover" alt="Image Hero 1">
                </div>
                <div class="carousel-item h-100">
                    <img src="img/IMG-20250317-WA0007.jpg" class="d-block w-100 h-100 object-fit-cover"
                        alt="Image Hero 2">
                </div>
                <div class="carousel-item h-100">
                    <img src="img/Diary&Diamondra-1143.jpg" class="d-block w-100 h-100 object-fit-cover"
                        alt="Image Hero 3">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Précédent</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Suivant</span>
            </button>
        </div>

        <div class="hero-content position-absolute top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center text-white"
            style="z-index: 2;">
            <h1 class="display-3 mb-4 text-shadow-deep animate-fade-in">Salut je suis Sitraka RATOVONARIVO</h1>
            <p class="lead mb-5 text-shadow-soft animate-fade-in delay-200">Je suis un developpeur web specialiser dans
                le Backend</p>
            <div class="d-flex flex-column flex-md-row gap-3">
                <a href="#projets"
                    class="btn btn-primary btn-lg button-shadow-elevate animate-fade-in delay-400 text-white">Voir mes
                    projets<i class="fas fa-arrow-down ms-2"></i></a>
                <a href="cv/Sitraka's CV.png" download
                    class="btn btn-outline-light btn-lg button-shadow-elevate animate-fade-in delay-500 ">Télecharger
                    mon
                    CV <i class="fas fa-download ms-2"></i></a>
            </div>
        </div>
    </section>


    <section id="a-propos" class="py-5">
        <div class="container">
            <h2 class="text-center mb-5 section-title animate-fade-in">À Propos de Moi</h2>
            <div class="row align-items-center">
                <div class="col-md-4 text-center mb-4 mb-md-0 animate-fade-in delay-100">
                    <img src="img/profil.jpg" alt="Votre Photo" class="img-fluid rounded-circle profile-img-shadow">
                </div>
                <div class="col-md-8 animate-fade-in delay-200">
                    <p class="lead">Je suis un développeur web passionné, animé par une fascination pour le
                        fonctionnement interne des systèmes numériques. Mon objectif est de concevoir des solutions web
                        robustes, fiables et efficaces qui constituent le cœur de toute application. 
                        <br><br> J'aime relever les défis complexes et les transformer en un code bien
                        structuré
                        et hautement performant. Mon approche est axée sur une conception technique rigoureuse et la
                        création de bases solides pour des applications web durables. <br><br> Je suis toujours désireux
                        d'élargir mes compétences et d'apporter une contribution significative
                        au sein d'une équipe collaborative. Si vous recherchez quelqu'un d'engagé à bâtir les fondations
                        solides de logiciels web innovants, je serais ravi d'échanger avec vous !
                    </p>

                </div>
            </div>
        </div>
    </section>

    <section id="services" class="py-5">
        <div class="container">
            <h2 class="text-center mb-5 section-title animate-fade-in">Mes Services</h2>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 text-center">
                <div class="col animate-fade-in delay-100">
                    <div class="service-card p-4 rounded card-shadow-hover h-100">
                        <i class="fas fa-desktop fa-3x mb-3 text-primary"></i>
                        <h4 class="mb-3">Developpement web</h4>
                        <p>Création d'interfaces utilisateur interactives et responsives. Conception et implémentation de la logique côté serveur.</p>
                    </div>
                </div>
                <div class="col animate-fade-in delay-200">
                    <div class="service-card p-4 rounded card-shadow-hover h-100">
                        <i class="fas fa-server fa-3x mb-3 text-primary"></i>
                        <h4 class="mb-3">Design Graphique</h4>
                        <p>Conception de designs graphiques percutants et intuitifs pour renforcer l'engagement utilisateur et la reconnaissance de marque.</p>
                    </div>
                </div>
                <div class="col animate-fade-in delay-400">
                    <div class="service-card p-4 rounded card-shadow-hover h-100">
                        <i class="fas fa-database fa-3x mb-3 text-primary"></i>
                        <h4 class="mb-3">Gestion de Bases de Données</h4>
                        <p>Optimisation et sécurisation de bases de données relationnelles</p>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section id="skills" class="py-5">
        <div class="container">
            <h2 class="text-center mb-5 section-title animate-fade-in">Mes Compétences Techniques</h2>
            <div class="row justify-content-center text-center">
                <div class="col-md-6 col-lg-4 mb-4 animate-slide-in-right delay-100">
                    <div class="info-card p-4 rounded card-shadow-hover h-100">
                        <h4 class="mb-4 text-primary">Langages</h4>
                        <div class="d-flex flex-wrap justify-content-center align-items-center gap-4">
                            <div class="skill-icon-item">
                                <i class="fab fa-html5 fa-4x" style="color: #E34F26;"></i>
                                <p class="mb-0 mt-2">HTML5</p>
                            </div>
                            <div class="skill-icon-item">
                                <i class="fab fa-css3-alt fa-4x" style="color: #1572B6;"></i>
                                <p class="mb-0 mt-2">CSS3</p>
                            </div>
                            <div class="skill-icon-item">
                                <i class="fab fa-js fa-4x" style="color: #F7DF1E;"></i>
                                <p class="mb-0 mt-2">JavaScript</p>
                            </div>
                            <div class="skill-icon-item">
                                <i class="devicon-php-plain colored" ></i>
                                <p class="mb-0 mt-2">PHP</p>
                            </div>
                            <div class="skill-icon-item">
                                <i class="devicon-cplusplus-plain colored fa-4x"></i>
                                <p class="mb-0 mt-2">C++</p>
                            </div>
                            <div class="skill-icon-item">
                                <i class="devicon-python-plain colored fa-4x"></i>
                                <p class="mb-0 mt-2">Python</p>
                            </div>
                            <div class="skill-icon-item">
                                <i class="devicon-java-plain colored  fa-4x" style="color: #1572B6"></i>
                                <p class="mb-0 mt-2">Java</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-lg-4 mb-4 animate-slide-in-left delay-200">
                    <div class="info-card p-4 rounded card-shadow-hover h-100">
                        <h4 class="mb-4 text-primary">Frameworks & Librairies</h4>
                        <div class="d-flex flex-wrap justify-content-center align-items-center gap-4">
                            <div class="skill-icon-item">
                                <i class="devicon-bootstrap-plain colored fa-4x"></i>
                                <p class="mb-0 mt-2">Bootstrap</p>
                            </div>
                            <div class="skill-icon-item">
                                <i class="devicon-laravel-plain colored fa-4x"></i>
                                <p class="mb-0 mt-2">Laravel</p>
                            </div>
                            <div class="skill-icon-item">
                                <i class="devicon-nodejs-plain-wordmark colored fa-4x"></i>
                                <p class="mb-0 mt-2">Node-js</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-lg-4 mb-4 animate-slide-in-right delay-300">
                    <div class="info-card p-4 rounded card-shadow-hover h-100">
                        <h4 class="mb-4 text-primary">Base de donnée</h4>
                        <div class="d-flex flex-wrap justify-content-center align-items-center gap-4">
                            <div class="skill-icon-item">
                                <i class="devicon-mysql-plain colored fa-4x"></i>
                                <p class="mb-0 mt-2">MySQL</p>
                            </div>
                            <div class="skill-icon-item">
                                <i class="devicon-sqlite-plain colored fa-4x"></i>
                                <p class="mb-0 mt-2">SQLite</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 mb-4 animate-slide-in-right delay-300">
                    <div class="info-card p-4 rounded card-shadow-hover h-100">
                        <h4 class="mb-4 text-primary">Outils</h4>
                        <div class="d-flex flex-wrap justify-content-center align-items-center gap-4">
                            <div class="skill-icon-item">
                                <i class="devicon-github-plain colored fa-4x"></i>
                                <p class="mb-0 mt-2">Git/GitHub</p>
                            </div>
                            <div class="skill-icon-item">
                                <i class="devicon-figma-plain colored fa-4x"></i>
                                <p class="mb-0 mt-2">Figma</p>
                            </div>
                            <div class="skill-icon-item">
                                <img src="logo/indesign.svg" width="65" alt="Illustrator">
                                <p class="mb-0 mt-2">InDesign</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>


    <section id="projets" class="py-5">
        <div class="container">
            <h2 class="text-center mb-5 section-title animate-fade-in">Mes projets</h2>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                <div class="col animate-slide-up delay-100">
                    <div class="card h-100 project-card card-shadow-hover">
                        <img src="project/zarao.svg" style="width: 90%; margin-left: 20px; margin-top: 20px;"
                            class="card-img-top pro" alt="Image Projet 1">
                        <div class="card-body">
                            <h5 class="card-title">Zarao</h5>
                            <p class="card-text">Zarao est une plateforme freelance malgache conçue pour mettre en valeur les compétences des développeurs malgaches.</p>
                            <a href="http://zarao.com/" id="projectin" target="_blank"
                                class="btn btn-outline-primary btn-sm button-shadow-flat ss not-online">Live demo <i
                                    class="fas fa-external-link-alt ms-1"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col animate-slide-up delay-100">
                    <div class="card h-100 project-card card-shadow-hover">
                        <img src="project/"  style="width: 90%; margin-left: 20px; margin-top: 20px;"
                            class="card-img-top pro" alt="fanorona">
                        <div class="card-body">
                            <h5 class="card-title">Fanorona</h5>
                            <p class="card-text">Projet rebuild du jeux fanorona malagasy en version web.</p>
                            <a href="http://zarao.com/" id="projectin" target="_blank"
                                class="btn btn-outline-primary btn-sm button-shadow-flat ss not-online">Live demo <i
                                    class="fas fa-external-link-alt ms-1"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col animate-slide-up delay-100">
                    <div class="card h-100 project-card card-shadow-hover">
                        <img src="project/"  style="width: 90%; margin-left: 20px; margin-top: 20px;"
                            class="card-img-top pro" alt="fanorona">
                        <div class="card-body">
                            <h5 class="card-title">Dactylo</h5>
                            <p class="card-text">Jeux web multijoueur de dactylographie avec websocket.</p>
                            <a href="http://zarao.com/" id="projectin" target="_blank"
                                class="btn btn-outline-primary btn-sm button-shadow-flat ss not-online">Live demo <i
                                    class="fas fa-external-link-alt ms-1"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>



    <section id="formation" class="py-5">
        <div class="container">
            <h2 class="text-center mb-5 section-title animate-fade-in">Études & Formation</h2>
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <div class="timeline">
                        <div class="timeline-item card-shadow-hover animate-slide-in-right delay-100">
                            <div class="timeline-icon"><i class="fas fa-graduation-cap"></i></div>
                            <div class="timeline-content">
                                <h3>2023 - 2025 : DTS en Informatique de gestion</h3>
                                <h4>ESPIC - Ankazomanga</h4>
                                <p>Formation axée sur le développement web et la conception de systèmes d'information. Acquisition de compétences en création de solutions robustes répondant aux besoins métiers et garantissant la qualité des applications.</p>
                            </div>
                        </div>
                        <div class="timeline-item card-shadow-hover animate-slide-in-left delay-200">
                            <div class="timeline-icon"><i class="fa-solid fa-language"></i></div>
                            <div class="timeline-content">
                                <h3>2023 - 2024 : Langue anglaise</h3>
                                <h4>Englestia</h4>
                                <p>Développement des compétences en anglais. Maîtrise essentielle pour une communication professionnelle et la collaboration dans un environnement global.</p>
                            </div>
                        </div>
                        <div class="timeline-item card-shadow-hover animate-slide-in-left delay-200">
                            <div class="timeline-icon"><i class="fas fa-book-open-reader"></i></div>
                            <div class="timeline-content">
                                <h3>2023 : Bacc OSE</h3>
                                <h4>Lycée Nanisana</h4>
                                <!-- <p>Développement des compétences en anglais. Maîtrise essentielle pour une communication professionnelle et la collaboration dans un environnement global.</p> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

<!-- 
    <section id="autres" class="py-5">
        <div class="container">
            <h2 class="text-center mb-5 section-title animate-fade-in">Autres</h2>
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="info-card p-4 rounded card-shadow-hover mb-4 animate-fade-in delay-100">
                        <h4 class="mb-3"><i class="fas fa-trophy me-2 text-primary"></i>Récompenses & Distinctions</h4>
                        <ul>
                            <li>[Année] : [Nom de la Récompense], [Nom du Concours/Événement]</li>
                            <li>[Année] : [Autre Distinction]</li>
                        </ul>
                    </div>
                    <div class="info-card p-4 rounded card-shadow-hover animate-fade-in delay-200">
                        <h4 class="mb-3"><i class="fas fa-newspaper me-2 text-primary"></i>Publications & Articles</h4>
                        <ul>
                            <li>[Année] : "Titre de l'article/publication" sur [Nom du Blog/Site]</li>
                            <li>[Année] : "Titre de la contribution" pour [Nom du Projet Open Source/Livre]</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section> -->


    <section id="contact" class="py-5">
        <div class="container">
            <h2 class="text-center mb-5 section-title animate-fade-in">Contact</h2>
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <p class="text-center mb-4 animate-fade-in delay-100">Je serais ravi d'échanger avec vous.
                        N'hésitez pas à me contacter via le formulaire ci-dessous ou sur mes réseaux sociaux.</p>

                    <form class="contact-form p-4 rounded form-shadow-deep animate-fade-in delay-200" method="post" action="controllers/emailSend.php">
                        <?php
                        if (isset($_SESSION['message'])) {
                            $message_type = $_SESSION['message_type'] ?? 'info';
                            $message_text = $_SESSION['message'];

                            echo '<div class="alert alert-' . $message_type . ' alert-dismissible fade show" role="alert">';
                            echo $message_text;
                            echo '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
                            echo '</div>';

                            unset($_SESSION['message']);
                            unset($_SESSION['message_type']);
                        }
                        ?>
                        <div class="mb-3">
                            <label for="name" class="form-label">Nom Complet</label>
                            <input type="text" class="form-control form-control-shadow" name="nom_complet" id="name" required>
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Adresse E-mail</label>
                            <input type="email" class="form-control form-control-shadow" name="email" id="email" required>
                        </div>
                        <div class="mb-3">
                            <label for="subject" class="form-label">Sujet</label>
                            <input type="text" class="form-control form-control-shadow" name="sujet" id="subject">
                        </div>
                        <div class="mb-3">
                            <label for="message" class="form-label">Votre Message</label>
                            <textarea class="form-control form-control-shadow" name="message" id="message" rows="5"
                                required></textarea>
                        </div>
                        <div class="d-grid">
                            <button type="submit" class="btn btn-primary btn-lg button-shadow-elevate">Envoyer le
                                message <i class="fas fa-paper-plane ms-2"></i></button>
                        </div>
                    </form>
                    <div class="social-links text-center mt-4 animate-fade-in delay-300">
                        <a href="https://github.com/Sitraka1266" target="_blank"
                            class="mx-2 social-icon icon-shadow-hover"><i class="fab fa-github fa-2x"></i></a>
                        <a href="https://www.linkedin.com/in/sitraka-ratovonarivo-6a656529b/" target="_blank"
                            class="mx-2 social-icon icon-shadow-hover"><i class="fab fa-linkedin fa-2x"></i></a>
                        <a href="https://x.com/sitrakarat16009" target="_blank"
                            class="mx-2 social-icon icon-shadow-hover"><i class="fab fa-twitter fa-2x"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer class="py-4 footer-shadow-top">
        <div class="container text-center animate-fade-in">
            <p>&copy; 2025 Sitraka RATOVONARIVO. Tous droits réservés.</p>
        </div>
    </footer>

    <script src="js/bootstrap.bundle.min.js"></script>
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <script src="/js/main.js"></script>
</body>

</html>
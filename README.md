<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="page.css" rel="stylesheet">
</head>

<body>
    <nav class="navbar navbar-expand-sm bg-light">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img src="https://raw.githubusercontent.com/Racoon402/dweb2023/main/Logo(2022)_2.png" width="45px"
                    alt="Logo" class="d-inline-block">
                어의궁
            </a>
            <button class="navbar-toggler navbar-expand-sm" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#">소개</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">서비스</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">게시판</a>
                    </li>
                </ul>
            </div>
            <div class="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <i class="fa-brands fa-instagram"></i>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <main>
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://raw.githubusercontent.com/Racoon402/dweb2023/main/KakaoTalk_20230804_043016600.jpg"
                        class="d-block w-100">
                    <div class="carousel-caption d-none d-md-block">
                        <h3>바람은 계산하는 것이 아닌</h3>
                        <h2>극복하는 것이다.</h2>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </main>
    <footer>
        <div class="container d-flex border">
            <div class="pt-5 pb-5 first-line border">
                어의궁
            </div>
            <div class="pt-5 pb-5 second-line border flex-row-reverse">
                <div class="row">
                    <div class="col"><a href="#">Contact us</a></div>
                    <div class="col"><a href="#">Follow Us</a></div>
                </div>
            </div>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://kit.fontawesome.com/2fad28f04d.js" crossorigin="anonymous"></script>
</body>

</html>

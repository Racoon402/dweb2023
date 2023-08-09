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
            <a class="navbar-brand d-flex" href="https://racoon402.github.io/dweb2023/">
                <img src="https://raw.githubusercontent.com/Racoon402/dweb2023/main/Logo-removebg.png" width="55px"
                    height="55px">
                <h1 class="ms-2 mt-1">어의궁</h1>
            </a>
            <button class="navbar-toggler navbar-expand-sm" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                        <a class="nav-link fs-4" href="#" id="introDropdown" role="button"
                            data-bs-toggle="dropdown">소개</a>
                        <ul class="dropdown-menu" aria-labelledby="introDropdown">
                            <li><a class="dropdown-item" href="#"> 동아리소개</a></li>
                            <li><a class="dropdown-item" href="#"> 조직도 </a></li>
                            <li><a class="dropdown-item" href="#"> 오시는 길 </a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link fs-4" href="#" id="servicesDropdown" role="button"
                            data-bs-toggle="dropdown">서비스</a>
                        <ul class="dropdown-menu" aria-labelledby="servicesDropdown">
                            <li><a class="dropdown-item" href="#"> 습사 일지</a></li>
                            <li><a class="dropdown-item" href="#"> 습사 예약 </a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link fs-4" href="#" id="boardDropdown" role="button"
                            data-bs-toggle="dropdown">게시판</a>
                    </li>
                    <li class="nav-item mt-2 ms-3">
                        <i class="fa-brands fa-instagram fa-2x"></i>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <main>
        <div id="carouselExampleCaptions" class="carousel slide container" data-bs-ride="false">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://raw.githubusercontent.com/Racoon402/dweb2023/main//KakaoTalk_20230804_225508204.jpg"
                        class="d-block w-100">
                    <div class="carousel-caption d-none d-md-block">
                        <h1>미간에 꽃아주지</h1>
                        <h3>국궁동아리 '어의궁'</h3>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="https://raw.githubusercontent.com/Racoon402/dweb2023/main/KakaoTalk_20230804_225316839.jpg"
                        class="d-block w-100">
                    <div class="carousel-caption d-none d-md-block">
                        <h1>미간에 꽃아주지</h1>
                        <h3>국궁동아리 '어의궁'</h3>
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
        <div class="container mt-5 text-center">
            <div class="row">
                <div class="card col m-3" style="width: 18rem;">
                    <div class="card-body">
                        <img src="https://raw.githubusercontent.com/Racoon402/dweb2023/main/bow%20icon_3784384.png"
                            width="120px">
                        <h1 class="card-text text-center mt-2"> 동아리소개</h1>
                    </div>
                </div>
                <div class="card col m-3" style="width: 18rem;">
                    <div class="card-body">
                        <img class="mt-1"
                            src="https://raw.githubusercontent.com/Racoon402/dweb2023/main/target%20icon.png"
                            width="110px">
                        <h1 class="card-text text-center mt-2 pt-1"> 습사일지</h1>
                    </div>
                </div>
                <div class="card col m-3" style="width: 18rem;">
                    <div class="card-body">
                        <i class="fa-solid fa-list fa-6x pt-2 pb-4"></i>
                            <h1 class="card-text text-center mt-3 pt-1"> 게시판</h1>
                    </div>
                </div>
            </div>
        </div>

    </main>
    <footer>
        <div class="container bg-light ">
            <div class="row">
                <div class="col-9 ms-3 pt-5 pb-5">
                    어의궁
                </div>
                <div class="col ms-3 pt-5 pb-5">
                    서울과학기술대학교
                </div>
            </div>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://kit.fontawesome.com/2fad28f04d.js" crossorigin="anonymous"></script>
</body>

</html>

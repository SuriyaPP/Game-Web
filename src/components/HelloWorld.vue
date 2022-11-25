<template>
    
    <!DOCTYPE html>
     <html>    
        

       
  
  <head>
      <title>MyPortfolio</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet">
      <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
      <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
      <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/6.0.0/normalize.min.css" rel="stylesheet" type="text/css">
      <link rel="stylesheet" type="text/css" href="portfolio.css">
  </head>
   
  <body>
    <header class="Header" id="home">
            <nav class="navbar navbar-inverse navbar-fixed-top">
          <div class="container">
              <div class="navbar-header">
                  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                      <span class="sr-only">Toggle navigation</span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                  </button>
                  <a class="navbar-brand active" href="#">Suriya Web</a>
                  </div>
                  <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul class="nav navbar-nav navbar-right">
                      <li><router-link to="/">Home</router-link></li>
                      <li><a href="#users">Users</a></li>
                      <li><router-link to="/login">Login</router-link></li>
                      <li><router-link to="/about">About</router-link></li>
                  </ul>
              </div>
          </div>
      </nav>
      </header>
	  
   
           
               
         <header class="header">
          <div class="text-box">
              <h1 class="heading-primary">
                  <p class="heading-primary-main"> Suriya Prakash </p>
                  <p class="heading-primary-sub">Web Developer </p>
              </h1>
          </div>
      </header>
  </body>
  </html>
      <div id="about">
          <div class="container">
              <div class="row featurette">
                  <div class="col-md-7">
                      <h2 class="featurette-heading">Hi, am Suriya Prakash. <span class="text-muted">A Web Developer.</span></h2>
                      <p class="lead">Through coding i've acquired problem-solving skills and a way to communicate with others on a technical level. I'd love to work in EX company, with artists, athletes, photographers, non-profits, and small businesses to improve
                          their Web presence.
                      </p>
                      <blockquote>
                          <p>“Hearts will never be practical until they are made unbreakable.” <strong>the cup</strong>. <br>“The saddest thing about love is that not only that it cannot last forever, but that heartbreak is soon forgotten.” <strong>I'd rather have a broken arm than a broken heart.</strong>. <br>“It's hard asking someone with a broken heart to fall in love again." <strong>the teapot</strong>.<br><em>~ Suriya</em>
                          </p>
                      </blockquote>
  
                  </div>
                  <div class="col-md-5">
                      <img class="https://images.unsplash.com/photo-1624760457277-f4f30b59c1c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnJva2VuJTIwaGVhcnR8ZW58MHx8MHx8&w=1000&q=80">
                        
                  </div>
              </div>
          </div>
      </div>
     
      <div id="portfolio">
          <div class="container">
              <div class="row">
                  <div class="col-lg-4 col-sm-6">
                      <div class="project thumbnail">
                          <a href="https://codepen.io/Chell0/full/rGaXzO/" target="_blank" title="Tribute page">
                              <img src="data:image/png;base64,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">
                              
                          </a>
                      </div>
                  </div>
                  <div class="col-lg-4 col-sm-6">
                      <div class="project thumbnail ">
                          <a href="https://thimbleprojects.org/ch3ll0h/385389" target="_blank" title="Startup Landing Page">
                              <img src="https://images.unsplash.com/photo-1624760457277-f4f30b59c1c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnJva2VuJTIwaGVhcnR8ZW58MHx8MHx8&w=1000&q=80">
                          </a>
                      </div>
                  </div>
                  <div class="col-lg-4 col-sm-6">
                      <div class="project thumbnail ">
                          <a href="https://thimbleprojects.org/ch3ll0h/385804" target="_blank" title="Photo Blog">
                              <img src="data:image/jpeg;base64,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">
                          </a>
                      </div>
                  </div>
                
  
              </div>
          </div>
      </div>
      
      <footer>
          <div id="footer-above">
              <div>
                  <h3>Find me on</h3>
                  <ul id="contact">
                      <li><a class="button social" href="https://www.facebook.com/Gabriel-Machel-173627976468666/" target="_blank"><i class="fa fa-facebook-official"></i></a></li>
                          </ul>
        </div>
          </div>
          <div id="footer-below">Copyright &copy;
             
          </div>
      </footer>
    
  </template>
  <style scoped>


* {
    margin: 0;
    padding: 0;
}

.img-container {
  background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/20625/pexels-photo-2398220-min.jpeg');
  box-shadow: 0 3px 8px #00000061;
  background-repeat: no-repeat;
  border: 8px solid #fff;
  background-size: 125%;
  border-radius: 8px;
  height: 480px
}
body {
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.25;
}

.p {
  font-family: "Lucida Console", "Courier New", monospace;
}

.navbar-inverse {
    background-image: linear-gradient( to right top, rgba(119, 21, 116, 0.8), rgba(34, 139, 34, 0.8));
}

.navbar-inverse .navbar-nav>li>a {
    color: white;
    font-size: 15px;
    text-transform: uppercase;
}

.navbar-inverse .navbar-brand {
    color: white;
    font-size: 30px;
}

.navbar-inverse ul li:hover {
    background: rgba(57, 36, 194, 0.8);
    color: white;
}



.header {
    height: 95vh;
    background-image: linear-gradient( to right bottom, rgba(63, 10, 161, 0.8), rgba(139, 0, 0, 0.8)), url(https://images.unsplash.com/photo-1499615767948-e6a89ef6060f?auto=format&fit=crop&w=1050&q=80);
    background-size: cover;
    background-position: top;
    position: relative;
}

.text-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}

.heading-primary {
    color: #fff;
    text-transform: uppercase;
    backface-visibility: hidden;
    margin-bottom: 60px;
}

.heading-primary-main {
    display: block;
    font-size: 45px;
    font-weight: 400;
    letter-spacing: 8px;
    animation-name: moveInLeft;
    animation-duration: 1s;
    animation-timing-function: ease-out;
}

.heading-primary-sub {
    display: block;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 1px;
    padding-top: 20px;
    animation: moveInRight 1s ease-out;
}

@keyframes moveInLeft {
    0% {
        opacity: 0;
        transform: translateX(-100px);
    }
    80% {
        transform: translateX(10px);
    }
    100% {
        opacity: 1;
        transform: translate(0);
    }
}

@keyframes moveInRight {
    0% {
        opacity: 0;
        transform: translateX(100px);
    }
    80% {
        transform: translateX(-10px);
    }
    100% {
        opacity: 1;
        transform: translate(0);
    }
}

@keyframes moveInBottom {
    0% {
        opacity: 0;
        transform: translateY(30px);
    }
    100% {
        opacity: 1;
        transform: translate(0);
    }
}



#about {
    padding-top: 40px;
    padding-bottom: 40px;
    color: #5a5a5a;
    background-image: linear-gradient( to left top, rgba(63, 10, 161, 0.8), rgba(139, 0, 0, 0.8)), url(https://images.unsplash.com/photo-1467703834117-04386e3dadd8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2de85761d45711c4109ba4f215b6e21e&auto=format&fit=crop&w=1350&q=80);
    background-size: cover;
    background-position: center;
    color: #fff;
}

.featurette-heading {
    font-weight: 300;
    line-height: 1;
    letter-spacing: -1px;
}

@media (min-width: 768px) {
    .featurette-heading {
        font-size: 30px;
    }
}

@media (min-width: 992px) {
    .featurette-heading {
        margin-top: 120px;
    }
}

.img-responsive {
    border-radius: 100px;
    max-width: 100%;
    height: auto;
    display: block;
}




#portfolio {
    background-image: linear-gradient( to left bottom, rgba(54, 10, 136, 0.8), rgba(139, 0, 0, 0.8)), url(https://images.unsplash.com/photo-1497892597262-2983614aa886?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2051e3b8338218a0f163b9a6ab48bb84&auto=format&fit=crop&w=1350&q=80);
    background-size: cover;
    background-position: top;
    color: #fff;
    padding-top: 150px;
    padding-bottom: 100px;
    position: relative;
}

.project {
    transition: transform .3s;
}

.project:hover {
    transform: scale(1.1);
}



footer #footer-above {
    background-image: linear-gradient( to left top, rgba(63, 10, 161, 0.8), rgba(139, 0, 0, 0.8)), url(https://images.unsplash.com/photo-1495277493816-4c359911b7f1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cea505d70dc1770c4dd470ff9715ac36&auto=format&fit=crop&w=1346&q=80);
    background-size: cover;
    background-position: center;
    color: #fff;
    position: relative;
    display: -webkit-box;
    display: -moz-flexbox;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-flow: row wrap;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-flow: row wrap;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    margin: 0 auto;
    width: 100%;
}

footer h3 {
    margin-bottom: 30px;
    color: #000;
    font-size: 2em;
}

#footer-above {
    padding-top: 50px;
    width: 80%;
}

#footer-above div {
    margin-bottom: 50px;
    width: 250px;
    text-align: center;
}

#footer-above ul {
    padding: 0;
}

#footer-above li {
    display: inline;
}

#footer-below {
    color: #fff;
    font-size: 1.0em;
    padding: 25px 0;
    background-color: #000;
    background-position: center;
    text-align: center;
}

.button {
    color: #fff;
    border: solid 2px #000;
    border-radius: 70%;
    display: inline-block;
    width: 50px;
    height: 50px;
    text-align: center;
    font-size: 20px;
    line-height: 48px;
    -webkit-transitional: all .3s ease-in-out;
    transition: all .3s ease-in-out;
}

.button:hover {
    border: solid 2px rgb(21, 102, 214);
    color: #2998E4;
}

.col-sm-6,
.col-xs-12 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
}

.col-xs-12 {
    float: left;
    width: 100%;
}

@media (min-width: 768px) {
    .col-sm-6 {
        float: left;
    }
}


</style>  
  
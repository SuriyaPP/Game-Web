<template>
    <div>
    
            <head>
                <title> ExamsDaily </title>
                <meta name="description" content="Web designer and front-end developer">
  <link href='https://fonts.googleapis.com/css?family=Raleway:100,200,400,600' rel='stylesheet' type='text/css'>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.7.4/jquery.fullPage.min.css" rel="stylesheet" type="text/css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="https://s3-us-west-2.amazonaws.com/parallax-theme/assets/animate.css">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="css/styles.css">
</head>

<div class="nav-header">
    <div class="nav-brand">
    </div>
    <i class="fa fa-bars fa-3x"></i>
    <div class="header-links">
        <ul>
            <li data-menuanchor="fourthpage">
                <a href="contact">CONTACT</a></li>
                <li data-menuanchor="thirdpage">
                    <a href="Projects">PROJECTS</a> 
                </li>
                <li data-menuanchor="secondpage">
                    <a href="login">LOGIN</a>
                </li>
          </ul>
    </div>
</div>
<div class="nav-screen">
    <i class="fa fa-time fa-3x"></i>
    <div class="nav-container">
        <div class="nav-link">
            <ul id="MyMenu">
                <li data-menuanchor="secondpage">
                    <a href="#login">LOGIN</a>
                    <li data-menuanchor="thirdpage">
                        <a href="#projects">PROJECTS</a>
                        <li data-menuanchor="fourthpage">
                            <a href="#contact">CONTACT</a>
                        </li>
                    </li>
                </li>
            </ul>
        </div>
    </div>
</div>

<div id="fullpage">
    <div class="section about me" data-anchor="aboutme">
        <div class="opaque-bg animated feadInDown">
            <h1 style="color:white">ExamsDaily<span style="color:#ff6363"></span>Developer</h1>
        </div>
    </div>
</div>
<i id="moveDown" class="fa fa-chevron-down fa-3x bounce"></i>
  </div>
  

  <div class="section" data-anchor="skills">
    <div class="content">
      <h1 class="wow fadeInDown" data-wow-delay="0.2s" style="color:#FF6363">ABOUT ME</h1>
      <p class="wow fadeInDown" data-wow-delay="0.2s">Hi, I'm ExamsDaily!  Software Developer Company!</p>

      <div class=" wow fadeInUp container-skillbar" data-wow-delay="0.2s">
        <div class="skillbar clearfix " data-percent="75%">
          <div class="skillbar-title" style="background: #FF6363;"><span>JAVA</span></div>
          <div class="skillbar-bar" style="background: #FF6363;"></div>
          <div class="skill-bar-percent">75%</div>
        </div> 
                                      
        <div class="skillbar clearfix " data-percent="80%">
          <div class="skillbar-title" style="background: #FF6363;"><span>PYTHON</span></div>
          <div class="skillbar-bar" style="background: #FF6363;"></div>
          <div class="skill-bar-percent">80%</div>
        </div> 

        <div class="skillbar clearfix " data-percent="75%">
          <div class="skillbar-title" style="background: #FF6363;"><span>SQL</span></div>
          <div class="skillbar-bar" style="background: #FF6363;"></div>
          <div class="skill-bar-percent">75%</div>
        </div> 

        <div class="skillbar clearfix " data-percent="45%">
          <div class="skillbar-title" style="background: #FF6363;"><span>JS</span></div>
          <div class="skillbar-bar" style="background: #FF6363;"></div>
          <div class="skill-bar-percent">45%</div>
        </div> 

        <div class="skillbar clearfix " data-percent="30%">
          <div class="skillbar-title" style="background: #FF6363;"><span>HTML</span></div>
          <div class="skillbar-bar" style="background: #FF6363;"></div>
          <div class="skill-bar-percent">30%</div>
        </div> 

        <div class="skillbar clearfix " data-percent="20%">
          <div class="skillbar-title" style="background: #FF6363;"><span>CSS</span></div>
          <div class="skillbar-bar" style="background: #FF6363;"></div>
          <div class="skill-bar-percent">20%</div>
        </div> 
      </div>
    </div>
  </div>
 

  <div class="section" data-anchor="projects">
    <div class="content-slide">
        <div class="slide">
          <h1 class="wow fadeInDown" data-wow-delay="0.2s" style="color:#FF6363">WEATHER FORECAST APPLICATION</h1>
          <p class="wow fadeInDown" data-wow-delay="0.2s">Mock Micro Service Application</p><br><br><br>
          
          <p class="wow fadeInUp" data-wow-delay="0.2s">A Science Gateway Architecture project that implements Micro-Service Architecture on AWS platform using AWS NEXRAD radar files using Java, Python, Node js, React js.</p>
          <p class="wow fadeInUp" data-wow-delay="0.2s"> Status: <span style="color:#FF6363"> Ongoing</span></p>
          <form>
            <button formaction="https://github.com/airavata-courses/TeamOmega" type="submit" id="submit" class="btn btn-lg wow fadeInUp" data-wow-delay="0.2s"> PROJECT LINK </button></form>
           
        </div>
        <div class="slide">
          <h1 style="color:#FF6363">YELP REVIEW ANALYSIS</h1>
          <p>A Z534 Search Project</p><br><br><br>
          <p>Final project for the course Z534 - Search, that analyzes the yelp dataset's reviews to predict the business category and business rating</p>
          <p> Status: <span style="color:#FF6363"> Ongoing</span></p>
          <form>
            <button formaction="https://github.com/njetty/Yelp-Review-Analysis" type="submit" id="submit" class="btn btn-lg"> PROJECT LINK </button>
          </form>
        </div>
    
      <div class="slide">
          <h1 style="color:#FF6363">FACTOR ME</h1>
          <p>A Software Engineering Project</p><br><br><br>
          <p>Final project for the course B565 - Software Engineering, A math based android game designed to be interactive and addictive, It is a number tetris game, with an aim to formulate patterns with three or more numbered tiles with a common factor.</p>
          <p> Status: <span style="color:#FF6363"> Complete</span></p>
          
        </div>
      
      <div class="slide">
          <h1 style="color:#FF6363">EXTENDED ANALOG COMPUTER AS A MATCHED FILTER</h1>
          <p>A Data Mining Project</p><br><br><br>
          <p>Final project for the course Data Mining, Training a custom low power analog neural network chip that was developed by an IU start up -"Analog Computing Solutions" as part of Data mining project.</p>
          <p> Status: <span style="color:#FF6363"> Complete</span></p>
          
        </div>
    
      <div class="slide">
          <h1 style="color:#FF6363">COMPUCELL 3D</h1>
          <p>An IU Open Source Project</p><br><br><br>
          <p>Involved in binary distributions of the IU Bio Complexity Open Source Project Compucell 3D</p>
          
        </div>
    </div>
  </div>
  

  <div class="section" data-anchor="contact">
    <div class="content wow fadeInDown" data-wow-delay="0.2s">
      <h1 style="color:#FF6363">CONTACT</h1><br>
      <p>Whether you're interested in working with me or just want to say hello, I'd love to hear from you!</p>
      <p>MAIL: <span style="color:#FF6363">ExamDaliy@indiana.edu</span></p>
      <p>PHONE: <span style="color:#FF6363">(612) 666 3925</span></p>
      <br>

      <div class="wow fadeInUp" data-wow-delay="0.5s">
            <form method="get" action="https://iu.box.com/shared/static/bltrzacymd0u72bqavc26qw1yuejn6wx.pdf">
            <button type="submit" id="submit" name="submit" class="btn btn-lg">MY RESUME</button></form>
      
      <br>
      <p>CONNECT WITH ME</p>
      <div class="social-links">
        <span><a href="https://www.linkedin.com/in/naveenjetty" target="_blank"><i class="fa fa-linkedin fa-2x"></i></a></span>
        <span><a target="_blank" href="https://twitter.com/naveenjetty" ><i class="fa fa-twitter fa-2x"></i></a></span>
        <span><a href="https://github.com/njetty" target="_blank"><i class="fa fa-github fa-2x"></i></a></span>
        <span><a href="https://codepen.io/naveenjetty/pens/public/"><i class="fa fa-codepen fa-2x"></i></a></span>
      </div>
    </div>
  </div>
 </div>
</template>
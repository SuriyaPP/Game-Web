<template>
    <div>

        <section class="customer-revs">
  <div class="rectangle"></div>

  <!-- Slideshow container -->
  <div class="slideshow-container">

    <!-- here goes what customers say -->
    <h1>Here's what <span>others</span> say:</h1>

    <!-- Full-width slides/quotes -->
    <div class="mySlides">
      <div class="mySlidesContainer">
        <q>
          Curabitur ligula augue, lobortis in interdum nec, dignissim vel arcu. Donec semper aliquet mattis. Curabitur convallis urna congue viverra elementum.
        </q>
      </div>
      <p class="author">By: <span>Joe Bloggs</span></p>
    </div>

    <div class="mySlides">
      <div class="mySlidesContainer">
        <q>
          Vivamus est felis, tempor sed mauris ac, malesuada sollicitudin ipsum. Etiam nec ullamcorper nibh, ac pretium sapien. Donec pharetra sollicitudin ligula, sit amet ornare nisi vestibulum et.
        </q>
      </div>
      <p class="author">By: <span>Jane Doe</span></p>
    </div>

    <div class="mySlides">
      <div class="mySlidesContainer">
        <q>
          Mauris malesuada, ex at volutpat euismod, velit diam placerat lacus, eu rhoncus enim metus ultricies nisi. Mauris pharetra tristique nisl.</q>
      </div>
      <p class="author">By: <span>John Doe</span></p>
    </div>

    <!-- Next/prev buttons -->
    <a class="prev">&#10094;</a>
    <a class="next">&#10095;</a>

  </div><!-- END slidehow-container -->

  <!-- Dots/bullets/indicators -->
  <div class="dot-container">
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
  </div>

</section>


    </div>
</template>
<script>

let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

if (!slides.length == 0) {
  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  let currentSlide = function (n) {
    showSlides((slideIndex = n));
  };

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }
}

prev.addEventListener("click", () => {
  plusSlides(-1);
});

next.addEventListener("click", () => {
  plusSlides(1);
});







</script>

<style>

html,
body {
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: "Arvo", serif;
}

body {
  background: #f73c57;
}

h1 {
  font-size: 2.5rem;
  text-align: left;
  font-weight: 400;
  color: #f6eac1;
  margin: 3rem 0 0 0;
}

h1 span {
  font-family: "Satisfy", cursive;
  font-size: 4rem;
  color: #262626;
}

p,
q {
  font-size: 1.2rem;
}

q {
  font-weight: 500;
  line-height: 1.5rem;
}

p {
  color: #f6eac1;
}

.customer-revs {
  margin: 0 auto 0 auto;
}

.rectangle {
  width: 40%;
  height: 100vh;
  background: #f6eac1;

  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
}

/* slideshow container */
.slideshow-container {
  position: relative;
  width: 60rem;
  max-width: 80%;
  margin: 0 auto;
}

/* Slides */
.mySlides {
  display: none;
  padding: 2rem 5rem 0 5rem;
  text-align: center;
}

.mySlidesContainer {
  min-height: 5rem;
  padding: 3.5rem 2.5rem 2rem 3.5rem;
  background: #f6eac1;
}

/* next & previous buttons */
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 55%;
  width: auto;
  margin-top: -1.875rem;
  padding: 1rem;
  color: #232323;
  font-weight: bold;
  font-size: 3rem;
  border-radius: 3px;
  user-select: none;
  transition: 0.4s;
}

/* position the "next button" to the right */
.next {
  position: absolute;
  right: 0;
  border-radius: 3px;
}

/* on hover, add a black bg color with a little bit see-through */
.prev:hover,
.next:hover {
  background-color: #000; /* fallback color */
  background-color: rgba(0, 0, 0, 0.8);
  color: #f6eac1;
  text-decoration: none;
}

/* the dot/bullet/indicator container */
.dot-container {
  text-align: center;
  padding: 0 1.25rem;
}

/* the dots/bullets/indicators */
.dot {
  height: 0.9375rem;
  width: 0.9375rem;
  margin: 0 2px;
  background-color: #f6eac1;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.4s ease;
}

/* add bg color to the active dot/circle */
.active {
  background-color: #232323;
}


</style>
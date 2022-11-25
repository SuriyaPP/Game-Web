<template>
<div>




<section class="hero-section" id="home">
  <div class="hero-section-slider">
    <h2>Welcome  The Gaming World</h2>
  </div>
</section>

<section class="about" id="about">
  <h2>About our Gaming World</h2>
  <p class="Game">
     The word 'game' doesn't just refer to sports or activities. If someone asks you if 'you are game,' they want to know whether you are willing to try something; whether you are interested in doing something fun or unusual.
    </p>	 
</section>

<section class="services" id="services">
  <h2 class="services-header">Our Top Services</h2>
  <div class="services-wraper">
    <div class="service-container">
      <img 
           src="https://cloudgame.press/wp-content/uploads/2020/08/cloud-gaming-kak-rabotaet-1280x720.jpg"
		   alt="cloud-services"
           loading="lazy"
           class="service-pic"
       />
      <h3 class="service-title">Cloud Services</h3>
      <p class="service-detail">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet nobis quia similique sapiente consectetur sit cupiditate tempora eos laboriosam voluptates.
      </p>
      <a href="https://developers.google.com/games/services" class="service-btn">Buy Now</a>
    </div>
    <div class="service-container">
      <img 
           src="https://i.ytimg.com/vi/n3Qxo79HoZk/hqdefault.jpg" 
           alt="unity-gaming-services"
           loading="lazy"
           class="service-pic"
       />
      <h3 class="service-title">Unity Gaming</h3>
      <p class="service-detail">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet nobis quia similique sapiente consectetur sit cupiditate tempora eos laboriosam voluptates.
      </p>
      <a href="https://unblockedgames.dev/" class="service-btn">Buy Now</a>
    </div>
    <div class="service-container">
      <img 
           src="https://sw.cool3c.com/user/104471/2021/09b54019-4e3f-4fe7-8474-71029981f431.jpg?fit=max&w=2400&q=80" 
           alt="xbox-services"
           loading="lazy"
           class="service-pic"
       />
      <h3 class="service-title">BGMI </h3>
      <p class="service-detail">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet nobis quia similique sapiente consectetur sit cupiditate tempora eos laboriosam voluptates.
      </p>
      <a href="https://www.youtube.com/channel/UCj0sKQk9qjiIfNH22ZBWpxw" class="service-btn">Buy Now</a>
    </div>
  </div>
</section>








</div>
</template>

<script>



export default {
  computed: {
     return () {
     
      this.$router.push('/Contact') 
    }
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  }
}




</script>











<style>

@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,900;1,700&display=swap");

/* variables */
:root{
  --font-family: 'Roboto',sans-serif;
  --normal-font: 400;
  --bold-font: 700;
  --bolder-font: 900;
  --bg-color: #fcfcfc;
  --primary-color: #250C77;
  --secondary-color: #ED642B;
  --primary-shadow: #8b8eaf;
  --secondary-shadow: #a17a69;
  --bottom-margin: 0.5rem;
  --bottom-margin-2: 1rem;
  --line-height: 1.7rem;
  --transition: 0.3s;
}
/* variables end */

html{
  scroll-behaviour: smooth;
}

/* css reset  */
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul{
  list-style-type: none;
}
a{
  text-decoration: none;
  color: var(--bg-color);
}
a:hover{
  cursor: pointer;
  color: var(--secondary-color);
}

.Game{
    text-align: -webkit-center;
    font-family: serif;
    font-size: 20px;
}





body{
  font-family: var(--font-family);
}



.hero-section-slider{
  height: 100vh;
  background-size: cover;
  background-image: url(https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtaW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80);
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: slider 4s ease-in infinite;
}
.hero-section-slider h2{
  color: var(--bg-color);
  border-bottom: 2.5px solid var(--secondary-color);
  text-shadow: 0 3px 2px var(--secondary-color);
  text-align: center;
  font-size: 2.5rem;
  font-weight: var(--bolder-font);
}
/* ------------------ */
/* about section */
.about{
  background-color: var(--bg-color);
  padding: 1rem 6rem;
}
.about h2{
  text-align: center;
  margin-bottom: var(--bottom-margin-2);
}
.about p{
  color: dodgerblue;
  line-height: var(--line-height);
  padding: 0.4rem;
}
/* ---------------------- */
/* services */
.services{
  background-color: var(--bg-color);
  padding: 32px 0;
  margin-top: 2rem;
}
.services-header{
  text-align: center;
  font-weight: var(--bolder-font);
  margin-bottom: var(--bottom-margin-2);
}
.services-wraper{
  padding: 1rem 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.service-container{
  flex: 1 1 18.750rem;
  width: 21.875rem;
  padding: 1rem;
  box-shadow: 0 3px 5px var(--secondary-shadow);
}
.service-pic{
  width: 65%;
  height: 60%;
  box-shadow: 0 0 5px var(--primary-color);
  
}
.service-container:nth-child(2) .service-pic{
  width: 50%;
}
.service-title{
  font-weight: var(--bold-font);
  margin-bottom: var(--bottom-margin);
  border-bottom: 2px solid var(--secondary-color);
}
.service-btn{
  color: dodgerblue;
  font-weight: var(--bold-font);
  transition: var(--transition);
  font-size: small;
}
.service-btn:hover{
  border-bottom: 2px solid var(--secondary-color);
}
/* ------------- */
/* footer */



@keyframes slider{
  10%{background-image: url(https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtaW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80);}
  30%{background-image: url(https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80);}
  50%{background-image: url(https://images.unsplash.com/photo-1538481199705-c710c4e965fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=965&q=80);}
  70%{background-image: url(https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80);}
  90%{background-image: url(https://images.unsplash.com/photo-1495954222046-2c427ecb546d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80);}
  100%{background-image: url(https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtaW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80);}
}


@media screen and (max-width: 720px){

  nav{
    padding: 1.5rem 1rem;
  }
  nav ul{
    position: fixed;
    background-color: rgba(0,0,0,0.5);
    flex-direction: column;
    top: 86px;
    left: 10%;
    width: 80%;
    text-align: center;
    transform: translateX(120%);
    transition: transform 0.5s ease-in;
  }
  nav ul li{
    margin: 8px;
  }
  nav ul li a{
    color: aqua;
  }
  .burger-menu{
  font-size: 4rem;
    display: block;
  }
/*   for showing our menu  we toggle this class to nav*/
  nav ul.show{
    transform: translateX(0);
  }
  
/*  hero section heading  */
  .hero-section h2{
    font-size: 2rem;
    border-bottom: none;
  }
}

@media screen and (max-width: 440px){
/*   footer */
  .first-part{
    flex-direction: column;
  }
}

</style>
<template>
<div>

<footer>
  <div class="first-part">
    <div class="useful-links">
      <h3>Useful Links</h3>
      <ul>
        <li><a href="#">Our Products</a></li>
        <li><a href="#">Discount Offers</a></li>
        <li><a href="https://www.shadowsedge.com/" target="_blank">Gaming Tools</a></li>
      </ul>
    </div>
    <h1>Pubg | <sup>over</sup></h1>
    <div class="contact" id="contact">
      <h2>Contact-us</h2>
      <ul>
        <li><a href="https://www.facebook.com/" target="_blank">Facebook</a></li>
        <li><a href="https://www.instagram.com/accounts/login/" target="_blank">Instagram</a></li>
        <li><a href="https://www.google.com/gmail/about/" target="_blank">G-mail</a></li>
        <li><a href="#">Linkedin</a></li>
      </ul>
    </div>
  
  </div>
  <div class="second-part">
    <p class="copy">&copy; Copyright 2022</p>
    <p class="copy">
      built with <span>x2612;</span> by <a href="#">SuryaGame</a>
    </p>
  </div>
</footer>





</div>
</template>



<style>


footer{
  background-color: var(--primary-color);
  padding: 2.5rem;
  margin: 2rem 0 0;
  
}
.first-part{
  color: var(--primary-shadow);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  gap: 2rem;
  margin-bottom: var(--bottom-margin-2);
  border-bottom: 2px solid var(--secondary-color);
}
.first-part h1{
  color: var(--bg-color);
}
.first-part h1 sup{
  color: var(--secondary-color);
}
.second-part{
  margin-top: 0.875rem;
  font-size: 1.2rem;
  color: var(--bg-color);
  text-align: center;
  
}
.second-part span{
  font-size: 1.5rem;
  color: aqua;
}


@media screen and (max-width: 440px){

  .first-part{
    flex-direction: column;
  }
}



</style>


<template>
<div>
<header>

<nav>
  
  
  
                  <h1>Pubg | <sup>START</sup></h1>
              
	             <ul class="navigation">
	   <li><a class="nav-link" href="/">Home</a></li>
    <li><a class="router-link" href="/about">About</a></li>
    <li><a class="router-link" href="/services">Services</a></li>
	<li><a class="router-link"  href="/login">Login</a></li>
    <li><a class="router-link" href="/contact">Contact</a></li>
	 <i class="fa fa-bars"></i>
	  <button class="burger-menu" id="burger-menu">&#9776;</button>
	
	
  </ul>
	  
	  
	  
	
	  
	  
	  
	  
	  
	  
	  
	  
    
  
</nav>


</header>
</div>
</template>


<script>
</script>

<style>
nav{
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--primary-color); 
  padding: 1.5rem 3.5rem;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.5);
  font-size: medium;
}
nav h1{
  color: var(--bg-color);
}
nav h1 sup{
  color: var(--secondary-color);
}
nav a{
  color: var(--bg-color);
  transition: var(--transition);
}
nav a:hover{
  color: var(--secondary-color);
  border-bottom: 2px solid var(--secondary-color);
}
nav ul{
  display: flex;
  gap: 1.9rem;
}
nav ul li{
  font-weight: var(--bold-font);
}
.burger-menu{
  color: var(--bg-color);
  background: transparent;
  border: 0;
  font-size: 2rem;
  cursor: pointer;
  display: none;
}
</style>
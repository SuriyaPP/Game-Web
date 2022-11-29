<template>
<div>

<base href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/">
<body>
	<div class="slider">
	
	
	<div>
	
	<iframe   src="https://www.youtube.com/embed/qBhf8S9jpxE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	
	</div>
	
</div>

</body>
</div>
</template>

<style>
@import url(https://fonts.googleapis.com/css?family=Istok+Web);
@keyframes slidy {
0% { left: 0%; }
20% { left: 0%; }
25% { left: -100%; }
45% { left: -100%; }
50% { left: -200%; }
70% { left: -200%; }
75% { left: -300%; }
95% { left: -300%; }
100% { left: -400%; }
}
img {
    width: -webkit-fill-available;
}


iframe{

width:1577px;
height:330px;
}



figcaption{
 color: white;
    text-align: -webkit-center;
    text-shadow: 2px 2px red;

}


* {
  box-sizing: border-box;
}
body, figure { 
  margin: 0; background: #101010;
  font-family: Istok Web, sans-serif;
  font-weight: 100;
}
div#captioned-gallery { 
  width: 100%; overflow: hidden; 
}
figure.slider { 
  position: relative; width: 500%;
  font-size: 0; animation: 30s slidy infinite; 
}
figure.slider figure { 
  width: 20%; height: auto;
  display: inline-block;  position: inherit; 
}
figure.slider img { width: 100%; height: auto; }
figure.slider figure figcaption { 
  position: absolute; bottom: 0;
  background: rgba(0,0,0,0.4);
  color: #fff; width: 100%;
  font-size: 2rem; padding: .6rem; 
}
</style>
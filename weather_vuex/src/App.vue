<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
      <img src="./assets/home.png" alt="home"> <h3>Search page</h3>
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Poiret+One&subset=cyrillic,latin-ext');
@import url('https://fonts.googleapis.com/css?family=Abel');
#app {
  font-family: 'Poiret One', cursive;
  text-align: center;
  height:100%;
  }
 * {
padding: 0;
margin: 0;
  }
  body {
    height:100%;
     min-height:100%;
     background-image: url("./assets/background.jpg");
     background-size: cover;
     background-repeat: no-repeat;
  }
.search {
justify-content: center;
}
i{
  padding:5px;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center
}
a {
  text-decoration: none;
  color: black
}
#nav {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 5px;
  padding-bottom: 10px;
}
#nav h3{
  margin: 0px
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
  font-size: 20px
}
p{
font-size: 20px
}
h3{
font-size: 25px
}

h2{
  font-size: 30px
}
#nav a.router-link-exact-active {
  color: #666666;
}
@media only screen and (max-width: 550px) {
#app {
font-family: 'Abel', sans-serif;
}
p{
font-size: 15px
}
h3{
font-size: 20px
}

h2{
  font-size: 25px;
}
h1{
  font-size: 25px;
}
em {
  font-size: 25px;
}
}
</style>

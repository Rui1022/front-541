<template>
  <div id="app">

      <aside id="item-nav">
        <div class="nav-icon">
          <i class="fa fa-sitemap fa-2x"></i>
        </div>
        <nav class="main-nav">
          <router-link :to="{name:'TrendPage',params:{name:'trend'}}" id="chart-btn" class="main-nav-btn"><i class="fa  fa-area-chart"></i>Current Trend</router-link>
        <router-link :to="{name:'PricesPage',params:{name:'predict'}}" id="prices-btn" class="main-nav-btn">
              <i class="fa fa-dollar"></i> Predict Trend
          </router-link>
        </nav>
      </aside>
  
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
* {
  box-sizing: border-box;
  margin:     0;
  padding:    0;
}

body {
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  font-size:   0.9em;
}

ul {
  list-style: none;
}

/**
 * top header
 */
.top-header {
  align-items: center;
  background:  #202020;
  box-shadow:  0px 2px 10px #333333;
  display:     flex;
  height:      60px;
  position:    fixed;
  top:         0;
  width:       100%;
  z-index:     1;
}

#avatar {
  display: none;
}

.avatar {
  background:    #FFFFFF;
  border-radius: 50%;
  color:         #333C4D;
  height:        40px;
  margin-right:  20px;
  padding-left:  9px;
  padding-top:   5px;
  width:         40px;
}

/**
 * top navigation
 */
.top-nav {
  flex: 1;
}

.top-nav a {
  color:           #F9F9F9;
  font-weight:     400;
  margin-left:     20px;
  text-decoration: none;
}

#logout-link {
  color:           #F9F9F9;
  display:         none;
  font-weight:     400;
  padding:         0 10px;
  text-decoration: none;
}

#welcome-msg {
  border-right:  1px solid #FFFFFF;
  display:       none;
  padding-right: 10px;
}

/**
 * main container
 */
.container {
  margin:    60px auto;
  max-width: 100%;
  min-width: 600px;
  background-color: black;
}

/**
 * main header
 */
.container > header {
  align-items:     center;
  background:      url('http://static.dnaindia.com/sites/default/files/styles/full/public/2017/12/04/629795-cryptocurrency-thinkstock-120417.jpg') no-repeat 50% 50%;
  background-size: 100%;
  display:         flex;
  height:          250px;
}

.container > header p {
  border-left:  3px solid #FFFFFF;
  font-weight:  400;
  font-size:    2.5em;
  line-height:  1em;
  margin-left:  15px;
  margin-top:   120px;
  padding-left: 5px;
}

.container > header span {
  color: #FFFF00;
}

/**
 * aside
 */
#item-nav {
  display: block;
  float: left;
  width: 180px;
/* height: 200px;;   */
  background: #008080;

}
#app{
  background: #76afaf;
  color: burlywood;
 
}
.name-header{
  text-align: center;
  height: 50px;
  line-height: 50px;
  background: #E0FFFF;
}
.nav-icon {
  color:      #FFFFFF;
  padding:    20px;
  text-align: center;
}

/**
 * main navigation
 */
.main-nav-btn {
  background:      none;
  border-top:      1px solid #FFFFFF;
  color:           #FFFFFF;
  display:         block;
  padding:         20px;
  text-align:      left;
  text-decoration: none;
}

.main-nav-btn:hover {
  background: rgba(255, 255, 255, 1);
  color:      #624630;
}


.main-nav-btn i {
  width: 20px;
}

.router-link-active{
background: #E0FFFF;
  color:      #624630;
}
</style>

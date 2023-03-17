<template>
  <div class="main-container">
    <NavBar/>
   <RouterView/>
  </div>
</template>

<script>

import {RouterView} from 'vue-router'
import NavBar from './components/Navbar.vue'
export default {
    name: 'App',
    components:{
        RouterView,
        NavBar
    }
}


</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  max-width: 1200px;
  margin: 0 auto;
}
.main-container {
  padding: 50px;
}
</style>

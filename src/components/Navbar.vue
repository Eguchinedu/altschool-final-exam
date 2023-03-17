<template>
 
    <div class="navbar">
        <div class="hero"><i class='bx bxl-vuejs bx-tada-hover'></i></div>
      <ul class="links">
        <li class="nav">
          <RouterLink active-class="active" id="nav-link" to="/">Home</RouterLink>
        </li>
        <li class="nav">
          <RouterLink active-class="active" id="nav-link" to="/repos">Repos</RouterLink>
        </li>
      </ul>
    </div>
    <hr/>

</template>

<script>
import { RouterLink } from "vue-router";
import "boxicons";
export default {
  name: "NavBar",
  components: {
    RouterLink,
  },
};
</script>

<style scoped>

.navbar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0 0 0;
    padding: 20px;
}
.hero {
    flex: 1;
}
.bxl-vuejs {
    font-size: 50px;
    cursor: pointer;
}

.links {
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.nav {
    margin: 0 20px;
}
#nav-link {
    font-size: 20px;
    font-weight: bold;
}
.active {
  font-weight: bold;
  background-color: #309ad3;
  color: white;
  border-radius: 10px;
  padding: 10px 15px;
}
hr {
    background-color: rgb(0, 0, 0);
    height: 6px;
    border-radius: 30px;
}
@media only screen and (max-width: 600px) {
    .nav {
    margin: 0 10px;
}
    #nav-link {
    font-size: 12px;
    font-weight: bold;
}

}

</style>

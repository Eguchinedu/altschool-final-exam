<template>
    <div>
        <div class="content-header">
          <h1 class="content-title">
            {{errorMsg ? errorMsg :  route.params.id }}
          </h1>
        </div>
        <div class="content-body">
              <div v-for="data in datas" :key="data.id" class="content">
                  <p>File name: {{ data.name }}</p>
                  <p>File size: {{ data.size }} kb</p>
                  <p>File type: {{ data.type }}</p>
              </div>
        </div>
    </div>
</template>

<script>
import {useRoute} from 'vue-router'
import axios from "axios";

    export default {
        name: 'CurrentRepo',
         data() {
    return {
      route: useRoute(),
      datas: [],
      errorMsg: ''
    };
  },

        methods: {
    getRepos() {
      axios
        .get(`https://api.github.com/repos/Eguchinedu/${this.route.params.id}/contents`)
        .then((res) => {
          console.log(res.data);
          console.log(this.route.params.id)
          this.datas = res.data;
        })
        .catch((err) => {
          console.log(err);
          this.errorMsg = 'Error retrieving repos 😕';
        });
    },
  },
  mounted(){
    this.getRepos()
  }
    }
</script>

<style scoped>
.content-header {
      height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content-title {
  line-height: 60px;
  color: #555;
  font-size: 80px;
}
.content-body{
    padding: 20px;
}
.content{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #eff4f7;
    border: 1px solid grey;
    padding: 10px 20px;
    margin: 10px 0;
    border-radius: 20px;
    font-weight: bold;
}
.content p{
    flex: 1;
}
@media only screen and (max-width: 600px) {
 .content-title {
    font-size: 30px;
 }
 .content {
    flex-direction: column;
    align-items: flex-start;
 }
}
</style>
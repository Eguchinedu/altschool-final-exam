<template>
  <div class="repo-container">
    <div v-for="d in data" :key="d.id" class="repo-box">
        <h3 class="repo-title">{{ d.name }}</h3>
        <p :class="d.private  ? 'private' : 'public'">{{ d.private ? 'private' : 'public' }}</p>
        <p class="repo-date">
            This Repository was created at
            {{ format(new Date(d.created_at), 'dd MMMM yyyy') }}
            by
            {{d.owner.login}}
          </p>
          <div class="repo-lang">

            <p>Language: {{ d.language ? d.language : 'null' }}</p>
          </div>
          <div class="repo-button">

            <RouterLink :to="`/repos/${ d.name }`" class="repo-btn" >View Content</RouterLink>
          </div>
    </div>
    <div class="paginate">
      <VueTailwindPagination
      :current="currentPage"
      :total="total"
      :per-page="perPage"
      @page-changed="pageChange($event)"
      />
    </div>
   
  </div>
</template>

<script>

import {RouterLink} from 'vue-router'
import VueTailwindPagination from "@ocrv/vue-tailwind-pagination"
import  "@ocrv/vue-tailwind-pagination/styles"
import axios from "axios";
import { format } from "date-fns";





export default {
  name: "PageCreate",
   
  components: {
    VueTailwindPagination,
    RouterLink,
  },
   data() {
    return {
      format,
      currentPage: 1,
      perPage: 4,
      total: 20,
      data:[]
    };
  },
  methods: {
    pageChange(pageNumber){
        this.currentPage = pageNumber;
        this.getData()
    },
    async getData() {
        const response = await axios( `https://api.github.com/users/Eguchinedu/repos?page=${this.currentPage};per_page=${this.perPage}`);
      console.log(response.data)
        this.data = response.data;
        
    }
  }, 
  mounted(){
    this.currentPage = 1;
    this.getData();
  }
};
</script>

<style scoped>
.repo-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
}


.repo-box {
        text-align: center;
    max-height: 300px;
    min-height: 300px;
    min-width: 300px;
    max-width: 500px;
    border-radius: 20px;
    font-weight: bold;
    padding: 30px;
    margin: 20px;
    background-color: #eff4f7;
    outline: none;
    word-wrap: break-word;
    line-height: 25px;
}

.repo-title {
    margin: 0 0 30px 0;
}

.private {
    display: inline-block;
    background-color: rgb(224, 64, 64);
    border-radius: 20px;
    padding: 3px 8px;
    color: #fff;
    font-size: 12px;
    font-weight: 500;
}
.public {
    display: inline-block;
    background-color: rgb(80, 196, 80);
    border-radius: 20px;
    padding: 3px 8px;
    font-size: 12px;
    font-weight: 500;
    color: #fff;
}

.repo-button {
    margin: 20px 0 30px 0;
}
.repo-btn {
    background-color: #309ad3;
    border-radius: 20px;
    padding: 10px 50px;
    text-decoration: none;
    color: #fff;
}
.repo-btn:hover {
    background-color: #78bfe6;
}

</style>
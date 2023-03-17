import {createRouter, createWebHistory} from "vue-router"
import HomeView from '../views/HomeView.vue'
import ListOfRepos from "../components/ListOfRepos.vue";
import CurrentRepo from "../components/CurrentRepo.vue";
import PageNotFound from '../components/PageNotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/repos",
      name: "repos",
      component: ListOfRepos,
    },
    {
      path: "/repos/:id",
      name: "repo",
      component: CurrentRepo,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      component: PageNotFound,
    },
  ],
});

export default router;
<template>
  <div>
    <div>
        <h1 v-if="errorMsg">{{ errorMsg }}</h1>
        <div class="profile-box">
        <div class="profile-picture">
          <img :src="posts.avatar_url" :alt="posts.name" />
        </div>
        <div className="profile-text">
          <h3>Hi! My Name is {{posts.name}}</h3>
          <br />
          <p>Followers: {{posts.followers}}</p>
          <p>Following: {{posts.following}}</p>
          <p>Public Repos: {{posts.public_repos}}</p>
          <br />
          <br />
          <h4>About Me:</h4>
          <br/>
          <p>
            I'm a frontend developer, currently studying in Altschool Africa,
            i'm skilled in HTML, CSS and Javascript. Here's a quick summary
            about me: <br /> 😊 Pronouns: He/him 💡 Fun fact: I'm currently
            studying at AltSchool Africa School of Software Engineering Class of
            2022. 🌱 I’m currently learning JavaScript and Reactjs. 😊 I’m
            looking for help with open source projects, hackathons, internships,
            and entry-level opportunities. 💼 Job interests: Software Engineer,
            Front Engineer, or UI Engineer (Intern or Junior level). 📫 You can
            contact me by emailing eguchinedu18@gmail.com.
            <br /> Click Below to view my Github Repo
          </p>
        </div>
      </div>
 
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "GitBio",

  data() {
    return {
        name: 'Eguchinedu',
      posts: [],
      errorMsg: ''
    };
  },
  methods: {
    getPosts() {
      axios
        .get(`https://api.github.com/users/${this.name}`)
        .then((res) => {
          console.log(res.data);
          this.posts = res.data;
        })
        .catch((err) => {
          console.log(err);
          this.errorMsg = 'error retrieving data';
        });
    },
  },
  mounted(){
    this.getPosts()
  }
};
</script>

<style scoped>
.profile-box {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row-reverse;
    font-weight: bold;
}
.profile-picture, .profile-text {
    min-width: 300px;
    flex-basis: 50%;
}
.profile-picture img {
    width: 100%;
    padding: 50px;
    border-radius: 50%;
}
.profile-text {
    padding: 50px;
}


@media only screen and (max-width: 600px) {
    .profile-picture img {
       padding: 10px;
    }
    .profile-text {
        padding: 0px;
    }
}
</style>
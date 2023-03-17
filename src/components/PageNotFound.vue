<template>
    <div class='PNF-container'>
      <div class="PNF">
        <div class="PNF-Header">
          <h1>Oops!</h1>
          <h3>We can't seem to find the page <br/> you're looking for.</h3>
          <p>Error code: 404</p>
          
        </div>
        <div class="404-emo">
          <p class='PNF-emoji'>😕</p>
        </div>
      </div>
    </div>
</template>

<style scoped>
.PNF-container {
    display:flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
.PNF{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
.PNF-Header {
    padding: 30px;
}

.PNF-Header h1 {
    font-size: 50px;
    font-weight: bold;
}
.PNF-Header h3 {
    font-size: 30px;
    font-weight: bold;
    margin: 20px 0 ;
}
.PNF-Header p{
    font-size: 16px;
    font-weight: bold;
}

.PNF-emoji {
    font-size: 200px;
}

@media only screen and (max-width: 800px) {
    .PNF-emoji {
        font-size: 150px;
    }
    .PNF {
        flex-wrap: wrap-reverse;
    }
}
</style>
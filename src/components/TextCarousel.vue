<template>

  <div class="text-carousel-container">

    <p>My focus is on </p>
    <b>
      <div class="text-carousel-list colored-text">
        usability.<br/>
        accessibility.<br/>
        clean designs.<br/>
        rich UX.<br/>
        pixel perfection.
      </div>
    </b>

  </div>
</template>

<script>
export default {
  name: "TextCarousel"
}
</script>

<style scoped>

.text-carousel-container {
  font: normal 16px/20px Montserrat, sans-serif;
}

.text-carousel-container p {
  height: 20px;
  float: left;
  margin-right: 0.5em;
}

.text-carousel-container b {
  float: left;
  overflow: hidden;
  position: relative;
  height: 20px;
  top: 0;
}

.text-carousel-container .text-carousel-list {
  display: inline-block;
  color: var(--v-secondary-base);
  position: relative;
  white-space: nowrap;
  top: 0;
  left: 0;


  /*animation*/
  -webkit-animation: move 5s;
  -moz-animation: move 5s;
  -ms-animation: move 5s;
  -o-animation: move 5s;
  animation: move 5s;
  /*animation-iteration-count*/
  -webkit-animation-iteration-count: infinite;
  -moz-animation-iteration-count: infinite;
  -ms-animation-iteration-count: infinite;
  -o-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  /*animation-delay*/
  -webkit-animation-delay: 1s;
  -moz-animation-delay: 1s;
  -ms-animation-delay: 1s;
  -o-animation-delay: 1s;
  animation-delay: 1s;
}

@keyframes move {
  0% {
    top: 0px;
  }
  20% {
    top: -20px;
  }
  40% {
    top: -40px;
  }
  60% {
    top: -60px;
  }
  80% {
    top: -80px;
  }
}

@-webkit-keyframes move {
  0% {
    top: 0px;
  }
  20% {
    top: -20px;
  }
  40% {
    top: -40px;
  }
  60% {
    top: -60px;
  }
  80% {
    top: -80px;
  }
}

@-moz-keyframes move {
  0% {
    top: 0px;
  }
  20% {
    top: -20px;
  }
  40% {
    top: -40px;
  }
  60% {
    top: -60px;
  }
  80% {
    top: -70px;
  }
}

@-o-keyframes move {
  0% {
    top: 0px;
  }
  20% {
    top: -20px;
  }
  40% {
    top: -40px;
  }
  60% {
    top: -60px;
  }
  80% {
    top: -80px;
  }
}

@keyframes move {
  0% {
    top: 0px;
  }
  20% {
    top: -20px;
  }
  40% {
    top: -40px;
  }
  60% {
    top: -60px;
  }
  80% {
    top: -80px;
  }
}
</style>
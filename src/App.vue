<template>
  <v-app>
    <v-app-bar
      app
      flat
      rounded
      fixed
      color="background"
      class="container pt-0 pb-0"
    >
      <div>
        <div class="website-title"><span class="name">Luca</span> Minotti</div>
      </div>
    </v-app-bar>

    <v-main>
      <Home />
    </v-main>
  </v-app>
</template>

<script>
import Home from "./components/Home";

export default {
  name: "App",

  components: {
    Home,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.website-title {
  text-transform: uppercase;
  font-weight: 500;
  font-size: 25px;
  word-spacing: 5px;
  letter-spacing: 0;
}
.website-title .name {
  font-weight: 300;
}
</style>

<style>
html,
body,
main {
  background-color: var(--v-background-base) !important;
}
.theme--light.v-application {
  color: var(--v-dark-base) !important;
}

.v-application .v-application--wrap *, * {
  font-family: "Inter", sans-serif !important;
}
</style>

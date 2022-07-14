import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: "#84c6db",
        secondary: "#fa986b",
        accent: "#0f58a7",
        background: "#f2f2f0",
        anchor: "#fa986b",
        light: "#f2f2f0",
        dark: "#0d0d0d",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
      },
    },
  },
});

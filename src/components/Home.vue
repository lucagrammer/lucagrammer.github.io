
<template>
  <v-container>
    <v-container>
      <v-row class="container ma-auto" justify="center" >
        <v-col cols=12 sm=6 class="mt-0" order="1" order-sm="0">
          <h1 class="font-weight-bold mb-0 text--primary colored-text colored-text-var2">Hi,</h1>

          <p class="font-weight-regular">
            I'm Luca. I studied <i>Computer Engineering</i> and I got a master's
            degree in <i>Computer Science and Engineering</i> at Politecnico di
            Milano in July 2022. <br/>

            I'm based near Milan and I am currently collaborating as a full-stack web
            developer and data analyst at the Department of Electronics, Informatics and Bioengineering
            (DEIB) of Politecnico di Milano. <v-icon right small @click="openLink('https://www.deib.polimi.it/ita/home')">mdi-open-in-new</v-icon>
          </p>
          <p class="font-weight-regular">
            My main interest is
            <span class="colored-text">full-stack software development</span>,
            and I give my best in
            <span class="colored-text colored-text-var2"
              >front-end development</span
            >. <br />
            I love building user-friendly applications with beautiful design and
            great functionality.
          </p>
          <TextCarousel/>
        </v-col>
        <v-col cols=12 sm=4 class="avatar" order="0" order-sm="1">
          <v-avatar size="250" max-height="40vh" max-width="40vh">
              <v-img class="colored-background" max-height="40vh" max-width="40vh"  aspect-ratio="1" :src="require('../assets/profile.png')"/>

          </v-avatar>
        </v-col>
        <v-col cols=12 sm="10" class="mb-0 pb-0" order="2" order-sm="2">
          <v-btn depressed rounded color="secondary" href="mailto:minottiluca@icloud.com" class="colored-background mb-2" ><v-icon left>mdi-email</v-icon> Get in touch</v-btn>&nbsp;
          <v-btn depressed rounded color="secondary" href="https://www.linkedin.com/in/lucagrammer" class="colored-background colored-background-var mb-2" ><v-icon left>mdi-linkedin</v-icon> LinkedIn</v-btn>&nbsp;
          <v-btn depressed rounded color="secondary" href="https://t.me/Lucagrammer" class="colored-background colored-background mb-2" ><v-icon left>mdi-send</v-icon> Telegram</v-btn>
        </v-col>
      </v-row>

      <v-row class="container ma-auto" justify="center">
        <CurrentEmployment/>
      </v-row>
      <v-row class="container ma-auto" justify="center">
        <WorksSection/>
      </v-row>

      <div class="footer container">
        <p class="contacts"><b>Contacts</b><br>
          Mail: <a href="mailto:minottiluca@icloud.com">minottiluca@icloud.com</a><br>
          Phone: <a href="tel:+393315228707">331-5228707</a>
        </p>
        Developed with love in Milan by Luca Minotti
      </div>

      <v-snackbar v-model="showSnackbar" color="error" content-class="text-h4 pr-7 pl-7 " bottom multi-line timeout="-1" app>
        <v-icon left large>mdi-alert-circle-outline</v-icon>Website under maintenance
        <div class="text-subtitle-1">The website will be back online soon</div></v-snackbar>
    </v-container>
  </v-container>
</template>

<script>
import TextCarousel from "@/components/TextCarousel";
import WorksSection from "@/components/WorksSection";
import CurrentEmployment from "@/components/CurrentEmployment";
export default {
  name: "HelloWorld",
  components: {CurrentEmployment, WorksSection, TextCarousel},
  data: () => ({
    showSnackbar: false
  }),
  methods:{
    /**
     * Open a link in a new tab
     * @param link The link to be opened
     */
    openLink(link){
      window.open(link, '_blank').focus();
    }
  }
};
</script>
<style>
.colored-text {
  background: -webkit-linear-gradient(
    45deg,
    var(--v-secondary-base),
    var(--v-primary-base),
    var(--v-accent-base)
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
}

.colored-background{
  background: -webkit-linear-gradient(
    45deg,
    var(--v-secondary-base),var(--v-secondary-base),
    var(--v-primary-base)
  );
}

.colored-background.colored-background-var{
  background: -webkit-linear-gradient(
    45deg,
    var(--v-primary-base),
    var(--v-secondary-base)
  );
}

.colored-text.colored-text-var{
  background: -webkit-linear-gradient(
    45deg,
    var(--v-accent-base),
    var(--v-primary-base),
    var(--v-secondary-base)
  );
  background-clip: text;
}

.colored-text.colored-text-var2, .colored-hover-text:hover  {
  background: -webkit-linear-gradient(
  45deg,
    var(--v-secondary-base),
    var(--v-accent-base)
  );
  background-clip: text;
}

.footer{
  font-size: 15px;
  line-height: 17px;
  font-weight: 300;
}

.footer .contacts{
  margin-top:10px;
  margin-bottom:10px;
  font-weight: 400;
}
.footer .contacts a{
  text-decoration: none !important;
}

.avatar{
  text-align: center;
}
</style>

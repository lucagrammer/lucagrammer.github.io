
<template>
  <v-container class="px-0 px-sm-auto">
    <v-container class="px-1 px-sm-auto">
      <v-row class="container ma-auto" justify="center" >
        <v-col cols=12 sm=6 class="mt-0 slide-in-blurred-left" order="1" order-sm="0">
          <h1 class="font-weight-bold mb-0 text--primary colored-text colored-text-var2 ">Hi,</h1>

          <p class="font-weight-regular">
            I'm Luca. I studied <i>Computer Engineering</i> and I got a master's
            degree in <i>Computer Science and Engineering</i> at Politecnico di
            Milano in July 2022.
          </p>
          <p class="font-weight-regular">
            I'm based near Milan and I am currently covering the role of
            <span class="colored-text">IT consultant</span> at
            Technology Reply Financial Services
            <v-icon right small @click="openLink('https://www.reply.it')">mdi-open-in-new</v-icon>
            , a leading IT consulting company.
            Specifically, I work as a software engineer in the credit worthiness team
            for a major banking institution.
          </p>
          <p class="font-weight-regular">
            Previously, I collaborated as a full-stack web developer at the
            Department of Electronics, Informatics and Bioengineering (DEIB)
            of Politecnico di Milano. <v-icon right small @click="openLink('https://www.deib.polimi.it/ita/home')">mdi-open-in-new</v-icon>
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
        <v-col cols=12 sm=4 class="avatar slide-in-blurred-right" order="0" order-sm="1">
          <v-avatar size="250" max-height="40vh" max-width="40vh">
            <transition name="bounce">
                <v-img key=1 v-if="this.shownImg===0" class="secondary" max-height="40vh" max-width="40vh"  aspect-ratio="1" transition="fade" :src="this.imgs[0]"/>
                <v-img key=2 v-else class="primary" max-height="40vh" max-width="40vh"  aspect-ratio="1" transition="fade" :src="this.imgs[1]"/>
            </transition>
          </v-avatar>
        </v-col>
        <v-col cols=12 sm="10" class="mb-0 pb-0 slide-in-blurred-left" order="2" order-sm="2">
          <v-btn depressed rounded color="secondary" href="mailto:minottiluca@icloud.com" class="colored-background mb-2 wobble-hor-bottom" ><v-icon left>mdi-email</v-icon> Get in touch</v-btn>&nbsp;
          <v-btn depressed rounded color="secondary" href="https://www.linkedin.com/in/lucagrammer" class="colored-background colored-background-var mb-2" ><v-icon left>mdi-linkedin</v-icon> LinkedIn</v-btn>&nbsp;
          <v-btn depressed rounded color="secondary" href="https://t.me/Lucagrammer" class="colored-background colored-background mb-2" ><v-icon left>mdi-send</v-icon> Telegram</v-btn>
        </v-col>
      </v-row>

      <v-row class="container ma-auto slide-in-blurred-left" justify="center">
        <CurrentEmployment/>
      </v-row>
      <v-row class="container ma-auto slide-in-blurred-left" justify="center">
        <WorksSection/>
      </v-row>

      <div class="footer container slide-in-blurred-left">
        <p class="contacts"><b>Contacts</b><br>
          Mail: <a href="mailto:minottiluca@icloud.com">minottiluca@icloud.com</a>
        </p>
        Designed & developed with love in Milan by Luca Minotti. <br/>
        Written in Vue.JS <br/>
        Details matter.
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
  mounted(){
    setInterval(()=>{
      this.shownImg= this.shownImg===1? 0 : 1;
    }, 5000)
  },
  data: () => ({
    showSnackbar: false,
    shownImg: 0,
    imgs: [require('../assets/profile.png'), require('../assets/profile-alt.png')],
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

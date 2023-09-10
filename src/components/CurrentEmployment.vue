<template>
  <v-col cols=12 sm=10 class="mt-0">
    <v-row class="container ma-auto my-0 py-0">
        <v-timeline dense>
          <v-timeline-item v-for="(job, i) in jobs" color="secondary" :key="i" small class="my-0 py-0 mb-9">
            <v-row>
              <v-col cols="12" md="9">
                <div class="caption  my-0 py-0">{{job.date}}</div>
                <h3 class="font-weight-bold my-0 py-0 colored-text">
                  {{job.position}}
                </h3>
                <div class="my-0 py-0 body-2 location cursor-pointer" @click="openLink(job.companyLink)">
                  <span class="font-weight-medium">{{job.place}}</span><br/>{{job.department}}
                </div>

              </v-col>
              <v-col cols="3" class="hidden-sm-and-down">
                <v-img :src="job.img" max-height="150" max-width="210" alt="Logo"
                       @click="openLink(job.companyLink)" class="cursor-pointer"/>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="mt-0 py-0">
                <p class="body-2">
                  <span v-html="job.body"></span>
                  <br/>
                  <span v-if="job.linkedinLink" class="primary--text text-overline cursor-pointer body-2" @click="openLink(job.linkedinLink)">More</span>
                </p>
              </v-col>
            </v-row>
          </v-timeline-item>
        </v-timeline>
    </v-row>
  </v-col>

</template>

<script>
export default {
  name: "CurrentEmployment",
  data(){
    return{
      jobs:[
        {
          img: require("../assets/reply.png"),
          color: 'cyan',
          date: 'January 2023 - Current',
          position: 'IT Consultant',
          place: 'Reply SPA',
          department: 'Techology Reply Financial Services',
          body: 'I am working on credit risk management applications for a major banking institution. ' +
              'Specifically, the applications are in charge of acquiring data from financial analysts ' +
              'or directly from the customer, and performing the computations necessary to assess the ' +
              'customer’s creditworthiness. With this in mind, these applications interface with a ' +
              'number of other services via REST and SOAP services.',
          companyLink: 'https://www.reply.it',
          linkedinLink: 'https://www.linkedin.com/in/lucagrammer/',
          keys: ['Angular','Java','Spring','Oracle','Scrum', 'Agile']
        },
        {
          img: require("../assets/deib_logo0.png"),
          color: 'cyan',
          date: 'February 2022 - January 2023',
          position: 'Full Stack Web Developer and Data Analyst',
          place: 'Politecnico di Milano',
          department: 'Department of Electronics, Informatics and Bioengineering (DEIB)',
          body: 'I have contributed to several projects in the area of data analysis.<br/>'+
              'Specifically, I took part in the design and development of ' +
              '<a target="_blank" href="http://gmql.eu/variant_hunter/" style="text-decoration: none">VariantHunter</a> application ' +
              'for analyzing the huge amount of genomic data related to the Sars-cov-2 pandemic. <br/>' +
              'Other projects I have contributed to include the development of a complex UI for ' +
              '<a target="_blank" href="http://geco.deib.polimi.it/graph-search/" style="text-decoration: none">Graph-search</a> application, ' +
              'a search engine for the exploration of scientific literature using the “graphical abstract” paradigm.',
          companyLink: 'https://www.deib.polimi.it/ita/home',
          linkedinLink: 'https://www.linkedin.com/in/lucagrammer/',
          keys: ['Angular','Java','Spring','Oracle','Scrum', 'Agile']
        }
      ]
    }
  },
  methods:{
    /**
     * Open a link in a new tab
     * @param link The link to be opened
     */
    openLink(link){
      window.open(link, '_blank').focus();
    }
  }
}
</script>

<style scoped>
.location{
  line-height: 15px !important;
}

.cursor-pointer{
  cursor: pointer;
}
</style>
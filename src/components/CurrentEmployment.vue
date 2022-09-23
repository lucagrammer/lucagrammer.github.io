<template>
  <v-col cols=12 sm=10 class="mt-0">
    <v-row class="container ma-auto my-0 py-0">
        <v-timeline dense>
          <v-timeline-item v-for="(job, i) in jobs" color="secondary" :key="i" small class="my-0 py-0">
            <v-row>
              <v-col cols="12" md="9">
                <div class="caption  my-0 py-0">{{job.date}}</div>
                <h3 class="font-weight-bold my-0 py-0 colored-text">
                  {{job.position}}
                </h3>
                <div class="my-0 py-0 body-2 location ">
                  <span class="font-weight-medium">{{job.place}}</span><br/>{{job.department}}
                </div>

              </v-col>
              <v-col cols="3" class="hidden-sm-and-down">
                <v-img :src="job.img" max-height="150" max-width="210" alt="Logo Politecnico di Milano" />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <p class="body-2">
                  {{ job.body }}
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
          img: require("../assets/deib_logo0.png"),
          color: 'cyan',
          date: 'February 2022 - Current',
          position: 'Full Stack Web Developer',
          place: 'Politecnico di Milano',
          department: 'Department of Electronics, Informatics and Bioengineering (DEIB)',
          body: 'The responsibilities include the development of multiple tools of interest to the department: from the user interface to the backend and data analysis system.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.location{
  line-height: 15px !important;
}
</style>
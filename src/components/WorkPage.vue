<template>
  <v-card flat>
    <v-img
        :src="showingWork.cover"
        height="200px"
        v-touch="{down: () => {$emit('showWork',false);}}"
    ></v-img>

    <v-row class="container ma-auto" justify="center">
      <v-col cols=12 sm=10>
        <v-card-actions class="container">
          <v-spacer></v-spacer>
          <v-btn
              color="primary" large
              text rounded plain class="pa-4"
              @click="$emit('showWork',false);"
          >
            <v-icon left>mdi-close-circle-outline</v-icon>
            Close
          </v-btn>
        </v-card-actions>

        <v-container>
          <div class="work-date mb-2">{{ showingWork.dateStart }} - {{ showingWork.dateEnd }}</div>
          <v-card-title>
            <h2 class="font-weight-bold mb-2 text--primary colored-text">{{ showingWork.title }}</h2>
          </v-card-title>

          <v-card-subtitle>
            <div class="work-subtitle mb-2">{{ showingWork.expandedSubtitle }}</div>

            <v-chip v-for="(tag, tag_index) in showingWork.tags" :key="tag_index" small outlined
                    :color="tagColors[tag]"
                    class="tags mr-2 mb-2">
              {{ tag }}
            </v-chip>

          </v-card-subtitle>

          <v-card-text v-html="showingWork.intro">
          </v-card-text>
          <v-container>
            <v-btn v-if="showingWork.url" depressed rounded color="secondary" :href="showingWork.url" target="_blank"
                   class="colored-background mb-2 mr-2">
              <v-icon left>mdi-arrow-top-right</v-icon>
              Open Website
            </v-btn>
            <v-btn v-if="showingWork.repoUrl" depressed rounded color="secondary" :href="showingWork.repoUrl" target="_blank"
                   class="colored-background colored-background-var mb-2">
              <v-icon left>mdi-github</v-icon>
              GitHub repository
            </v-btn>
          </v-container>
          <v-row justify="center">
            <v-col
                v-for="(screenshot, screenshotsIndex) in showingWork.screenshots"
                :key="screenshotsIndex"
                class="d-flex child-flex"
                cols="12" sm="6">
              <ImgWithZoom :screenshot="screenshot"></ImgWithZoom>
            </v-col>
          </v-row>

        </v-container>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import ImgWithZoom from "@/components/ImgWithZoom";

export default {
  name: "WorkPage",
  components: {ImgWithZoom},
  props: {
    showingWork: {required: true},
    tagColors: {required: true}
  },

}
</script>

<style scoped>

</style>
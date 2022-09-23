<template>
  <v-dialog
      v-model="imageZoom"
      @click="imageZoom=false"
      class="rounded-xl picture-dialog" :transition="false" overlay-opacity="0.9"
      max-width="80vw"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-img v-bind="attrs"
             v-on="on"
             :src="screenshot"
             class="rounded-xl cursor-expand" @click="imageZoom=true"
      >
      </v-img>
    </template>

    <v-img :src="screenshot" @click="imageZoom=false" class="cursor-reduce"></v-img>
  </v-dialog>
</template>

<script>
export default {
  name: "ImgWithZoom",
  props: {
    screenshot: {required: true}
  },
  data() {
    return {
      imageZoom: false
    }
  }
}
</script>

<style scoped>

</style>
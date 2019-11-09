<template>
  <div>
    <MyTab />
    <MyFavorite />
  </div>
</template>
<style scoped>
</style>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MyTab from "../components/MyTab.vue";
import MyFavorite from "../components/MyFavorite.vue";

@Component({
  components: {
    MyTab,
    MyFavorite
  }
})
export default class MyHeader extends Vue {}
</script>
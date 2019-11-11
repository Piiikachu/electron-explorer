<template>
  <div class="fav-container">
    <a-button v-for="fav in favs" :key="fav.key"><a-icon type="folder" /> {{fav.name}}</a-button>
  </div>
</template>
<style>
.fav-container {
  display: flex;
  line-height: 30px;
  background-color: #f5f5f5;
  padding: 2px;
}
.fav-container .ant-btn {
  height: 90%;
  background-color: #f5f5f5;
  border-radius: 0px;
}
</style>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
interface FavContent {
  key: string;
  name: string;
  path: string;
}
@Component
export default class MyFavorite extends Vue {
  favs: FavContent[] = [
    {
      key: "0",
      name: "study",
      path: "D://study"
    },
    {
      key: "1",
      name: "work",
      path: "D://work"
    }
  ];
}
</script>
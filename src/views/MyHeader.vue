<template>
  <div>
    <el-row>
      <MyTab />
    </el-row>
    <el-row>
      <MyFavorite />
    </el-row>
  </div>
</template>
<style>
.el-row {
  line-height: 35px;
  align-content: center;
}
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
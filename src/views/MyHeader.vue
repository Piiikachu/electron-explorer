<template>
  <div>
    <el-row >
      <el-col :xs="20" :sm="21" :md="22" :lg="23" :xl="23">
        <MyTab />
      </el-col>
      <el-col :xs="4" :sm="3" :md="2" :lg="1" :xl="1">
        <div></div>
      </el-col>
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
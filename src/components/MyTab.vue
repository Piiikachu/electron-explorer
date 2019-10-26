<template>
  <div>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <!-- <el-tab-pane v-for="item in items" :key="item.key" :label="item.label" :name="item.id"></el-tab-pane> -->
      <el-tab-pane label="用户管理" name="first"></el-tab-pane>
      <el-tab-pane label="配置管理" name="second"></el-tab-pane>
      <el-tab-pane label="角色管理" name="third"></el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth"></el-tab-pane>
    </el-tabs>
  </div>
</template>
<style>
</style>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { ipcRenderer } from "electron";
@Component
export default class MyTab extends Vue {
  activeName: string = "first";
  handleClick() {
    ipcRenderer.send("tab-click", this.activeName);
    console.log(this.activeName);
  }
}
</script>
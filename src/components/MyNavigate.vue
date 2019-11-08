<template>
  <div>
    <!-- <h1>{{title}}</h1> -->
    <router-link :to="{path:'/'}">home</router-link>
    <el-breadcrumb separator="/">
      <!-- <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item> -->
      <el-breadcrumb-item v-for="item in breadCrumb" :key="item.name">{{item.content.path}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<style>
</style>
<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
interface PathContent {
  path: string;
}
interface BreadcrumbContent {
  name: string;
  content: PathContent;
  link?: string;
}
@Component
export default class MyNavigate extends Vue {
  @Prop() title!: string;

  get dirArray(): string[] {
    return this.title.split(" ");
  }
  get breadCrumb(): Array<BreadcrumbContent> {
    let bc: Array<BreadcrumbContent> = [];
    this.dirArray.forEach((dir, index) => {
      let content: BreadcrumbContent = {
        name: ++index + "",
        content: { path: dir }
      };
      bc.push(content);
    });
    return bc;
  }

}
</script>
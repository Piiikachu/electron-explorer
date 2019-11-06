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
  link?:string;
}
@Component
export default class MyNavigate extends Vue {
  @Prop() title!: string;
  breadCrumb: Array<BreadcrumbContent> = [];

  created() {
    let dirArray: string[] = this.title.split(" ");
    let index = 0;
    for (let dir of dirArray) {
      this.breadCrumb.push({ name: ++index + "", content: { path: dir } });
    }
  }

  // @Watch("title")
  // onChangeValue(oldstr: string, newstr: string) {
  //   let dirArray: string[] = newstr.split(" ");
  //   for (let dir of dirArray) {
  //     this.breadCrumb.push({ name: dir, content: { path: "test" } });
  //   }
  // }
}
</script>
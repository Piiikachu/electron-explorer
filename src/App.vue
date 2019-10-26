<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <el-container style="height:100%" direction="vertical">
      <el-header style="height:100%" directrion="vertical">
        <MyHeader />
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>

        <el-main>
          <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
        </el-main>
      </el-container>

      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
import MyHeader from "./views/MyHeader.vue";
@Component({
  components: {
    MyHeader,
    HelloWorld
  }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>

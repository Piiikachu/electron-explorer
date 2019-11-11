<template>
  <div id="app">
    <div class="header">
      <MyHeader />
    </div>
    <div class="main">
      <div class="sider">
        <MySider />
      </div>
      <div class="content">content</div>
    </div>
    <div class="footer">footer</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MyHeader from "./views/MyHeader.vue";
import MySider from "./components/MySider.vue";
@Component({
  components: {
    MyHeader,
    MySider
  }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100%;
  color: #aaaaaa;
  display: flex;
  flex-direction: column;
}
#app .header {
  margin-top: 1px;
  background-color: pink;
}
#app .main {
  flex: 1;
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: row;
}
#app .main .sider {
  border: #aaaaaa;
  border-right-width: 1px;
  min-width: 120px;
  width: 200px;
  color: #fff;
}
#app .main .content {
  flex: auto;
  color: #fff;
}
/* #app .footer {
  background-color: lightblue;
  height: 20px;
  color: #fff;
} */
#app .footer{
  position: fixed;
  bottom: 0px;
  height: 20px;
  width: 100%;
  background-color: lightblue;
}
</style>

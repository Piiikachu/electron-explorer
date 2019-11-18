<template>
  <div id="app" :style="style">
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
import { ipcRenderer } from "electron";

interface CssStyle {
  width: string;
  height: string;
}
@Component({
  components: {
    MyHeader,
    MySider
  }
})
export default class App extends Vue {
  style = {
    width: "400px",
    height: "600px"
  };
  created() {
    ipcRenderer.on("win-resize", (event, size: number[]) => {
      let s: CssStyle = {
        width: `${size[0]}px`,
        height: `${size[1]}px`
      };
      this.style = s;
    });
  }
}
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
  width: 100%;
  flex-direction: row;
  overflow: hidden;
}
#app .main .sider {
  border: red solid 1px;
  min-width: 120px;
  width: 200px;
  color: #fff;
  overflow: auto;
}
#app .main .content {
  flex: auto;
  color: black;
  overflow: auto;
}
#app .footer {
  background-color: rgb(167, 233, 255);
  height: 20px;
  color: #fff;
  flex-shrink: 0;
}
/* #app .footer {
  position: fixed;
  bottom: 0px;
  height: 20px;
  width: 100%;
  background-color: lightblue;
} */
</style>

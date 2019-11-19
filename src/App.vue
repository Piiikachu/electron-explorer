<template>
  <div id="app" :style="style">
    <div class="header">
      <MyHeader />
    </div>
    <div class="main">
      <!-- <div class="sider">
        <MySider />
      </div>
      <div class="content"><MyContent /></div>-->
      <Split v-model="split1" min="120px">
        <div slot="left" class="demo-split-pane" id="left">
          <MySider />
        </div>
        <div slot="right" class="demo-split-pane">
          <!-- <MyContent /> -->
          <MyTable />
        </div>
      </Split>
    </div>
    <div class="footer">footer</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MyHeader from "./views/MyHeader.vue";
import MySider from "./components/MySider.vue";
import MyContent from "./components/MyContent.vue";
import MyTable from './components/MyTable.vue';
import { ipcRenderer } from "electron";

interface CssStyle {
  width: string;
  height: string;
}

interface PathContent {
  index: number;
  path: string;
}

@Component({
  components: {
    MyHeader,
    MySider,
    MyContent,
    MyTable
  }
})
export default class App extends Vue {
  split1 = 0.5;
  style = {
    width: "800px",
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
  paths: PathContent[] = [];
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
#app .header {
  margin-top: 1px;
}
#app .main {
  flex: 1;
  display: flex;
  width: 100%;
  flex-direction: row;
  overflow: hidden;
  border: 1px solid #dcdee2;
}
#app .main .demo-split-pane {
  padding: 10px;
}
#left {
  height: 100%;
  overflow: auto;
}
#app .footer {
  background-color: rgb(167, 233, 255);
  height: 25px;
  color: #fff;
  flex-shrink: 0;
}
</style>

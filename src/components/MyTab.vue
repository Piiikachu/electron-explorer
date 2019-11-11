<template>
  <div class="tabs-container">
    <a-tabs type="editable-card" v-model="activeKey" @edit="onEdit" @change="onChange" hideAdd>
      <a-tab-pane v-for="pane in panes" :key="pane.key" :closable="pane.closable">
        <span slot="tab">
          <a-icon type="folder-open" />
          {{pane.title}}
        </span>
        <MyNav :path="pane.title" />
      </a-tab-pane>
      <a-button
        id="btn-plus"
        slot="tabBarExtraContent"
        @click="add"
        icon="plus-square"
        style="-webkit-app-region: no-drag"
        size="large"
      ></a-button>
      <a-button
        slot="tabBarExtraContent"
        @click="minWindow"
        icon="shrink"
        style="-webkit-app-region: no-drag"
        size="large"
      ></a-button>
      <a-button
        slot="tabBarExtraContent"
        @click="maxWindow"
        icon="arrows-alt"
        style="-webkit-app-region: no-drag"
        size="large"
      ></a-button>
      <a-button
        slot="tabBarExtraContent"
        @click="closeWindow"
        icon="close"
        style="-webkit-app-region: no-drag"
        size="large"
      ></a-button>
    </a-tabs>
  </div>
</template>
<style>
.tabs-container {
  background: #f5f5f5;
  overflow: hidden;
  padding: 1px;
  -webkit-app-region: drag;
}
.tabs-container > .ant-tabs-card > .ant-tabs-content {
  height: 100%;
  margin-top: -16px;
  -webkit-app-region: no-drag;
}

.tabs-container > .ant-tabs-card > .ant-tabs-content > .ant-tabs-tabpane {
  background: #fff;
  padding: 8px;
  -webkit-app-region: no-drag;
}

.tabs-container > .ant-tabs-card > .ant-tabs-bar {
  border-color: #fff;
  -webkit-user-select: none;
}
.tabs-container > .ant-tabs-card > .ant-tabs-bar .ant-btn {
  border-radius: 0px;
  border-color: transparent;
}
.tabs-container > .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab {
  border-color: transparent;
  background: transparent;
  -webkit-app-region: no-drag;
}
.tabs-container #btn-plus {
  margin-right: 5px;
  border-right-color: #f5f5f5;
}
.tabs-container > .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab-active {
  border-color: #fff;
  background: #fff;
  -webkit-app-region: no-drag;
}
</style>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { ipcRenderer } from "electron";
import MyNav from "./MyNav.vue";
import store, { PathContent } from "../store";
const DEFAULT_PATH: string = "E://";
interface TabContent {
  title: string;
  name: string;
  content: string;
}
interface Pane {
  key: string;
  title: string;
  content: string;
  closable?: boolean;
}
@Component({
  components: {
    MyNav
  }
})
export default class MyTab extends Vue {
  newTabIndex: number = 0;
  panes: Pane[] = [];
  activeKey: string = "0";
  pathToPane(path: string) {
    const pane: Pane = {
      title: path,
      content: `Content of path ${path}`,
      key: `${this.newTabIndex++}`
    };
    return pane;
  }
  created() {
    console.log("tab created");
    this.panes.push(this.pathToPane("E://"));
    this.activeKey = this.panes[0].key;
  }
  onChange(key: string) {
    console.log(key);
  }
  onEdit(targetKey: string, action: number) {
    this[action](targetKey);
  }
  add() {
    this.addPath("E://work");
  }
  addPath(path: string) {
    this.addPathBackground(path);
    this.activeKey = `${this.newTabIndex - 1}`;
  }
  addPathBackground(path: string) {
    let p: string = path;
    const panes = this.panes;
    panes.push(this.pathToPane(p));
    this.panes = panes;
  }
  remove(targetKey: string) {
    let activeKey: string = this.activeKey;
    let lastIndex: number = 0;
    this.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.panes.filter(pane => pane.key !== targetKey);
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key;
      } else {
        activeKey = panes[0].key;
      }
    }
    this.panes = panes;
    this.activeKey = activeKey;
    if (panes.length == 0) {
      this.closeWindow();
    }
  }
  minWindow() {
    ipcRenderer.send("min-window");
  }
  maxWindow() {
    ipcRenderer.send("max-window");
  }
  closeWindow() {
    ipcRenderer.send("close-window");
  }
}
</script>
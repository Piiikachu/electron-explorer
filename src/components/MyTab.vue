<template>
  <div class="tabs-container" style="-webkit-app-region: drag">
    <a-tabs type="editable-card" v-model="activeKey" @edit="onEdit" @change="onChange">
      <a-tab-pane v-for="pane in panes" :key="pane.key" :closable="pane.closable">
        <span slot="tab">
          <a-icon type="folder-open" />
          {{pane.title}}
        </span>
        {{pane.content}}
      </a-tab-pane>
      <a-button class="button-window" slot="tabBarExtraContent" @click="minWindow" icon="shrink" type="link"></a-button>
      <a-button class="button-window" slot="tabBarExtraContent" @click="maxWindow" icon="arrows-alt" type="link"></a-button>
      <a-button class="button-window" slot="tabBarExtraContent" @click="closeWindow" icon="close" type="link"></a-button>
    </a-tabs>
  </div>
</template>
<style>
.tabs-container {
  background: #f5f5f5;
  overflow: hidden;
  padding: 1px;
}
.tabs-container > .ant-tabs-card > .ant-tabs-content {
  height: 100%;
  margin-top: -16px;
}

.tabs-container > .ant-tabs-card > .ant-tabs-content > .ant-tabs-tabpane {
  background: #fff;
  padding: 16px;
}

.tabs-container > .ant-tabs-card > .ant-tabs-bar {
  border-color: #fff;
}

.tabs-container > .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab {
  border-color: transparent;
  background: transparent;
}

.tabs-container > .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab-active {
  border-color: #fff;
  background: #fff;
}

.tabs-container>.buttonwindow{
  margin-right: -10px;
}

</style>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { ipcRenderer } from "electron";
import MyNav from "./MyNavigate.vue";
import store, { PathContent } from "../store";

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
    const panes = this.panes;
    panes.push(this.pathToPane("d://work"));
    this.activeKey = `${this.newTabIndex - 1}`;
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
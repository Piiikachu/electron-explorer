<template>
  <div>
    <a-tabs type="editable-card" v-model="activeKey" @edit="onEdit" @change="onChange">
      <a-tab-pane v-for="pane in panes" :key="pane.key" :closable="pane.closable">
        <span slot="tab">
          <a-icon type="folder-open" />
          {{pane.title}}
        </span>
        {{pane.content}}
      </a-tab-pane>
      <a-button slot="tabBarExtraContent">Extra Action</a-button>
    </a-tabs>
  </div>
</template>
<style>
</style>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { ipcRenderer } from "electron";
import MyNav from "./MyNavigate.vue";
import store from "../store";

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
  panes: Pane[] = [
    { title: "Tab 1", content: "Content of Tab 1", key: "1" },
    { title: "Tab 2", content: "Content of Tab 2", key: "2" },
    { title: "Tab 3", content: "Content of Tab 3", key: "3" }
  ];
  activeKey: string = this.panes[0].key;
  onChange(key: string) {
    console.log(key);
  }
  onEdit(targetKey: string, action: number) {
    this[action](targetKey);
  }
  add() {
    const panes = this.panes;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({
      title: "New Tab",
      content: "Content of new Tab",
      key: activeKey
    });
    this.panes = panes;
    this.activeKey = activeKey;
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
    this, (activeKey = activeKey);
  }
}
</script>
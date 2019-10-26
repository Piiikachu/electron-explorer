<template>
  <div>
    <el-tabs
      v-model="editableTabsValue"
      type="card"
      editable="true"
      @tab-remove="removeTab"
      @tab-add="addTab(editableTabsValue)"
    >
      <el-tab-pane
        v-for="(item, index) in editableTabs"
        :key="item.name"
        :label="item.title"
        :name="item.name"
      >{{item.content}}</el-tab-pane>
    </el-tabs>
    <!-- <div style="margin-bottom: 20px;">
      <el-button size="small" @click="addTab(editableTabsValue)">add tab</el-button>
    </div> -->
  </div>
</template>
<style>
</style>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { ipcRenderer } from "electron";

interface TabContent {
  title: string;
  name: string;
  content: string;
}

@Component
export default class MyTab extends Vue {
  editableTabsValue: string = "2";
  tabIndex = 2;
  editableTabs: Array<TabContent> = [
    {
      title: "Tab 1",
      name: "1",
      content: "Tab 1 content"
    },
    {
      title: "Tab 2",
      name: "2",
      content: "Tab 2 content"
    }
  ];
  addTab(targetName: string) {
    let newTabName = ++this.tabIndex + "";
    this.editableTabs.push({
      title: "New Tab",
      name: newTabName,
      content: "New Tab content"
    });
    this.editableTabsValue = newTabName;
  }
  removeTab(targetName: string) {
    let tabs = this.editableTabs;
    let activeName = this.editableTabsValue;
    if (activeName === targetName) {
      tabs.forEach((tab, index) => {
        if (tab.name === targetName) {
          let nextTab = tabs[index + 1] || tabs[index - 1];
          if (nextTab) {
            activeName = nextTab.name;
          }
        }
      });
    }
    this.editableTabsValue = activeName;
    this.editableTabs = tabs.filter(tab => tab.name !== targetName);
  }
}
</script>
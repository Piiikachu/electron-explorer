<template>
  <div>
    <el-tabs
      v-model="editableTabsValue"
      type="card"
      closable
      @tab-remove="removeTab"
      :before-leave="beforeLeave"
    >
      <!-- @tab-add="addTab(editableTabsValue)" -->
      <el-tab-pane
        v-for="item in editableTabs"
        :key="item.name"
        :label="item.title"
        :name="item.name"
      >
        <MyNav :title="item.content" />
      </el-tab-pane>
      <el-tab-pane key="add" name="add">
        <span slot="label" style="padding: 8px;font-size:20px;">+</span>
      </el-tab-pane>
    </el-tabs>
    <!-- <div style="margin-bottom: 20px;">
      <el-button size="small" @click="addTab(editableTabsValue)">add tab</el-button>
    </div>-->
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

@Component({
  components: {
    MyNav
  }
})
export default class MyTab extends Vue {
  editableTabsValue: string = "1";
  tabIndex = 1;
  addIndex = 1;
  currentIndex = 1;

  editableTabs: Array<TabContent> = [
    {
      title: "Tab 1",
      name: "1",
      content: "Tab 1 content"
    }
  ];
  created() {
    store.commit("addPath", "d://");
  }
  // goto() {
  //   this.$router.push("/about");
  // }
  addTab() {
    let newTabName = ++this.tabIndex + "";
    this.editableTabs.push({
      title: "New Tab" + this.tabIndex,
      name: newTabName,
      content: "New Tab content"
    });
    this.editableTabsValue = newTabName;

    store.commit("addPath", "e://");
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

    store.commit("removePath", +targetName);
  }
  beforeLeave(currentName: string, oldName: string) {
    var self = this;
    //重点，如果name是add，则什么都不触发
    if (currentName == "add") {
      this.addTab();
      return false;
    } else {
      this.currentIndex = +currentName;
    }
  }
}
</script>
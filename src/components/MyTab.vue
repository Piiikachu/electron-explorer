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
// export default class MyTab extends Vue {
//   editableTabsValue: string = "1";
//   tabIndex = 1;
//   addIndex = 1;
//   currentIndex = 1;

//   editableTabs: Array<TabContent> = [
//     {
//       title: "Tab 1",
//       name: "1",
//       content: "Tab 1 content"
//     }
//   ];
//   created() {
//     store.commit("addPath", "d://");
//   }
//   // goto() {
//   //   this.$router.push("/about");
//   // }
//   addTab() {
//     let newTabName = ++this.tabIndex + "";
//     this.editableTabs.push({
//       title: "New Tab" + this.tabIndex,
//       name: newTabName,
//       content: "New Tab content"
//     });
//     this.editableTabsValue = newTabName;

//     store.commit("addPath", "e://");
//   }
//   removeTab(targetName: string) {
//     let tabs = this.editableTabs;
//     let activeName = this.editableTabsValue;
//     if (activeName === targetName) {
//       tabs.forEach((tab, index) => {
//         if (tab.name === targetName) {
//           let nextTab = tabs[index + 1] || tabs[index - 1];
//           if (nextTab) {
//             activeName = nextTab.name;
//           }
//         }
//       });
//     }
//     this.editableTabsValue = activeName;
//     this.editableTabs = tabs.filter(tab => tab.name !== targetName);

//     store.commit("removePath", +targetName);
//   }
//   beforeLeave(currentName: string, oldName: string) {
//     var self = this;
//     //重点，如果name是add，则什么都不触发
//     if (currentName == "add") {
//       this.addTab();
//       return false;
//     } else {
//       this.currentIndex = +currentName;
//     }
//   }
// }
</script>
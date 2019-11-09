<template>
  <div id="app">
    <a-layout>
      <a-layout-header>
        <MyHeader />
      </a-layout-header>
      <a-layout>
        <a-layout-sider>Sider</a-layout-sider>
        <a-layout-content>Content</a-layout-content>
      </a-layout>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
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
  height: 100%;
  /* text-align: center; */
  color: #aaaaaa;
  /* margin-top: 60px; */
}

#app .ant-layout-header {
  height: 100%;
  background-color: #fff
}
#app .ant-layout-footer {
  background: #7dbcea;
  color: #fff;
}
#app .ant-layout-footer {
  line-height: 1.5;
}
#app .ant-layout-sider {
  background: #3ba0e9;
  color: #fff;
  line-height: 120px;
}
#app .ant-layout-content {
  background: rgba(16, 142, 233, 1);
  color: #fff;
  min-height: 120px;
  line-height: 120px;
}
#app > .ant-layout {
  color: #aaaaaa;
}
</style>

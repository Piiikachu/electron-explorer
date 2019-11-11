<template>
  <div class="nav-container">
    <div class="nav-buttons">
      <a-button-group>
        <a-button size="small">
          <a-icon type="arrow-left" />
        </a-button>
        <a-button size="small">
          <a-icon type="arrow-right" />
        </a-button>
        <a-button size="small">
          <a-icon type="arrow-up" />
        </a-button>
      </a-button-group>
    </div>
    <div class="nav-navbar">
      <a-button-group>
        <a-button>path</a-button>
        <a-button>to</a-button>
        <a-button>{{path}}</a-button>
      </a-button-group>
    </div>
    <div class="search">
      <a-input-search placeholder="input search text" />
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class MyNav extends Vue {
  @Prop() path!: string;
}
</script>

<style>
.nav-container {
  display: flex;
  height: 40px;
  align-items: center;
  background-color: aliceblue;
}
.nav-buttons {
  width: auto;
  height: 100%;
  display: flex;
  background-color: transparent;
  align-items: center;
}
.nav-buttons .ant-btn-group {
  height: auto;
  background-color: transparent;
}
.nav-buttons .ant-btn-group .ant-btn {
  height: 32px;
  border-color: transparent;
}
.nav-navbar {
  flex: 1;
  height: 100%;
  background-color: bisque;
  display: flex;
  align-items: center;
}
.search {
  height: 100%;
  width: 200px;
  display: flex;
  align-items: center;
  padding-left: 2px;
}
</style>
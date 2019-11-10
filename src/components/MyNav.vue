<template>
  <div class="nav-container">
    <div class="nav-buttons">
      <a-button size="small">
        <a-icon type="arrow-left" />
      </a-button>
      <a-button size="small">
        <a-icon type="arrow-right" />
      </a-button>
      <a-button size="small">
        <a-icon type="arrow-up" />
      </a-button>
    </div>
    <div class="nav-breadcrumb">path to {{path}}</div>
    <div class="search">
      <a-input-search placeholder="input search text" style="width: 200px" />
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
  height: 50px;
  align-items: center;
  background-color: aliceblue;
}
.nav-buttons {
  width: auto;
  height: 100%;
  background-color: aquamarine;
  display: flex;
  align-items: center;
}
.nav-breadcrumb {
  flex: 1;
  height: 80%;
  background-color: bisque;
}
.search {
  height: 100%;
  width: 200px;
  display: flex;
  align-items: center;
  background-color: aqua;
}
</style>
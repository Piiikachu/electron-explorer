<template>
  <div class="tree-container">
    <a-tree showLine :defaultExpandedKeys="['0-0-0']">
      <a-tree-node key="0-0">
        <span slot="title" style="color: #1890ff">parent 1</span>
        <a-tree-node title="parent 1-0" key="0-0-0">
          <a-tree-node title="leaf" key="0-0-0-0" />
          <a-tree-node title="leaf" key="0-0-0-1" />
          <a-tree-node title="leaf" key="0-0-0-2" />
        </a-tree-node>
        <a-tree-node title="parent 1-1" key="0-0-1">
          <a-tree-node title="leaf" key="0-0-1-0" />
        </a-tree-node>
        <a-tree-node title="parent 1-2" key="0-0-2">
          <a-tree-node title="leaf" key="0-0-2-0" />
          <a-tree-node title="leaf" key="0-0-2-1" />
        </a-tree-node>
      </a-tree-node>
    </a-tree>
  </div>
</template>
<style scoped>
.tree-container{
    height: 70vh;
    overflow: auto;
    margin-bottom: 20px;
}
</style>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class MySider extends Vue {

}
</script>
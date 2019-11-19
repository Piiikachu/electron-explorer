<template>
  <div class="fileContainer">
      <a-card hoverable>
          <img src="../assets/icon/folder.svg" alt="folder" />
          <a-card-meta :title="filename">
              <template slot="description">{{filetype}}</template>
          </a-card-meta>
      </a-card>

  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class MyFile extends Vue{
    @Prop() filename!:string;
    @Prop() filetype!:string;

}
</script>

<style>
.ant-card{
    border: solid 1px red;
    width: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.ant-card img{
    width: 100%;
    height: 100%;
}
</style>
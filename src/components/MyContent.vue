<template>
  <div class="contentContainer">
    <!-- <a-list :grid="{gutter:16,column:4}" :dataSource="files">
      <a-list-item slot="renderItem" slot-scope="file">
        <MyFile :filename="file.name" :filetype="file.type" />
      </a-list-item>
    </a-list>-->
    <MyFile v-for="file in files" :key="file.name" :filename="file.name" :filetype="file.type" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MyFile from "./MyFile.vue";
interface File {
  name: string;
  type: string;
}
@Component({
  components: {
    MyFile
  }
})
export default class MyContent extends Vue {
  files: File[] = [
    {
      name: "aaa",
      type: "folder"
    },
    {
      name: "bbb",
      type: "folder"
    },
    {
      name: "ccc",
      type: "file"
    },
    {
      name: "ddd",
      type: "folder"
    }
  ];
}
</script>

<style>
.contentContainer {
  padding: 2px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
}
</style>
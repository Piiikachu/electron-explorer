<template>
  <div class="tableContainer">
    <Table :columns="columns13" :data="data5" border highlight-row stripe></Table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class MyTable extends Vue {
  columns13 = [
    {
      title: "Date",
      key: "date",
      resizable: true,
      sortable: true,
      width: 180
    },
    {
      title: "Name",
      key: "name",
      resizable: true,
      sortable: true,
      width: 120
    },
    {
      title: "Age",
      key: "age",
      sortable: true,
      resizable: true,
      width: 100
    },
    {
      title: "Address",
      key: "address"
    }
  ];
  data5 = [
    {
      name: "John Brown",
      age: 18,
      address: "New York No. 1 Lake Park",
      date: "2016-10-03"
    },
    {
      name: "Jim Green",
      age: 24,
      address: "London No. 1 Lake Park",
      date: "2016-10-01"
    },
    {
      name: "Joe Black",
      age: 30,
      address: "Sydney No. 1 Lake Park",
      date: "2016-10-02"
    },
    {
      name: "Jon Snow",
      age: 26,
      address: "Ottawa No. 2 Lake Park",
      date: "2016-10-04"
    }
  ];
}
</script>

<style>
.tableContainer{
    width: 100%;
    overflow: auto;
}
</style>
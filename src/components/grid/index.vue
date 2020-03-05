<template src="./grid.html"></template>
<style src="./grid.css"></style>

<script>
// import UserService from '../../services/user';
// import Router from "../../router/";
// import { GridPlugin, Page } from "@syncfusion/ej2-vue-grids";
import Vue from "vue";
import { GridPlugin, Page, Sort, Filter } from "@syncfusion/ej2-vue-grids";

Vue.use(GridPlugin);

export default {
  name: "grid",
  props: ['dados', 'fields'],
  components: {
    GridPlugin
  },
  mounted() {
    console.log(this.dados)
  },

  data() {
    return {
    data: this.dados,
      pageSettings: { pageSize: 5 }
    };
  },
  provide: {    
  grid: [Page, Sort, Filter]
  },
  methods:{

  }
};
</script>


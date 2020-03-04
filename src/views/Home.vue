<template>
  <div class="home">
    <!-- <h1>Home</h1> -->

    <Grid msg="empty" :dados="dados"  :fields="fields" />

      <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
      <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import UserService from "../services/user";
import Grid from "@/components/grid";


export default {
  name: "Home",
  components: {
     Grid
  },
   data() {
    return {
      dados: null,
      fields:[
        {field:'id', headerText:'Id',textAlign:'Left', width:90},
        {field:'name', headerText:'Name',textAlign:'Left', width:90},
        {field:'email', headerText:'Email',textAlign:'Left', width:90}
        ]
    };
  },
  
   methods: {
    list: async function(){
    await UserService.index()
        .then(response => this.dados = response.data)
        .catch(error => console.log(error));
        console.log(this.dados)
    }
  },
  mounted() {
  this.list();
  },
 
};

</script>

<template>
  <div class="home">
   <button class="btn btn-danger" style="margin:50px" v-on:click=logout>logut</button>
  <Grid :dados="dados"  :fields="fields" />
  </div>
</template>



<script>
// @ is an alias to /src
import UserService from "../services/user";
import Grid from "@/components/grid";
import LoginService from "../services/login";
import Router from "../router";
export default {
  name: "Home",
  Router,
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
    await UserService.index(localStorage.token)
        .then(response => this.dados = response.data)
        .catch(error => console.log(error));
        console.log(this.dados)
    },
    logout: async function(){
      await LoginService.logout()
      .then(response => this.route(response))
      .catch(error => console.log(error));
       
    },
     route: function(response){
      console.log(response)
      Router.push({ name: "Login" });
    }
  },
  mounted() {
  this.list();
  },
 
};

</script>

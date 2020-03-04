<template src="./register.html"></template>
<style src="./register.css"></style>
<script>
import UserService from '../../services/user';
import Router from "../../router/";
export default {
  name: "Register",
  components: {
    // login
  },

  data() {
    return {
      user:{
        confirmpassword:"",
        name:"",
        password: "",
        email: ""
      }
    };
  },
  methods:{
  onSubmit: async function() {
     
         await UserService.store(this.user)
        .then(response =>  this.route(response) )
        .catch(error =>  alert(error));

    },
  route:function(response){
    console.log(response)
  alert("user successfully registered");
  Router.push({ name: "Login" });
  }
  }
};
</script>


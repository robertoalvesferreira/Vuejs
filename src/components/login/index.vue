<template src="./login.html"></template>
<style src="./login.css"></style>

<script>
// import axios from 'axios';
import LoginService from "../../services/login";
import Router from "../../router/";

export default {
  name: "login",
  Router,

  data() {
    return {
      login: {
        email: "",
        password: ""
      },
      token: null,
    };
  },
  computed: {},
  mounted() {
    if (localStorage.token) {
      this.name = localStorage.name;
    }
  },
  methods: {
    checkForm: async function() {
      this.token = await LoginService.login(this.login)
        .then(response => localStorage.token = response.data.access_token)
        .catch(error => console.log(error));

      if (this.token === undefined || this.token === null) {
        alert("Login ou senha invalido");
      } else {
        Router.push({ name: "Home" });
      }
    },
    register: function(){
      Router.push({ name: "Register" });
    }
  },
    watch: {
      token(newToken) {
        console.log(newToken)
         localStorage.token = newToken;
      }
    }
};
</script>




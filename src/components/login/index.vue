<template src="./login.html"></template>
<style src="./login.css"></style>

<script>
// import axios from 'axios';
import LoginService from "../../services/login";
import Router from "../../router/";

export default {
  name: "login",
  props: [
    {
      msg: String
    }
  ],
  Router,

  data() {
    return {
      msg: [
        {
          title: "Abacate",
          text: "Faz bem pra saude!"
        }
      ],
      login: {
        email: "maria@hotmail.com",
        password: "123456"
      },
      token: null,
      password: '',
      email: null
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
      this.login.email = this.email;
      this.login.password = this.password;

      this.token = await LoginService.store(this.login)
        .then(response => response.data.access_token)
        .catch(error => console.log(error));

      if (this.token === undefined || this.token === null) {
        alert("Login ou senha invalido");
      } else {
       // Router.push({ name: "Home" });
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




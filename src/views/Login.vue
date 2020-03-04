<template>
  <div>
    <Login msg="Teste msg pai"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "@/components/login";
// import Login from "@/components/login/index.vue";
//import LoginValidate from "@/components/LoginValidate.vue";
export default {
  name: "LoginValidate",
  components: {
    Login
  }
  
};
</script>


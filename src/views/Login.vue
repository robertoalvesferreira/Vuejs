<template>
  <div>
    <login/>
  </div>
</template>

<script>
// @ is an alias to /src
import login from "@/components/login";
// import Login from "@/components/login/index.vue";
//import LoginValidate from "@/components/LoginValidate.vue";
export default {
  name: "LoginValidate",
  components: {
    login
  }
};
</script>


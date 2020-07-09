<template>
  <div class="login">
    <!-- <b-avatar class="avatar"></b-avatar> -->
    <img src="../../assets/logo.png" alt />
    <b-form-input v-model="email" placeholder="Email"></b-form-input>
    <b-form-input type="password" v-model="password" :placeholder="$t('login.password')"></b-form-input>
    <div class="login-text">
      <div>{{$t("login.forgot-password")}}</div>
      <div @click="backToHome()">{{$t("navbar.home")}}</div>
    </div>
    <button @click="login()" type="button" class="btn btn-danger login-bn">{{$t("slide.login")}}</button>
  </div>
</template>
<script>
/* eslint-disable */
import LoginService from "../../../api/loginApi";
export default {
  name: "M002Login",
  data() {
    return {
      email: "dsoft@gmail.com",
      password: "dsoft@gmail.com"
    };
  },
  methods: {
    backToHome() {
      this.$router.push({ name: "Home" });
    },
    login() {
      var data = {
        email: this.email,
        password: this.password
      };
      LoginService.login(data).then(res => {
        console.log(res);
        sessionStorage.setItem("token", res.data.token);
        this.$router.push({ name: "Home" });
      });
      // sessionStorage.setItem(
      //   "token",
      //   "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkc29mdGFkbWluIiwiaWF0IjoxNTkzNTg5NTk0LCJleHAiOjE1OTQ2OTE1OTN9.R4pxUjP3ev01DRYPPOUMI0lNBwEB-ATh23piCy2PiIhJhb0BBFFBDKCyYFZLfn3hQ7pZs0jklNlBDaZb89qQfg"
      // );
      // this.$router.push({ name: "Home" });
    }
  }
};
</script>
<style>
.login {
  max-width: 600px;
  margin: 100px auto;
  background: rgb(185, 181, 181);
  padding: 30px;
  border-radius: 8px;
}
.avatar {
  width: 6.5em !important;
  height: 6.5em !important;
}
.login .form-control {
  margin: 15px 0;
  border-radius: 25px;
}
.login-text {
  display: flex;
  justify-content: space-around;
  color: #df2f29 !important;
  font-weight: bold;
  text-transform: uppercase;
}
.login-bn {
  margin: 15px 0;
}
</style>
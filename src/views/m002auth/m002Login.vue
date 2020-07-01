<template>
  <div class="login">
    <!-- <b-avatar class="avatar"></b-avatar> -->
    <img src="../../assets/logo.png" alt />
    <b-form-input v-model="email" placeholder="Email"></b-form-input>
    <b-form-input v-model="password" placeholder="Mật khẩu"></b-form-input>
    <div class="login-text">
      <div>Quên mật khẩu</div>
      <div>Trang chủ</div>
    </div>
    <button type="button" class="btn btn-danger">Đăng nhập</button>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: "M002Login",
  data() {
    return {
      email: null,
      password: null
    };
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
  color: rgb(170, 12, 12);
}
</style>
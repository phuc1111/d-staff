<template>
  <div class="main-navbar">
    <b-navbar toggleable="lg" type="dark" variant="white">
      <b-navbar-brand href="#">D-STAFF</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav class="mr-auto">
        <b-navbar-nav center>
          <b-nav-item href="#">Trang chủ</b-nav-item>
          <b-nav-item href="#">Liên hệ</b-nav-item>
          <b-nav-item href="#">Về chúng tôi</b-nav-item>
          <b-nav-item href="#">Câu hỏi</b-nav-item>
          <b-nav-item href="#">Confessions</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right class="menu-drop">
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "M003Navbar",
  data() {
    return {};
  }
};
</script>
<style>
.main-navbar {
  /* max-width: 1500px;*/
  margin: 10px auto;
  font-weight: bold;
  /* padding: 0 40px !important; */
}
.nav-link,
.navbar-toggler-icon,
.navbar-toggler,
.navbar-brand {
  color: #e83c37 !important;
}
.nav-link {
  text-transform: uppercase;
  font-weight: bold;
}
.navbar-nav {
  margin-left: auto;
}
.navbar-toggler {
  background-color: #e83c37 !important;
}
.menu-drop .dropdown-item {
  color: #e83c37 !important;
}
</style>
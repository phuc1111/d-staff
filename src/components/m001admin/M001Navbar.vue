<template>
  <div class="menu-top">
    <b-navbar toggleable="lg" type="dark" class="test">
      <b-navbar-brand class="nav-white" href="#">D-staff</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-icon icon="envelope" class="nav-icon"></b-icon>
            <b-icon icon="bell-fill" class="nav-icon noti"></b-icon>
            <b-avatar variant="secondary" class="nav-icon"></b-avatar>
            <b-nav-item-dropdown class="nav-white" text="Admin" right>
              <b-dropdown-item href="#">Đăng xuất</b-dropdown-item>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: "M001Navbar",
  data() {
    return {};
  }
};
</script>
<style>
.menu-top {
  z-index: 15 !important;
}
.nav-icon {
  font-size: 25px !important;
  color: aliceblue !important;
  align-self: center;
  margin: 10px;
}
.noti {
  margin-right: 40px;
}
.navbar {
  padding: 0 !important;
  z-index: 15 !important;
}
.bg-info {
  background-color: #3c8dbc !important;
}
.test {
  background-color: #3c8dbc !important;
}
.nav-white {
  color: aliceblue !important;
}
.nav-white span {
  color: aliceblue !important;
}
@media only screen and (max-width: 47.24em) {
  .form-inline {
    justify-content: space-around !important;
  }
}
@media only screen and (min-width: 47.25em) and (max-width: 63.9375em) {
  .form-inline {
    justify-content: space-around !important;
  }
}
</style>
<template>
  <div class="main-navbar">
    <b-navbar toggleable="lg" type="dark" variant="white">
      <b-navbar-brand href="#">
        <img src="../../assets/logo.png" alt />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav class="mr-auto">
        <b-navbar-nav center>
          <b-nav-item :to="{name: 'M002Login'}">{{$t("navbar.home")}}</b-nav-item>

          <b-nav-item href="#">{{$t("navbar.contact")}}</b-nav-item>
          <b-nav-item href="#">{{$t("navbar.about")}}</b-nav-item>
          <b-nav-item href="#">{{$t("navbar.question")}}</b-nav-item>
          <b-nav-item href="#">Confessions</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto menu-drop">
          <b-nav-item-dropdown :text="this.$i18n.locale" right>
            <b-dropdown-item href="#" @click="setLang('en')">EN</b-dropdown-item>
            <b-dropdown-item href="#" @click="setLang('vn')">VN</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown right class="menu-drop">
            <template v-slot:button-content>
              <em>{{$t("navbar.user")}}</em>
            </template>

            <b-dropdown-item href="#" @click="login()" v-if="!token">{{$t("slide.login")}}</b-dropdown-item>
            <b-dropdown-item href="#" @click="logout()" v-if="token">{{$t("navbar.logout")}}</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
// import i18n from "vue-i18n";
export default {
  name: "M003Navbar",
  data() {
    return {
      user: null,
      token: null
    };
  },
  methods: {
    setLang(lang) {
      // this.$i18n.locale = lang;
      this.$store.dispatch("setLang", lang);
    },
    login() {
      this.$router.push({ name: "M002Login" });
    },
    logout() {
      sessionStorage.clear();
      //this.$router.push({ name: "Home" });
      location.reload();
    }
  },
  mounted() {
    this.token = sessionStorage.getItem("token");
    console.log(this.token);
  }
};
</script>
<style>
.main-navbar {
  /* max-width: 1500px;*/
  top: 0;
  margin: 10px auto;
  font-weight: bold;
  padding: 0 30px;
  position: absolute;
  width: 100%;
  z-index: 20;
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
  transition: all cubic-bezier(0, 0, 0.96, -0.26) 0.2s !important;
}
.nav-link:hover {
  color: #c78583 !important;
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
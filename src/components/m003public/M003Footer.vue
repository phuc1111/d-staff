<template>
  <div class="footer">
    <div class="footer-content">
      <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
          <b-list-group>
            <b-list-group-item>{{$t("navbar.home")}}</b-list-group-item>
            <b-list-group-item>{{$t("navbar.contact")}}</b-list-group-item>
            <b-list-group-item>{{$t("navbar.about")}}</b-list-group-item>
          </b-list-group>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
          <b-list-group>
            <b-list-group-item>{{$t("footer.address")}}</b-list-group-item>
            <b-list-group-item>{{$t("footer.phone")}}</b-list-group-item>
            <b-list-group-item>Email: ABC@gmail.com</b-list-group-item>
          </b-list-group>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
          <b-list-group>
            <b-list-group-item>{{$t("review.confessions")}}</b-list-group-item>
            <b-list-group-item>{{$t("navbar.question")}}</b-list-group-item>
          </b-list-group>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
          <b-list-group>
            <b-list-group-item>Cras justo odio</b-list-group-item>
            <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
            <b-list-group-item>Morbi leo risus</b-list-group-item>
          </b-list-group>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: "M003Footer",
  data() {
    return {};
  }
};
</script>
<style>
.footer {
  background: #ab3835;
}

.list-group-item {
  background: #ab3835 !important;
  color: antiquewhite;
}
.list-group-item {
  border: none !important;
}
.footer-content {
  max-width: 1500px;
  margin: 0 auto;
}
</style>
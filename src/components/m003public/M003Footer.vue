<template>
  <div class="footer">
    <div class="footer-content">
      <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
          <b-list-group>
            <b-list-group-item>Trang Chủ</b-list-group-item>
            <b-list-group-item>Liên hệ</b-list-group-item>
            <b-list-group-item>Về chúng tôi</b-list-group-item>
          </b-list-group>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
          <b-list-group>
            <b-list-group-item>Địa chỉ: 20 Hải Phòng</b-list-group-item>
            <b-list-group-item>Số điện thoại: 01123456789</b-list-group-item>
            <b-list-group-item>Email: ABC@gmail.com</b-list-group-item>
          </b-list-group>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
          <b-list-group>
            <b-list-group-item>Confessions</b-list-group-item>
            <b-list-group-item>Đặt câu hỏi</b-list-group-item>
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
  background: #ac221d;
}

.list-group-item {
  background: #ac221d !important;
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
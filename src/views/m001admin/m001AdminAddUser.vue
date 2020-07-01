<template>
  <div class>
    <M001Navbar />
    <div class="adduser-content">
      <div class="col-xs-0 col-sm-0 col-md-3 col-lg-3 left-menu1">
        <M001LeftMenu />
      </div>
      <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9">
        <div class="home-title">
          <b-icon @click="back()" icon="chevron-left" class="icon-back"></b-icon>
          <div>Thêm nhân viên</div>
        </div>
        <div class="form-add">
          <div class="row rows">
            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <b-avatar class="add-user-avatar"></b-avatar>
              <b-form-file class="mt-3" plain></b-form-file>
            </div>
            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <b-form-textarea id="textarea" placeholder="Thêm mô tả" rows="6" max-rows="6"></b-form-textarea>
            </div>
          </div>

          <div class="row rows">
            <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
              <b-form-input placeholder="Họ"></b-form-input>
            </div>
            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <b-form-input placeholder="Tên"></b-form-input>
            </div>
            <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">
              <b-form-datepicker id="example-datepicker" class="mb-2"></b-form-datepicker>
            </div>
            <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
              <b-form-select v-model="gender" :options="genders"></b-form-select>
            </div>
          </div>

          <div class="row rows">
            <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
              <b-form-input placeholder="Quê Quán"></b-form-input>
            </div>
            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <b-form-select v-model="honnhan" :options="honnhans"></b-form-select>
            </div>
          </div>

          <div class="row rows">
            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <b-form-input placeholder="Tên đường"></b-form-input>
            </div>
            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <b-form-input placeholder="Phường "></b-form-input>
            </div>
            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <b-form-input placeholder="Quận"></b-form-input>
            </div>
            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <b-form-input placeholder="Thành phố"></b-form-input>
            </div>
          </div>
          <div class="row rows">
            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <b-form-select v-model="phongban" :options="phongbans"></b-form-select>
            </div>
            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <b-form-select v-model="team" :options="teams"></b-form-select>
            </div>
            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <b-form-select v-model="position" :options="options"></b-form-select>
            </div>
            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <b-form-select v-model="ex" :options="exs"></b-form-select>
            </div>
          </div>
          <div class="row rows">
            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <b-form-input placeholder="Số điện thoại "></b-form-input>
            </div>
            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <b-form-input placeholder="Số tài khoản "></b-form-input>
            </div>

            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <b-form-input placeholder="Email cá nhân "></b-form-input>
            </div>
          </div>
          <div class="row rows">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <b-form-textarea id="textarea" placeholder="Sở thích" rows="2" max-rows="4"></b-form-textarea>
            </div>
          </div>
          <div class="row rows">
            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <b-form-input placeholder="Kỹ năng"></b-form-input>
            </div>
            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <b-form-input placeholder="Chuyên ngành"></b-form-input>
            </div>
          </div>
          <button type="button" class="btn-add-user">Thêm nhân viên</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import M001Navbar from "../../components/m001admin/M001Navbar";
import M001LeftMenu from "../../components/m001admin/M001LeftMenu";

export default {
  name: "M001AminAddUser",
  components: {
    M001Navbar,
    M001LeftMenu
  },
  data() {
    return {
      position: null,
      gender: null,
      honnhan: null,
      ex: null,
      team: null,
      phongban: null,
      options: [
        { value: null, text: "Chọn vị trí" },
        { value: "intern", text: "Intern" },
        { value: "fresher", text: "Fresher" }
      ],
      exs: [
        { value: null, text: "Kinh nghiệm" },
        { value: "intern", text: "Intern" },
        { value: "fresher", text: "Fresher" }
      ],
      teams: [
        { value: null, text: "Team" },
        { value: "intern", text: "Intern" },
        { value: "fresher", text: "Fresher" }
      ],
      phongbans: [
        { value: null, text: "Phòng ban" },
        { value: "intern", text: "Intern" },
        { value: "fresher", text: "Fresher" }
      ],
      genders: [
        { value: null, text: "Giới tính" },
        { value: "intern", text: "Intern" },
        { value: "fresher", text: "Fresher" }
      ],
      honnhans: [
        { value: null, text: "Hôn nhân" },
        { value: "intern", text: "Intern" },
        { value: "fresher", text: "Fresher" }
      ]
    };
  },
  methods: {
    back() {
      this.$router.push({ name: "M001AdminUser" });
    }
  }
};
</script>
<style>
.adduser-content {
  display: flex !important;
  max-width: 1500px;
  margin: 0 auto;
}
.form-add {
  margin-top: 50px;
  padding: 40px;
  border-radius: 20px;
  background: #d2d3d4 !important;
}
.add-user-avatar {
  width: 7.5em !important;
  height: 7.5em !important;
}
.rows {
  margin: 15px 0;
}
.drop {
  width: 100%;
}
.btn-add-user {
  background: #0f7eb1;
  border-radius: 10px;
  color: aliceblue;
}
.form-control {
  border-radius: 5px;
}
</style>
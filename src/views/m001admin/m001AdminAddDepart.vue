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
          <div>Thêm phòng ban</div>
        </div>
        <div class="add-depart">
          <div class="row rows">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <b-form-input placeholder="Tên phòng ban"></b-form-input>
            </div>
          </div>
          <div class="row rows">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <b-form-input placeholder="Mã phòng ban"></b-form-input>
            </div>
          </div>
          <div class="row rows">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <b-form-textarea id="textarea" placeholder="Thêm mô tả" rows="3" max-rows="6"></b-form-textarea>
            </div>
          </div>
          <button type="button" class="btn-add-user">Thêm phòng ban</button>
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
      this.$router.push({ name: "M001AdminDepartment" });
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
.add-depart {
  margin: 20px 80px;
  padding: 40px;
  border-radius: 20px;
  background: #d2d3d4 !important;
}
</style>
import async from 'prettier';
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
              <b-form-input v-model="name" placeholder="Tên phòng ban"></b-form-input>
            </div>
          </div>
          <div class="row rows">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <b-form-input v-model="code" placeholder="Mã phòng ban"></b-form-input>
            </div>
          </div>
          <div class="row rows">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <b-form-textarea
                v-model="description"
                id="textarea"
                placeholder="Thêm mô tả"
                rows="3"
                max-rows="6"
              ></b-form-textarea>
            </div>
          </div>
          <button @click="addDepart()" type="button" class="btn-add-user">Thêm phòng ban</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import M001Navbar from "@/components/m001admin/M001Navbar";
import M001LeftMenu from "@/components/m001admin/M001LeftMenu";

import departmentService from "@/../api/departmentApi";

export default {
  name: "M001AminAddUser",
  components: {
    M001Navbar,
    M001LeftMenu
  },
  data() {
    return {
      name: "name depart",
      description: "departmentService",
      code: "abc",
      depart: [],
      check: null
    };
  },
  methods: {
    toast(content) {
      this.$bvToast.toast(content, {
        title: "Thông báo",
        toaster: "b-toaster-bottom-left",
        solid: true,
        appendToast: true
      });
    },
    back() {
      this.$router.push({ name: "M001AdminDepartment" });
    },
    addDepart() {
      var data = {
        name: this.name,
        description: this.description,
        code: this.code
      };
      //check
      this.check = this.$route.params.departs.find(depart => {
        return depart.name == this.name || depart.code == this.code;
      });

      if (this.check) {
        this.toast("Phòng ban hoặc mã phòng ban đã tồn tại");
      } else {
        departmentService
          .createDepart(data)
          .then(() => {
            this.$router.push({ name: "M001AdminDepartment" });
            this.toast("Add department success");
          })
          .catch(err => {
            console.log(err.response);
          });
      }
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
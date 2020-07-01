
<template>
  <div class="home">
    <M001Navbar />
    <div class="home-content">
      <div class="col-xs-0 col-sm-0 col-md-3 col-lg-3 left-menu1">
        <M001LeftMenu />
      </div>
      <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9">
        <div class="home-title">
          <b-icon icon="chevron-left" class="icon-back"></b-icon>
          <div>Phòng ban</div>
        </div>
        <div class="row">
          <button type="button" class="btn btn-info adddepart" @click="addDepart()">Thêm phòng ban</button>
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <table class="table">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tên phòng ban</th>
                  <th>Mã phòng ban</th>
                  <th>Mô tả</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(user, i) in items " :key="i">
                  <td scope="row">{{i+1}}</td>
                  <td>{{user.ten}}</td>

                  <td>{{user.Ngay_sinh}}</td>
                  <td>{{user.Ngay_sinh}}</td>
                  <td>
                    <b-icon icon="x-circle-fill" class="icon-delete"></b-icon>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
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
  name: "M001AdminDepartment",
  components: {
    M001Navbar,
    M001LeftMenu
  },
  data() {
    return {
      perPage: 3,
      currentPage: 1,
      items: [
        {
          stt: 1,
          ten: "Dickerson",
          team: "team1",
          chuc_vu: "Macdonald",
          Ngay_vao_cong_ty: "20/10/2019",
          Ngay_sinh: "15/10/1997"
        },
        {
          stt: 2,
          ten: "Dickerson",
          team: "team1",
          chuc_vu: "Macdonald",
          Ngay_vao_cong_ty: "20/10/2019",
          Ngay_sinh: "15/10/1997"
        },
        {
          stt: 3,
          ten: "Dickerson",
          team: "team1",
          chuc_vu: "Macdonald",
          Ngay_vao_cong_ty: "20/10/2019",
          Ngay_sinh: "15/10/1997"
        },
        {
          stt: 4,
          ten: "Dickerson",
          team: "team1",
          chuc_vu: "Macdonald",
          Ngay_vao_cong_ty: "20/10/2019",
          Ngay_sinh: "15/10/1997"
        },
        {
          stt: 5,
          ten: "Dickerson",
          team: "team1",
          chuc_vu: "Macdonald",
          Ngay_vao_cong_ty: "20/10/2019",
          Ngay_sinh: "15/10/1997"
        },
        {
          stt: 6,
          ten: "Dickerson",
          team: "team1",
          chuc_vu: "Macdonald",
          Ngay_vao_cong_ty: "20/10/2019",
          Ngay_sinh: "15/10/1997"
        },
        {
          stt: 7,
          ten: "Dickerson",
          team: "team1",
          chuc_vu: "Macdonald",
          Ngay_vao_cong_ty: "20/10/2019",
          Ngay_sinh: "15/10/1997"
        },
        {
          stt: 8,
          ten: "Dickerson",
          team: "team1",
          chuc_vu: "Macdonald",
          Ngay_vao_cong_ty: "20/10/2019",
          Ngay_sinh: "15/10/1997"
        }
      ]
    };
  },
  methods: {
    addDepart() {
      this.$router.push({ name: "M001AdminAddDepart" });
    }
  },
  computed: {
    rows() {
      return this.items.length;
    }
  }
};
</script>
<style>
/* .home {
  max-width: 1500px;
  margin: 0 auto;
} */
.home-content {
  display: flex;
  max-width: 1500px;
  margin: 0 auto;
}
.home-content-right {
  display: flex;
}
.user {
  margin: 30px 0 !important;
}
.home-user {
  background: rgb(33, 168, 44);
  border-radius: 15px !important;
  color: aliceblue;
  margin: 15px 15px;
}

.home-user-title {
  padding-top: 15px;
}
.home-user-content {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 15px;
}
.home-title {
  margin: 10px 0;
  text-align: left;
  font-weight: bold;
  align-items: center;
  display: flex;
}
.search {
  display: flex;
  justify-content: space-between;
}
.search-data {
  height: 35px;
  align-self: center;
  border-radius: 5px;
}
thead {
  background: #3c8dbc !important;
}
.icon-back {
  color: #3c8dbc;
  font-size: 30px;
}
.icon-delete {
  color: #a71d1d;
  font-size: 20px;
}
.adddepart {
  margin: 15px;
  background: #3c8dbc !important;
}
.pagination {
  justify-content: center;
}
@media only screen and (max-width: 47.249999em) {
  .left-menu1 {
    display: none;
  }
  .home-user {
    margin: 10px 35px;
  }
}
@media only screen and (min-width: 47.25em) and (max-width: 63.9375em) {
}
</style>
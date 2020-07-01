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
          <div>Nhân viên</div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <!-- <b-table striped hover :items="items"></b-table> -->
            <div class="search">
              <button type="button" class="btn btn-info adduser" @click="addUser()">Thêm nhân viên</button>
              <input type="text" placeholder="Tìm kiếm theo tên" class="search-data" />
            </div>
            <table class="table">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tên nhân viên</th>
                  <th>Team</th>
                  <th>Chức vụ</th>
                  <th>Ngày vào</th>
                  <th>Ngày sinh</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(user, i) in items " :key="i">
                  <td scope="row">{{i+1}}</td>
                  <td>{{user.ten}}</td>
                  <td>{{user.team}}</td>
                  <td>{{user.chuc_vu}}</td>
                  <td>{{user.Ngay_vao_cong_ty}}</td>
                  <td>{{user.Ngay_sinh}}</td>
                  <td>
                    <b-icon icon="x-circle-fill" class="icon-delete"></b-icon>
                  </td>
                </tr>
              </tbody>
            </table>
            <b-pagination
              class="pagination"
              :total-rows="rows"
              :per-page="perPage"
              aria-controls="my-table"
            ></b-pagination>
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
  name: "M001AdminHome",
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
    addUser() {
      this.$router.push({ name: "M001AdminAddUser" });
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
.adduser {
  margin: 15px 0;
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
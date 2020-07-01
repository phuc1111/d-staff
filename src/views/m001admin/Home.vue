<template>
  <div class="home">
    <M001Navbar />
    <div class="home-content">
      <div class="col-xs-0 col-sm-0 col-md-3 col-lg-3 left-menu1">
        <M001LeftMenu />
      </div>
      <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9">
        <div class="home-title">Nhân viên</div>
        <div class="row user">
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-3">
            <div class="home-user">
              <div class="home-user-title">Tổng số nhân viên</div>
              <div class="home-user-content">
                <b-icon icon="bell-fill"></b-icon>
                <div>15</div>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-3">
            <div class="home-user out">
              <div class="home-user-title">Tổng số nhân viên</div>
              <div class="home-user-content">
                <b-icon icon="bell-fill"></b-icon>
                <div>15</div>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-3">
            <div class="home-user onsite">
              <div class="home-user-title">Tổng số nhân viên</div>
              <div class="home-user-content">
                <b-icon icon="bell-fill"></b-icon>
                <div>15</div>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-3">
            <div class="home-user off">
              <div class="home-user-title">Tổng số nhân viên</div>
              <div class="home-user-content">
                <b-icon icon="bell-fill"></b-icon>
                <div>15</div>
              </div>
            </div>
          </div>
        </div>
        <div class="home-title">Nhân sự</div>
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <column-chart :data="team"></column-chart>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <column-chart :data="need"></column-chart>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <pie-chart :data="pie"></pie-chart>
          </div>
        </div>
        <div class="home-title">Điểm danh tháng</div>
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <area-chart :data="monthly"></area-chart>
          </div>
        </div>
        <div class="home-title">Hoạt động trong tuần</div>
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <b-table striped hover :items="items"></b-table>
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
      monthly: {
        "01/06": 80,
        "02/06": 85,
        "01/06": 81,
        "03/06": 70,
        "04/06": 90,
        "05/06": 80,
        "06/06": 83
      },
      pie: [
        ["Nhân viên", 80],
        ["Thử việc", 5],
        ["Thực tập sinh", 15]
      ],
      team: [
        ["team1", 15],
        ["team2", 25],
        ["team3", 11],
        ["team4", 18]
      ],
      need: [
        ["JAVA", 5],
        ["AI", 2],
        ["VueJS", 4],
        ["PM", 8],
        ["NodeJs", 2]
      ],
      items: [
        { STT: 1, Activity: "Đá Bóng", Time: "15:10 AM", Manager: "Mr Dam" },
        { STT: 2, Activity: "Cầu lông", Time: "05:10 AM", Manager: "Mr Dam" },
        { STT: 3, Activity: "Sinh nhật", Time: "15:10 AM", Manager: "Mr Dam" },
        {
          STT: 4,
          Activity: "Team building",
          Time: "15:10 AM",
          Manager: "Mr Dam"
        }
      ]
    };
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
.out {
  background: rgb(199, 44, 23);
}
.onsite {
  background: rgb(19, 194, 238);
}
.off {
  background: rgb(54, 57, 233);
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
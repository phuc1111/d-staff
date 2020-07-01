/* eslint-disable */
<template>
  <div>
    <!-- <b-icon icon="chevron-double-right" class="show-icon"></b-icon> -->
    <div class="left-menu">
      <b-form-input v-model="search" placeholder="Tìm kiếm" class="search"></b-form-input>
      <div class="left-content">Các tác vụ chính</div>
      <router-link :to="{name: 'Admin_Home'}">
        <div class="left-content">
          <b-icon icon="graph-up" class="left-icon"></b-icon>
          <div class="left-title">Tổng quan</div>
        </div>
      </router-link>
      <div class="left">
        <router-link :to="{name: 'M001AdminUser'}">
          <div class="left-content">
            <b-icon icon="person-fill" class="left-icon"></b-icon>
            <div class="left-title">Nhân viên</div>
            <b-icon icon="arrow-down-circle" @click="chaneState()" class="right-icon"></b-icon>
          </div>
        </router-link>
      </div>
      <div class="left">
        <router-link :to="{name: 'M001AdminDepartment'}">
          <div class="left-content" @click="changeCate()">
            <b-icon icon="subtract" class="left-icon"></b-icon>
            <div class="left-title">Phòng ban</div>
            <b-icon icon="arrow-down-circle" class="right-icon"></b-icon>
          </div>
        </router-link>
      </div>
      <div class="left">
        <div class="left-content" @click="changeheal()">
          <b-icon icon="heart-half" class="left-icon"></b-icon>
          <div class="left-title">Bảo hiểm</div>
          <b-icon icon="arrow-down-circle" class="right-icon"></b-icon>
        </div>
        <ul class="left-detail" v-if="heal">
          <li>Tất cả nhân viên</li>
          <li>Thêm nhân viên</li>
          <li>Nhân viên mới</li>
          <li>Thực tập sinh</li>
        </ul>
      </div>
      <div class="left">
        <div class="left-content" @click="changeposition()">
          <b-icon icon="award-fill" class="left-icon"></b-icon>
          <div class="left-title">Chức vụ</div>
          <b-icon icon="arrow-down-circle" class="right-icon"></b-icon>
        </div>
        <ul class="left-detail" v-if="position">
          <li>Tất cả nhân viên</li>
          <li>Thêm nhân viên</li>
          <li>Nhân viên mới</li>
          <li>Thực tập sinh</li>
        </ul>
      </div>
      <div class="left">
        <div class="left-content" @click="changerecruitment()">
          <b-icon icon="pencil-square" class="left-icon"></b-icon>
          <div class="left-title">Tuyển dụng</div>
          <b-icon icon="arrow-down-circle" class="right-icon"></b-icon>
        </div>
        <ul class="left-detail" v-if="recruitment">
          <li>Tất cả nhân viên</li>
          <li>Thêm nhân viên</li>
          <li>Nhân viên mới</li>
          <li>Thực tập sinh</li>
        </ul>
      </div>
      <div class="left">
        <div class="left-content" @click="changeactivity()">
          <b-icon icon="controller" class="left-icon"></b-icon>
          <div class="left-title">Hoạt động</div>
          <b-icon icon="arrow-down-circle" class="right-icon"></b-icon>
        </div>
        <ul class="left-detail" v-if="activity">
          <li>Tất cả nhân viên</li>
          <li>Thêm nhân viên</li>
          <li>Nhân viên mới</li>
          <li>Thực tập sinh</li>
        </ul>
      </div>
      <div class="left">
        <div class="left-content" @click="changeproject()">
          <b-icon icon="eject-fill" class="left-icon"></b-icon>
          <div class="left-title">Dự án</div>
          <b-icon icon="arrow-down-circle" class="right-icon"></b-icon>
        </div>
        <ul class="left-detail" v-if="project">
          <li>Tất cả nhân viên</li>
          <li>Thêm nhân viên</li>
          <li>Nhân viên mới</li>
          <li>Thực tập sinh</li>
        </ul>
      </div>
      <div class="left">
        <div class="left-content" @click="changetimekeeping()">
          <b-icon icon="stopwatch-fill" class="left-icon"></b-icon>
          <div class="left-title">Chấm công</div>
          <b-icon icon="arrow-down-circle" class="right-icon"></b-icon>
        </div>
        <ul class="left-detail" v-if="timekeeping">
          <li>Tất cả nhân viên</li>
          <li>Thêm nhân viên</li>
          <li>Nhân viên mới</li>
          <li>Thực tập sinh</li>
        </ul>
      </div>
      <div class="left">
        <div class="left-content" @click="changeconfession()">
          <b-icon icon="hand-index-thumb" class="left-icon"></b-icon>
          <div class="left-title">Confestions</div>
          <b-icon icon="arrow-down-circle" class="right-icon"></b-icon>
        </div>
        <ul class="left-detail" v-if="confession">
          <li>Tất cả nhân viên</li>
          <li>Thêm nhân viên</li>
          <li>Nhân viên mới</li>
          <li>Thực tập sinh</li>
        </ul>
      </div>
      <div class="left">
        <div class="left-content" @click="changequestion()">
          <b-icon icon="question-octagon-fill" class="left-icon"></b-icon>
          <div class="left-title">Câu hỏi</div>
          <b-icon icon="arrow-down-circle" class="right-icon"></b-icon>
        </div>
        <ul class="left-detail" v-if="question">
          <li>Tất cả nhân viên</li>
          <li>Thêm nhân viên</li>
          <li>Nhân viên mới</li>
          <li>Thực tập sinh</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: "M001LeftMenu",
  data() {
    return {
      search: null,
      user: false,
      cate: false,
      heal: false,
      position: false,
      recruitment: false,
      activity: false,
      project: false,
      timekeeping: false,
      confession: false,
      question: false
    };
  },
  methods: {
    chaneState() {
      this.user = !this.user;
    },
    changeCate() {
      this.cate = !this.cate;
    },
    changeheal() {
      this.heal = !this.heal;
    },
    changeposition() {
      this.position = !this.position;
    },
    changerecruitment() {
      this.recruitment = !this.recruitment;
    },
    changeactivity() {
      this.activity = !this.activity;
    },
    changeproject() {
      this.project = !this.project;
    },
    changetimekeeping() {
      this.timekeeping = !this.timekeeping;
    },
    changeconfession() {
      this.confession = !this.confession;
    },
    changequestion() {
      this.question = !this.question;
    }
  }
};
</script>
<style>
.left-menu {
  /* max-width: 300px; */
  padding: 30px 20px;
  height: 100vh;
  /* position: fixed; */
  background: #1e282c;
  overflow-y: auto;
}
.search {
  border-radius: 25px !important;
}
.router-link-exact-active {
  color: #0f7eb1 !important;
}
/* .router-link-active {
  color: #ffffff !important;
} */
.right-icon {
  margin-left: 20px;
  align-self: center;
}
.top-search {
  display: flex;
}
.left-content {
  color: #ffffff;
  margin: 15px 10px;
  display: flex;
  transition: linear 0.3s;
}
.left-icon {
  align-self: center;
}
.left-title {
  align-content: center;
  margin-left: 30px;
}
.left-title a {
  color: #ffffff;
}
.left-detail {
  padding: 0 !important;
  transition: all cubic-bezier(0.175, 0.885, 0.32, 1.275) 1s;
}
.left-detail li {
  list-style: none;
  text-align: left;
  margin-left: 30px;
  color: #d3cece;
  text-transform: initial;
  transition: all linear 0.3s;
  animation: slide-in-top 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.left-detail li:hover {
  color: #0f7eb1 !important;
}
.left {
  animation: slide-in-top 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.left-content:hover {
  color: #0f7eb1 !important;
}
@keyframes slide-in-top {
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@media only screen and (max-width: 47.249999em) {
  .left-menu {
    /* position: absolute; */
    display: none;
    /* padding: 0 !important; */
    /* transform: translateX(-250px); */
  }
  .body {
    padding: 0;
  }
}
@media only screen and (min-width: 46.25em) and (max-width: 63.9375em) {
  .left-content {
    margin: 15px 0;
  }
  .left-title {
    margin-left: 10px;
  }
  .right-icon {
    margin-left: 10px;
  }
  .left-menu {
    /* max-width: 300px; */
    /* padding: 0; */
  }
}
</style>
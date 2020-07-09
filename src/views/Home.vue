
<template>
  <div class="home">
    <M003Navbar />
    <div class="top_brand"></div>
    <div class="top_overlight"></div>

    <div class="top">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7 left-slide">
          <div
            class="slogan"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit optio quisquam veritatis. At deleniti necessitatibus dolorum placeat quia autem facilis fuga voluptatem tenetur quae vitae, sed aliquam illo quidem. Nemo!</div>
        </div>

        <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
          <!-- <img class="right-slide" src="../assets/bran" alt /> -->
        </div>
      </div>
      <div class="row">
        <button
          type="button"
          @click="login()"
          class="btn btn-danger login-slide"
        >{{$t("slide.login")}}</button>
      </div>
    </div>

    <div
      data-aos="fade-up"
      data-aos-offset="300"
      data-aos-delay="30"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top"
      class="review"
    >
      <div class="review-title">{{$t("review.title")}}</div>
      <div class="row cell">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 user-detail">
          <b-icon icon="person-fill" class="icon-user"></b-icon>
          <div class="review-title-detail">{{$t("review.user")}}</div>
          <div class="review-description">{{$t("review.user-content")}}</div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 user-detail">
          <b-icon icon="person-plus-fill" class="icon-user"></b-icon>
          <div class="review-title-detail">{{$t("review.recruitment")}}</div>
          <div class="review-description">{{$t("review.recruitment-content")}}</div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 user-detail">
          <b-icon icon="envelope-fill" class="icon-user"></b-icon>
          <div class="review-title-detail">{{$t("review.confessions")}}</div>
          <div class="review-description">{{$t("review.confessions-content")}}</div>
        </div>
      </div>
    </div>

    <div
      data-aos="fade-up"
      data-aos-offset="300"
      data-aos-delay="30"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top"
      class="user-information"
    >
      <div class="review-title">{{$t("review.user")}}</div>
      <div v-lazy-container="{ selector: 'span' }" class="row cell">
        <div class="col-xs-6 col-sm-6 col-md-4 col-lg-3 home-user1">
          <b-avatar></b-avatar>
          <div class="user-name">Mr Dam</div>
          <div class="user-team">Team1</div>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-4 col-lg-3 home-user1">
          <b-avatar></b-avatar>
          <div class="user-name">Mr Dam</div>
          <div class="user-team">Team1</div>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-4 col-lg-3 home-user1">
          <b-avatar></b-avatar>
          <div class="user-name">Mr Dam</div>
          <div class="user-team">Team1</div>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-4 col-lg-3 home-user1">
          <b-avatar></b-avatar>
          <div class="user-name">Mr Dam</div>
          <div class="user-team">Team1</div>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-4 col-lg-3 home-user1">
          <b-avatar></b-avatar>
          <div class="user-name">Mr Dam</div>
          <div class="user-team">Team1</div>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-4 col-lg-3 home-user1">
          <b-avatar></b-avatar>
          <div class="user-name">Mr Dam</div>
          <div class="user-team">Team1</div>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-4 col-lg-3 home-user1">
          <b-avatar></b-avatar>
          <div class="user-name">Mr Dam</div>
          <div class="user-team">Team1</div>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-4 col-lg-3 home-user1">
          <b-avatar></b-avatar>
          <div class="user-name">Mr Dam</div>
          <div class="user-team">Team1</div>
        </div>
      </div>
    </div>

    <div
      data-aos="fade-up"
      data-aos-offset="300"
      data-aos-delay="30"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top"
      class="recruitments"
    >
      <div class="review-title">{{$t("review.recruitment")}}</div>
      <div class="recruitment-content">
        <div class="recruitment">
          <div class="recruitment-position">Senior Java</div>
          <div class="recruitment-require">{{$t("review.recruitment-require")}}</div>
          <div
            class="recruitment-requeri-detail"
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum similique fuga cupiditate, ratione repudiandae blanditiis libero aut veniam animi laborum neque inventore. Ab illo quisquam harum nobis eum maxime temporibus.</div>
          <div class="recruitment-require">{{$t("review.recruitment-description")}}</div>
          <div
            class="recruitment-requeri-detail"
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum similique fuga cupiditate, ratione repudiandae blanditiis libero aut veniam animi laborum neque inventore. Ab illo quisquam harum nobis eum maxime temporibus.</div>
          <div class="recruitment-require">{{$t("review.recruitment-benefit")}}</div>
          <div
            class="recruitment-requeri-detail"
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum similique fuga cupiditate, ratione repudiandae blanditiis libero aut veniam animi laborum neque inventore. Ab illo quisquam harum nobis eum maxime temporibus.</div>
        </div>
        <div class="recruitment">
          <div class="recruitment-position">Senior Java</div>
          <div class="recruitment-require">{{$t("review.recruitment-require")}}</div>
          <div
            class="recruitment-requeri-detail"
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum similique fuga cupiditate, ratione repudiandae blanditiis libero aut veniam animi laborum neque inventore. Ab illo quisquam harum nobis eum maxime temporibus.</div>
          <div class="recruitment-require">{{$t("review.recruitment-description")}}</div>
          <div
            class="recruitment-requeri-detail"
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum similique fuga cupiditate, ratione repudiandae blanditiis libero aut veniam animi laborum neque inventore. Ab illo quisquam harum nobis eum maxime temporibus.</div>
          <div class="recruitment-require">{{$t("review.recruitment-benefit")}}</div>
          <div
            class="recruitment-requeri-detail"
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum similique fuga cupiditate, ratione repudiandae blanditiis libero aut veniam animi laborum neque inventore. Ab illo quisquam harum nobis eum maxime temporibus.</div>
        </div>
      </div>
    </div>

    <M003Footer />
  </div>
</template>

<script>
/* eslint-disable */
const M003Navbar = () => import("../components/m003public/M003Navbar");
const M003Footer = () => import("../components/m003public/M003Footer");

export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {
    login() {
      this.$router.push({ name: "M002Login" });
    }
  },
  components: {
    M003Navbar,
    M003Footer
  }
};
</script>
<style>
.slogan {
  -webkit-animation: tracking-in-expand-fwd-bottom 1.8s
    cubic-bezier(0.215, 0.61, 0.355, 1) both;
  animation: tracking-in-expand-fwd-bottom 1.8s
    cubic-bezier(0.215, 0.61, 0.355, 1) both;
}

.login-slide {
  -webkit-animation: tracking-in-expand-fwd-left 2.8s
    cubic-bezier(0.215, 0.61, 0.355, 1) both;
  animation: tracking-in-expand-fwd-left 2.8s
    cubic-bezier(0.215, 0.61, 0.355, 1) both;
}
@-webkit-keyframes tracking-in-expand-fwd-bottom {
  0% {
    letter-spacing: -0.5em;
    -webkit-transform: translateY(-500px);
    transform: translateY(-500px);
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    -webkit-transform: translateZ(0) translateY(0);
    transform: translateZ(0) translateY(0);
    opacity: 1;
  }
}
@keyframes tracking-in-expand-fwd-bottom {
  0% {
    letter-spacing: -0.5em;
    -webkit-transform: translateY(-500px);
    transform: translateY(-500px);
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    -webkit-transform: translateZ(0) translateY(0);
    transform: translateZ(0) translateY(0);
    opacity: 1;
  }
}
@-webkit-keyframes tracking-in-expand-fwd-left {
  0% {
    letter-spacing: -0.5em;
    -webkit-transform: translateX(1000px);
    transform: translateX(1000px);
    transform: rotateY(720deg);
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    -webkit-transform: translateZ(0) translateY(0);
    transform: translateZ(0) translateY(0);
    transform: rotateY(0);
    opacity: 1;
  }
}
@keyframes tracking-in-expand-fwd-left {
  0% {
    letter-spacing: -0.5em;
    -webkit-transform: translateX(1000px);
    transform: translateX(1000px);
    transform: rotateY(720deg);
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    -webkit-transform: translateZ(0) translateY(0);
    transform: translateZ(0) translateY(0);
    opacity: 1;
    transform: rotateY(0);
  }
}
.top_brand {
  z-index: 4;
  margin: 75px 0 0 0;
  height: 700px;

  filter: blur(3px);
  -webkit-filter: blur(1px);

  background-image: url("../../public/img/brand1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-color: antiquewhite;

  position: relative;
  background-position: right;
}
.top_overlight {
  position: absolute;
  /* max-width: 1500px; */
  /* margin: 0 9%; */
  width: 100%;

  height: 700px;
  background: rgb(22, 22, 22);
  opacity: 0.5;
  z-index: 7;
  top: 75px;
}
.slogan {
  color: aliceblue;

  margin: 20% 0 0 20px;
  font-size: 20px;
}
.top {
  max-width: 1500px;
  margin: 60px 10%;
  position: absolute;
  top: 70px;
  z-index: 10;
  /* left: ; */
}
.left-slide {
  display: block;
}
.login-slide {
  margin: 160px 40px;
  transition: all linear 1s;
}
.login-slide:hover {
  transform: rotate(1080deg) !important;
}
.home-content {
  max-width: 1200px;
  margin: 40px auto;
}
.row {
  margin-left: 0 !important;
  margin-right: 0 !important;
}
.cell {
  margin: 30px;
  border-radius: 50px;
}
.review {
  max-width: 1200px;
  margin: 40px auto;
}
.user-detail {
  background: #eae3e3;
  padding: 40px 15px !important;
}
.user-detail:hover {
  border: 0.5px solid rgb(219, 199, 199);
  border-radius: 25px;
}
.review-title {
  color: #e83c37;
  justify-content: left;
  text-align: left;
  text-transform: uppercase;
  font-weight: bold;
}
.icon-user {
  color: #e83c37;
  font-size: 30px;
}
.review-title-detail {
  color: #e83c37;
  font-weight: bold;
  margin: 20px auto;
}
.review-description {
  padding: 0 20px;
}
.user-information {
  max-width: 1200px;
  margin: 40px auto;
}
.cell .b-avatar {
  width: 7em !important;
  height: 7em !important;
  box-shadow: 10px 5px 15px rgb(77, 74, 74);
}
.home-user1 {
  margin: 20px 0;
}
.user-name {
  margin-top: 5px;
  font-weight: bold;
}
.recruitments {
  max-width: 1200px;
  margin: 40px auto;
}
.recruitment-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 20px 0;
}
.recruitment {
  width: 45%;
  background: #eae3e3;
  padding: 20px 4%;
  border-radius: 15px;
  margin: 20px 0;
}
.recruitment-position {
  color: #e83c37;
  font-weight: bold;
  margin: 10px 0;
}
.recruitment-require {
  font-weight: bold;
  text-align: left;
  margin-top: 20px;
}
.recruitment-requeri-detail {
  text-align: left;
}
@media only screen and (max-width: 46.24em) {
  .top_brand {
    height: 400px;
  }
  .top_overlight {
    height: 400px;
  }
  .top {
    margin: 30px 10%;
  }
  .login-slide {
    margin: 60px auto;
  }
  .recruitment {
    width: 90%;
    background: #eae3e3;
    padding: 20px 4%;
    border-radius: 15px;
  }
  .slogan {
    font-size: 16px;
    margin: 10% 0 0 0;
  }
}
@media only screen and (min-width: 46.25em) and (max-width: 1200px) {
  .top_brand {
    height: 500px;
  }
  .top_overlight {
    height: 500px;
  }
  .top {
    margin: 30px 10%;
  }
  .login-slide {
    margin: 100px 40px;
  }
}
</style>

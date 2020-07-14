<template>
  <div class="home">
    <M001Navbar />
    <div class="home-content">
      <div class="col-xs-0 col-sm-0 col-md-3 col-lg-3 left-menu1">
        <M001LeftMenu />
      </div>
      <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <!-- <b-table striped hover :items="items"></b-table> -->
            <div class="search">
              <button type="button" class="btn btn-info adduser" @click="addUser()">Thêm nhân viên</button>
              <input type="text" placeholder="Tìm kiếm theo tên" class="search-data" />
            </div>

            <b-table
              striped
              ref="table"
              responsive
              show-empty
              hover
              :items="items"
              :fields="fields"
              :per-page="perPage"
              :current-page="currentPage"
            >
              <template v-slot:cell(avatar)="data" class="admin_user">
                <img
                  class="user_image"
                  width="90"
                  height="90"
                  v-if="data.item.getData('memberResponseDTO').imageUrl"
                  v-lazy="data.item.getData('memberResponseDTO').imageUrl"
                  alt
                />
                <b-avatar
                  class="admin_user--avatar"
                  v-if="!data.item.getData('memberResponseDTO').imageUrl"
                ></b-avatar>
              </template>
              <template
                v-slot:cell(name)="data"
              >{{ data.item.getData('memberResponseDTO').fullName}}</template>
              <template v-slot:cell(email)="data">{{ data.item.getData('email') }}</template>
              <template
                v-slot:cell(address)="data"
              >{{ data.item.getData('memberResponseDTO').address | ft_null}}</template>
              <template v-slot:cell(fullName)="data">{{ data.item.getData('userName') | ft_null }}</template>
              <template
                v-slot:cell(phoneNumber)="data"
              >{{ data.item.getData('memberResponseDTO').phoneNumber | ft_null}}</template>
              <template
                v-slot:cell(gender)="data"
              >{{ data.item.getData('memberResponseDTO').gender | ft_null}}</template>
              <template
                v-slot:cell(dateOfBirth)="data"
              >{{ data.item.getData('memberResponseDTO').dateOfBirth | ft_null }}</template>

              <template v-slot:cell(action)="data">
                <b-icon @click="deleteUser(data.item.id)" icon="x-circle-fill" class="icon-delete"></b-icon>
                <b-icon @click="update(data.item.id)" icon="wrench" class="icon-update"></b-icon>
              </template>
            </b-table>

            <b-pagination
              v-model="currentPage"
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
import M001Navbar from "@/components/m001admin/M001Navbar";
import M001LeftMenu from "@/components/m001admin/M001LeftMenu";

import UserDataService from "@/../api/userApi";
import Depart from "@/../DataObject/Department";
export default {
  name: "M001AdminHome",
  components: {
    M001Navbar,
    M001LeftMenu
  },
  data() {
    return {
      perPage: 10,
      currentPage: 1,
      items: [],
      fields: [
        {
          key: "avatar",
          sortable: false
        },
        {
          key: "name",
          label: "Tên nhân viên",
          sortable: true
        },
        {
          key: "email",
          sortable: true
        },
        {
          key: "address",
          label: "Địa chỉ",
          sortable: true
        },
        {
          key: "username",
          label: "Tên đăng nhập",
          sortable: false
        },
        {
          key: "phoneNumber",
          label: "Số điện thoại",
          sortable: false
        },
        {
          key: "gender",
          label: "Giới tính",
          sortable: false
        },
        {
          key: "dateOfBirth",
          label: "Ngày sinh",
          sortable: true
        },
        {
          key: "action",
          label: "Action",
          sortable: false
        }
      ]
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
    myRowClickHandler(record, index) {
      this.$router.push({
        name: "M001AdminUpdateUser",
        params: { id: record.id }
      });
    },
    addUser() {
      this.$router.push({ name: "M001AdminAddUser" });
    },
    update(id) {
      this.$router.push({ name: "M001AdminUpdateUser", params: { id: id } });
    },
    deleteUser(id) {
      UserDataService.deActiveUser(id, {})
        .then(() => {
          this.items = this.items.filter(item => {
            return item.id != id;
          });
          this.toast("Xóa user thành công");
        })
        .catch(err => {
          this.toast(err.response.data.body);
        });
    },
    getAllUser() {
      UserDataService.getAllUser()
        .then(data => {
          console.log(data);
          data.data.data.forEach(departs => {
            let depart = new Depart(departs);
            this.items.push(depart);
          });
        })
        .catch(err => {
          console.log(err.response);
        });
    }
  },
  mounted() {
    this.getAllUser();
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
.admin_user--avatar {
  width: 5.5em !important;
  height: 5.5em !important;
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
.toast-header {
  color: aliceblue !important;
  background: #3c8dbc !important;
}
.user_image {
  border-radius: 50px;
}
thead {
  background: #3c8dbc !important;
}
td {
  align-items: center !important;
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
.icon-update {
  color: darkgoldenrod;
  font-size: 20px;
  margin-left: 5px;
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
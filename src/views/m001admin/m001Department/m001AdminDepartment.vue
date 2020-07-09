
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
            <b-table
              striped
              ref="table"
              show-empty
              hover
              :items="items"
              :fields="fields"
              :per-page="perPage"
              :current-page="currentPage"
            >
              <template v-slot:cell(name)="data">{{ data.item.getData('name') }}</template>
              <template v-slot:cell(code)="data">{{ data.item.getData('code') }}</template>
              <template v-slot:cell(description)="data">{{ data.item.getData('description') }}</template>
              <template v-slot:cell(action)="data">
                <b-icon
                  @click="deleteDepart(data.item.id)"
                  icon="x-circle-fill"
                  class="icon-delete"
                ></b-icon>
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

const M001Navbar = () => import("@/components/m001admin/M001Navbar");
const M001LeftMenu = () => import("@/components/m001admin/M001LeftMenu");

import departmentService from "@/../api/departmentApi";

import Depart from "@/../DataObject/Department";
export default {
  name: "M001AdminDepartment",
  components: {
    M001Navbar,
    M001LeftMenu
  },
  data() {
    return {
      perPage: 5,
      currentPage: 1,
      items: [],
      fields: [
        {
          key: "name",
          sortable: true
        },
        {
          key: "code",
          sortable: true
        },
        {
          key: "description",
          sortable: true
        },
        {
          key: "action",
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
    addDepart() {
      this.$router.push({
        name: "M001AdminAddDepart",
        params: { departs: this.items }
      });
    },
    updateDepart(id) {
      this.$router.push({ name: "M001AdminUpdateDepart", params: { id: id } });
    },
    getDepart() {
      departmentService
        .getAllDepart()
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
    },
    deleteDepart(id) {
      departmentService
        .deActiveDepart(id, {})
        .then(data => {
          // console.log(data);
          this.toast(data.data.message);
          this.items = this.items.filter(item => {
            return item.id != id;
          });
        })
        .catch(err => {
          this.toast(err.response.data.body);
          // console.log(err.response);
        });
    }
  },
  computed: {
    rows() {
      return this.items.length;
    }
  },
  mounted() {
    this.getDepart();
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
.toast-header {
  color: aliceblue !important;
  background: #3c8dbc !important;
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
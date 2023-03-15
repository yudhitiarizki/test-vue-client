<template>
    <div class="container">
      <div class="row justify-content-between mt-4 container">
        <div class="col-4">
          <h4>Table of Items</h4>
        </div>
        <div class="col-2 d-grid gap-5">
          <router-link :to="{ name: 'tambah-data-item' }" class="btn btn-primary"
            >Tambah Data</router-link
          >
        </div>
      </div>
      <div class="container mt-3">
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nama Item</th>
              <th scope="col">Unit</th>
              <th scope="col">Stok</th>
              <th scope="col">Harga Satuan</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in items" :key="item.itemId">
              <th scope="row">{{ index + 1 }}</th>
              <td>{{ item.nama_item }}</td>
              <td>{{ item.unit }}</td>
              <td>{{ item.stok }}</td>
              <td>{{ item.harga_satuan }}</td>
              <td>
                <div class="dropdown">
                  <a
                    class="btn btn-secondary dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Action
                  </a>
  
                  <ul class="dropdown-menu">
                    <li><router-link :to="{ name: 'detail-item', params: { itemId: item.itemId } }" class="dropdown-item" href="#">View</router-link></li>
                    <li><router-link :to="{ name: 'edit-item', params: { itemId: item.itemId } }" class="dropdown-item" href="#">Edit</router-link></li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#"
                        @click.prevent="deleteData(item.itemId)"
                        >Delete</a
                      >
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "Items",
    data() {
      return { items: [] };
    },
    methods: {
      fetchData() {
        axios
          .get("http://localhost:3001/items")
          .then((response) => {
            this.items = response.data.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },
      deleteData(id) {
        if (confirm("Are you sure want to delete this item?")) {
          axios
            .delete(`http://localhost:3001/items/${id}`)
            .then(() => {
                this.fetchData();
                alert(response.data.message);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      },
    },
    mounted() {
      this.fetchData();
    },
  };
  </script>
  
  <style></style>
  
<template>
    <div class="container">
        <div class="row justify-content-between mt-4 container">
            <div class="col-4">
                <h4>Table of Customer</h4>
            </div>
            <div class="col-2 d-grid gap-5">
                <router-link :to="{ name: 'tambah-data-customer' }" class="btn btn-primary">Tambah Data</router-link>
            </div>
        </div>
      <div class="container mt-3">
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nama</th>
              <th scope="col">contact</th>
              <th scope="col">email</th>
              <th scope="col">diskon</th>
              <th scope="col">Tipe Diskon</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in customer" :key="item.customerId">
              <th scope="row">{{ index + 1 }}</th>
              <td>{{ item.nama }}</td>
              <td>{{ item.contact }}</td>
              <td>{{ item.email }}</td>
              <td>{{ item.diskon }}</td>
              <td>{{ item.type_diskon }}</td>
              <td>
                <div class="dropdown">
                  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                    Action
                  </a>
  
                  <ul class="dropdown-menu">
                    <li><router-link :to="{ name: 'detail-customer', params: { customerId: item.customerId } }" class="dropdown-item" href="#">View</router-link></li>
                    <li><router-link :to="{ name: 'edit-customer', params: { customerId: item.customerId } }" class="dropdown-item" href="#">Edit</router-link></li>
                    <li><a class="dropdown-item text-danger" href="#" @click.prevent="deleteCustomer(item.customerId)" >Delete </a> </li>
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
  import axios from 'axios';
  
  export default {
    name: 'Customer',
    data() {
      return { customer: [] };
    },
    methods: {
      fetchData() {
        axios
          .get('http://localhost:3001/customer')
          .then((response) => {
            this.customer = response.data.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },
      deleteCustomer(id) {
        if (confirm('Anda yakin ingin menghapus data ini?')) {
            axios
            .delete(`http://localhost:3001/customer/${id}`)
            .then((response) => {
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
  
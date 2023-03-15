<template>
    <div class="container mt-4">
      <div class="row">
        <div class="col-md-12">
          <h3 class="mb-3">Detail Customer</h3>
          <form>
            <div class="mb-3">
                <label for="nama" class="form-label">Nama</label>
                <input type="text" class="form-control" id="nama" :value="customer.nama" disabled>
            </div>
            <div class="mb-3">
                <label for="nama" class="form-label">Contact</label>
                <input type="text" class="form-control" id="nama" :value="customer.contact" disabled>
            </div>
            <div class="mb-3">
                <label for="nama" class="form-label">Contact</label>
                <input type="text" class="form-control" id="nama" :value="customer.contact" disabled>
            </div>
            <div class="mb-3">
                <label for="nama" class="form-label">Contact</label>
                <input type="text" class="form-control" id="nama" :value="customer.email" disabled>
            </div>
            <div class="mb-3">
                <label for="nama" class="form-label">Contact</label>
                <textarea type="text" class="form-control" id="nama" :value="customer.alamat" disabled></textarea>
            </div>
            <div class="mb-3 col-6 row">
                <label for="nama" class="form-label">KTP</label>
                <img :src="customer.ktp" alt="KTP" class="img-thumbnail mb-3 ml-3">
            </div>
            <div class="mb-3">
                <label for="nama" class="form-label">Diskon</label>
                <input type="text" class="form-control" id="nama" :value="customer.diskon" disabled>
            </div>
            <div class="mb-3">
                <label for="nama" class="form-label">Diskon</label>
                <input type="text" class="form-control" id="nama" :value="customer.type_diskon" disabled>
            </div>
            
            </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'DetailCustomer',
    data() {
      return { customer: {} };
    },
    methods: {
      fetchData() {
        const customerId = this.$route.params.customerId;
        axios
          .get(`http://localhost:3001/customer/${customerId}`)
          .then((response) => {
            this.customer = response.data.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
    mounted() {
      this.fetchData();
    },
  };
  </script>
  
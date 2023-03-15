<template>
    <div class="container mt-4">
      <div class="row">
        <div class="col-md-12">
          <h3 class="mb-3">Detail Item</h3>
          <form>
            <div class="mb-3">
                <label for="nama" class="form-label">Nama Item</label>
                <input type="text" class="form-control" id="nama" :value="item.nama_item" disabled>
            </div>
            <div class="mb-3">
                <label for="nama" class="form-label">Unit</label>
                <input type="text" class="form-control" id="nama" :value="item.unit" disabled>
            </div>
            <div class="mb-3">
                <label for="nama" class="form-label">Stok</label>
                <input type="text" class="form-control" id="nama" :value="item.stok" disabled>
            </div>
            <div class="mb-3">
                <label for="nama" class="form-label">Harga Satuan</label>
                <input type="text" class="form-control" id="nama" :value="item.harga_satuan" disabled>
            </div>
            <div class="mb-3 col-6 row">
                <label for="nama" class="form-label">Foto Barang</label>
                <img :src="item.barang" alt="KTP" class="img-thumbnail mb-3 ml-3">
            </div>
            
            </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'DetailItem',
    data() {
      return { item: {} };
    },
    methods: {
      fetchData() {
        const itemId = this.$route.params.itemId;
        axios
          .get(`http://localhost:3001/items/${itemId}`)
          .then((response) => {
            this.item = response.data.data;
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
  
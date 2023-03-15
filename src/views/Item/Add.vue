<template>
    <div class="container">
      <h3 class="mt-3">Tambah Item Baru</h3>
      <div class="container mt-3">
        <form @submit.prevent="submitForm">
          <div class="mb-3">
            <label for="nama_item" class="form-label">Nama Item</label>
            <input type="text" class="form-control" id="nama_item" v-model="form.nama_item">
          </div>
          <div class="mb-3">
            <label for="unit" class="form-label">Unit</label>
            <select class="form-control" id="unit" v-model="form.unit">
              <option value="kg">KG</option>
              <option value="pcs">PCS</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="stok" class="form-label">Stok</label>
            <input type="number" class="form-control" id="stok" v-model="form.stok">
          </div>
          <div class="mb-3">
            <label for="harga" class="form-label">Harga Satuan</label>
            <input type="number" class="form-control" id="harga" v-model="form.harga_satuan">
          </div>
          <div class="mb-3">
            <label for="barang" class="form-label">Foto Barang</label>
            <input type="file" class="form-control" id="barang" @change="handleFileUpload">
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </template>

<script>
import axios from 'axios';

export default {
  name: 'TambahData',
  data() {
    return {
      form: {
        nama_item: '',
        unit: '',
        stok: '',
        harga_satuan: '',
        barang: ''
      }
    }
  }, 
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.form.barang = reader.result;
      };
    },
    submitForm() {
      axios.post('http://localhost:3001/items', this.form)
        .then(response => {
          console.log(response.data);
          alert('Customer added successfully');
          this.$router.push({ name: 'item' });
        })
        .catch(error => {
          console.log(error);
          alert('Failed to add customer');
        });
    }
  }
}
</script>
  
<template>
  <div class="hero-image">
    <div class="hero-text">
      <h1>Halaman Home Test Rimba</h1>
      <p>Selamat datang di halaman home ini!</p>
      <button class="btn btn-primary">Mulai</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
.hero-image {
  background-image: url("https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9");
  height: 500px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.hero-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
</style>

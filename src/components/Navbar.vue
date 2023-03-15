<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">Test</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link :to="{ name: 'home' }" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'costumer' }" class="nav-link">Customer</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'item' }" class="nav-link">Items</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'sales' }" class="nav-link">Sales</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

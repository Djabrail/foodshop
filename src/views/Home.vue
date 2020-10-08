<template>
  <div class="home">
    <Navbar />
    <div class="container">
      <Hero />

      <div class="row mt-4">
        <div class="col">
          <h2>Популярное</h2>
        </div>
        <div class="col">
          <router-link to="/foods" class="btn btn-success float-right">
            <b-icon-eye></b-icon-eye>Полное меню
          </router-link>
        </div>
      </div>

      <div class="row mb-4">
        <div class="col-md-4 mt-4" v-for="product in products" :key="product.id">
          <CardProduct :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Havbar";
import CardProduct from "@/components/CardProduct";
import Hero from "@/components/Hero";
import axios from "axios";

export default {
  name: "Home",
  components: { Navbar, Hero, CardProduct },
  data() {
    return {
      products: []
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    }
  },
  mounted() {
    axios
      .get("http://localhost:3000/best-products")
      .then(response => this.setProducts(response.data))
      .catch(error => console.log(error));
  }
};
</script>

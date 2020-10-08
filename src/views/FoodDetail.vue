<template>
  <div class="food-detail">
    <Navbar />
    <div class="container">
      <!-- breadcrumb -->
      <div class="row mt-4">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/" class="text-dark">Главная</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/foods" class="text-dark">Меню</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">{{ product.name }}</li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-md-6">
          <img :src=" '../assets/images/' + product.image " class="img-fluid shadow" />
        </div>
        <div class="col-md-6">
          <h2>
            <strong>{{ product.name }}</strong>
          </h2>
          <hr />
          <h4>
            Цена:
            <strong>{{ product.price }} руб.</strong>
          </h4>
          <form class="mt-4" v-on:submit.prevent>
            <div class="form-group">
              <label for="jumlah_pemesanan">Количество:</label>
              <input type="number" class="form-control" value="1" v-model="order.amount" />
            </div>
            <div class="form-group">
              <label for="keterangan">Комментарии:</label>
              <textarea v-model="order.comments" class="form-control"></textarea>
            </div>

            <button type="submit" class="btn btn-success" @click="ordering">
              <b-icon-cart></b-icon-cart>Добавить
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Havbar";
import axios from "axios";
export default {
  name: "FoodDetail",
  components: {
    Navbar
  },
  data() {
    return {
      product: {},
      order: {}
    };
  },
  methods: {
    setProduct(data) {
      this.product = data;
    },
    ordering() {
      if (this.order.amount) {
        this.order.products = this.product;

        axios
          .post("http://localhost:3000/basket", this.order)
          .then(() => {
            this.$router.push({ path: "/basket" });
            this.$toast.success("Добавили в корзину", {
              type: "success",
              position: "top-right",
              duration: 3000,
              dismissible: true
            });
          })
          .catch(err => console.log(err));
      } else {
        this.$toast.error("Количество не указана", {
          type: "error",
          position: "top-right",
          duration: 3000,
          dismissible: true
        });
      }
    }
  },
  async mounted() {
    const result = await axios.get(
      "http://localhost:3000/products/" + this.$route.params.id
    );
    this.product = result.data;
  }
};
</script>

<style>
</style>
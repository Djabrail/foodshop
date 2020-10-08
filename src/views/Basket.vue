<template>
  <div class="keranjang">
    <Navbar :basketUpdate="basket" />
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
              <li class="breadcrumb-item active" aria-current="page">Корзина</li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <h2>Корзина</h2>
          <div class="table-responsive mt-3">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Изображение</th>
                  <th scope="col">Продукт</th>
                  <th scope="col">Описание</th>
                  <th scope="col">Количество</th>
                  <th scope="col">Стоимость</th>
                  <th scope="col">Общая стоимость</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colspan="6" align="right">
                    <strong>Итого :</strong>
                  </td>
                  <td align="right">
                    <strong>0 руб.</strong>
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Form Checkout -->
      <div class="row justify-content-end">
        <div class="col-md-4">
          <form class="mt-4">
            <div class="form-group">
              <label for="nama">Имя :</label>
              <input type="text" class="form-control" />
            </div>
            <div class="form-group">
              <label for="noMeja">Описание :</label>
              <input type="text" class="form-control" />
            </div>

            <button type="submit" class="btn btn-success float-right">
              <b-icon-cart></b-icon-cart>Заказать
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
  name: "Basket",
  components: {
    Navbar
  },
  data() {
    return {
      basket: []
    };
  },
  methods: {
    setBasket(data) {
      this.products = data;
    }
  },
  mounted() {
    axios
      .get("http://localhost:3000/basket")
      .then(response => this.setBasket(response.data))
      .catch(error => console.log(error));
  }
};
</script>

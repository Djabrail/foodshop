<template>
  <div class="pesanan-sukses">
    <Navbar />
    <div class="container">
      <div class="row justify-content-center mt-5">
        <div class="col text-center">
          <h2>
            <strong>Успех!!!</strong>
          </h2>
          <h4>
            Ваш заказ обрабатывается немедленно
            <br />Ждите
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Havbar";
export default {
  name: "OrderCompleted",
  components: {
    Navbar
  }
};
</script>

<style>
</style>
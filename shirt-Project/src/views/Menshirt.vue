.
<template>
  <div class="container">
    <h1 class="text-center">Men</h1>
    <div class="row row-col-1 rows-md-3 g-4 py-5">
      <div class="col" v-for="item in items" :key="item.id">
        <div class="card" style="width: 18rem">
          <img :src="`${item.imgSrc}`" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ item.name }}</h5>
            <p class="card-text">Size {{ item.size }}</p>
          </div>
          <div class="d-flex justify-content-around mb-5">
            <h3>{{ item.price }} $</h3>
            <button class="button-hover-addcart button">
              <span>Add to cart</span><i class="fa fa-shopping-cart"></i>
            </button>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card" style="width: 18rem">
          <img
            src="/src/assets/image/menshirt2.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Blue Shirt , White T-Shirt</h5>
            <p class="card-text">Size S M X L XL</p>
          </div>
          <div class="d-flex justify-content-around mb-5">
            <h3>75$</h3>
            <button class="button-hover-addcart button">
              <span>Add to cart</span><i class="fa fa-shopping-cart"></i>
            </button>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card" style="width: 18rem">
          <img
            style="height: 25.5rem"
            src="/src/assets/image/menshirt3.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Green Shirt</h5>
            <p class="card-text">Size M X L XL</p>
          </div>
          <div class="d-flex justify-content-around mb-5">
            <h3>100$</h3>
            <button class="button-hover-addcart button">
              <span>Add to cart</span><i class="fa fa-shopping-cart"></i>
            </button>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card" style="width: 18rem">
          <img
            src="/src/assets/image/menshirt4.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Black Shirt</h5>
            <p class="card-text">Size S M X L XL XLL</p>
          </div>
          <div class="d-flex justify-content-around mb-5">
            <h3>120$</h3>
            <button class="button-hover-addcart button">
              <span>Add to cart</span><i class="fa fa-shopping-cart"></i>
            </button>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card" style="width: 18rem">
          <img
            style=""
            src="/src/assets/image/menshirt5.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Red & Black Shirt</h5>
            <p class="card-text">Size M X L XL XLL</p>
          </div>
          <div class="d-flex justify-content-around mb-5">
            <h3>100$</h3>
            <button class="button-hover-addcart button">
              <span>Add to cart</span><i class="fa fa-shopping-cart"></i>
            </button>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card" style="width: 18rem">
          <img
            style=""
            src="/src/assets/image/menshirt6.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Long Sleeve</h5>
            <p class="card-text">Size M X L XL XLL</p>
          </div>
          <div class="d-flex justify-content-around mb-5">
            <h3>50$</h3>
            <button class="button-hover-addcart button">
              <span>Add to cart</span><i class="fa fa-shopping-cart"></i>
            </button>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card" style="width: 18rem">
          <img
            style=""
            src="/src/assets/image/menshirt7.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Orange Jecket</h5>
            <p class="card-text">Size M X L XL XLL</p>
          </div>
          <div class="d-flex justify-content-around mb-5">
            <h3>500$</h3>
            <button class="button-hover-addcart button">
              <span>Add to cart</span><i class="fa fa-shopping-cart"></i>
            </button>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card" style="width: 18rem">
          <img
            style=""
            src="/src/assets/image/menshirt8.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Green Shirtt</h5>
            <p class="card-text">Size M X L XL XLL</p>
          </div>
          <div class="d-flex justify-content-around mb-5">
            <h3>25$</h3>
            <button class="button-hover-addcart button">
              <span>Add to cart</span><i class="fa fa-shopping-cart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const items = ref([
  {
    id: 1,
    name: "Barca Retro Shirt",
    price: 99,
    size: "S M X L XL XLL",
    imgSrc: "/src/assets/image/menshirt1.jpg",
  },
  {
    id: 2,
    name: "Blue Shirt , White T-Shirt",
    price: 75,
    size: "S M X L XL XLL",
    imgSrc: "/src/assets/image/menshirt2.jpg",
  },
]);
</script>

<style scoped>
.card-img-top {
  border-radius: 50px;
  padding: 20px;
}
.card {
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
}
.card-body {
  padding: 25px;
  margin: -15px;
}

.button-hover-addcart {
  border: 2px solid #767676;
  background: transparent;
  color: #767676;
  text-transform: uppercase;
  overflow: hidden;
  letter-spacing: 0.07rem;
  transition: all 0.2s ease-in-out;
  position: relative;
}

.button-hover-addcart span {
  transition: all 0.2s ease-in-out;
}

.button-hover-addcart .fa {
  position: absolute;
  font-size: 1.2rem;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  color: #1779ba;
  right: -20px;
  transition: 0.4s right cubic-bezier(0.38, 0.6, 0.48, 1);
}

.button-hover-addcart:hover {
  border-color: #1779ba;
  background: transparent;
  transition: border-color 0.2s;
}

.button-hover-addcart:hover span {
  margin-right: 20px;
  color: #1779ba;
}

.button-hover-addcart:hover .fa {
  right: 12px;
}
</style>
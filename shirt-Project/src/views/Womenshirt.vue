















.
<template>
  <div class="container">
    <h1 class="text-center">Women</h1>
    <div class="row row-col-1 rows-md-3 g-4 py-5">
      <div class="col">
        <div class="card" style="width: 18rem">
          <img
            src="/src/assets/image/womenshirt1.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Green Shirt</h5>
            <p class="card-text">Size S M X L XL</p>
          </div>
          <div class="d-flex justify-content-around mb-5">
            <h3>30$</h3>
            <button class="button-hover-addcart button">
              <span>Add to cart</span><font-awesome-icon icon="cart-shopping" />
            </button>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card" style="width: 18rem">
          <img
            src="/src/assets/image/womenshirt2.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">White Shirt</h5>
            <p class="card-text">Size S M X L XL</p>
          </div>
          <div class="d-flex justify-content-around mb-5">
            <h3>40$</h3>
            <button class="button-hover-addcart button">
              <span>Add to cart</span><i class="fa fa-shopping-cart"></i>
            </button>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card" style="width: 18rem">
          <img
            src="/src/assets/image/womenshirt3.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Green & White Shirt</h5>
            <p class="card-text">Size S M X L XL</p>
          </div>
          <div class="d-flex justify-content-around mb-5">
            <h3>30$</h3>
            <button class="button-hover-addcart button">
              <span>Add to cart</span><i class="fa fa-shopping-cart"></i>
            </button>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card" style="width: 18rem">
          <img
            src="/src/assets/image/womenshirt4.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">White Long Sleeve Shirt</h5>
            <p class="card-text">Size S M X L XL</p>
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
            src="/src/assets/image/womenshirt5.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Kakada Sophorn</h5>
            <p class="card-text">Size XLLLLLLLLL</p>
          </div>
          <div class="d-flex justify-content-around mb-5">
            <h3>2000000$</h3>
            <button class="button-hover-addcart button">
              <span>Add to cart</span><i class="fa fa-shopping-cart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script setup></script>

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













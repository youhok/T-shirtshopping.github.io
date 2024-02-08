<template>
  <div>
    <div class="container-fluid content-top">
      <div class="container">
        <div class="row content-top  align-items-center">
          <div class="col-lg-6 col-md-6 col-sm-12">
            <p>WOMEN</p>
            <h1 data-aos="fade-up">
              Slick.
              Modern.
              <br>
              Awesome.
            </h1>

            <btncomponet text="Shop Collection" />
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12">
            <!-- <div class="images"> -->
            <img src="../assets/image/hero.png" alt="" class="img-fluid" data-aos="fade-left">
            <!-- </div> -->
          </div>
        </div>
      </div>
    </div>


    <div class="container text-center mt-4">
      <p class="mb-0" data-aos="fade-right">SUMMER COLLECTION</p>
      <h1 data-aos="fade-down">Popular T-Shirts</h1>
    </div>


    <div class="container mt-5">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col-lg-3 col-md-6 col-sm-6 mb-4">
          <card
            imageSrc="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-09-a-300x366.jpg"
            info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nemo, libero placeat eveniet saepe maxime optio ut perferendis"
            Product="shirt" @produstshirt-1="clickGotoShirt1()" />
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6  mb-4">
          <card
            image-src="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-06-a-300x366.jpg"
            info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nemo, libero placeat eveniet saepe maxime optio ut perferendis"
            Product="shirt" />
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6  mb-4">
          <card
            image-src="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-10-a-300x366.jpg"
            info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nemo, libero placeat eveniet saepe maxime optio ut perferendis"
            Product="shirt" />
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 mb-4">
          <card
            image-src="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-08-a-300x366.jpg"
            info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nemo, libero placeat eveniet saepe maxime optio ut perferendis"
            Product="shirt" />
        </div>
      </div>
    </div>

    <div class="container mt-5">
      <div class="row ">
        <div class="col-lg-6 col-sm-12 col-md-12">
          <img src="../assets//image/collection-02.jpeg" alt="" class="img-fluid" data-aos="fade-up-right">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <p class="text-center" data-aos="fade-up-right">MEN</p>
                <h1 class="text-center" data-aos="fade-up-right">The base collection - Ideal every day.</h1>
                <div class="d-flex justify-content-center">
                  <btncomponet text="Shop Now" data-aos="fade-up-right" />
                </div>

              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-sm-12 col-md-12 mt-3">
          <img
            src="../assets//image/linen-rayon-ditzy-floral-short-sleeve-sport-shirt-coronet-blue-front-10629-2 (1).webp"
            alt="" class="img-fluid" data-aos="fade-up-left">
        </div>
      </div>
    </div>

    <div class="container-fluid  mt-5 " data-aos="zoom-in">
      <div class="row">
        <div class="col-12 position-relative">
          <!-- Image -->
          <div class="image-overlay">
            <img src="../assets/image/2e431534b783468b89e1996e93c0b88c.thumbnail.0000000000.jpg" alt="" class="img-fluid">
            <div class="overlay"></div>
          </div>


          <!-- Centered text and button -->
          <div class="position-absolute top-50 start-50 translate-middle text-center">
            <p class="fs-6 text-white">NEW COLLECTION</p>
            <h2 class="text-white">
              Be different in your own way!
              Find your unique style
            </h2>
            <div class="d-grid gap-2 d-md-block">
              <btncomponet text="Shop Collection" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mt-5">
      <div class="row  align-items-center">
        <div class="col-lg-6" data-aos="zoom-in-right">
          <div class="image-wrapper">
            <!-- Actual image -->
            <img src="../assets/image/collection-03.jpeg" alt="" class="img-fluid" data-aos="zoom-in-right">
          </div>
          <!-- <img src="../assets//image/collection-03.jpeg" alt=""> -->
        </div>
        <div class="col-lg-6" data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500"
          data-aos-duration="500">
          <p> WOMEN</p>
          <h1>Spring Summer Collection</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id leo tempor, congue justo at, lobortis orci.
            Aliquam venenatis dui lectus, eu convallis turpis convallis et. Pellentesque
          </p>
          <btncomponet text="See Whole Collection" />
        </div>
      </div>
    </div>


    <div class="container text-center mt-4" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
      <p class="mb-0">SUMMER COLLECTION</p>
      <h1>On Sale T-Shirts</h1>
    </div>

    <div class="container mt-5">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col-lg-3 col-md-6 col-sm-6 mb-4 ">
          <card
            imageSrc="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-08-a-300x366.jpg"
            info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nemo, libero placeat eveniet saepe maxime optio ut perferendis"
            Product="shirt" />
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6  mb-4">
          <card
            image-src="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-03-a-300x366.jpg"
            info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nemo, libero placeat eveniet saepe maxime optio ut perferendis"
            Product="shirt" />
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6  mb-4">
          <card
            image-src="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-05-a-300x366.jpg"
            info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nemo, libero placeat eveniet saepe maxime optio ut perferendis"
            Product="shirt" />
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 mb-4">
          <card
            image-src="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-01-a-300x366.jpg"
            info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nemo, libero placeat eveniet saepe maxime optio ut perferendis"
            Product="shirt" />
        </div>
      </div>
    </div>


    <div class="container text-center mt-4" data-aos="fade-up"
     data-aos-anchor-placement="top-center">
      <h1>Reviews</h1>
      <p class="mb-0 text-center">
        “ Very good quality T-shirts and lorem ipsum dolor sit amet, <br>
        consectetur adipiscing elit, sed do eiusmod tempor incididunt <br>
        ut labore et dolore magna aliqua quis ipsum! ”
      </p>
      <div class="d-flex  justify-content-center mt-3 gap-2">
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
      </div>
      <div class="d-flex  justify-content-center">
        JANE OLIVER
      </div>
    </div>





    <div class="container mt-4">
      <div class="row">
        <div class="col-lg-6 position-relative"  data-aos="fade-up-right">
          <img
            src="https://contents.mediadecathlon.com/p2369461/k$20a695777700d3d20679defcf2a77164/t-shirt-durable-100-grey.jpg?format=auto&quality=70&f=768x768"
            alt="" class="img-fluid">
          <!-- Element in the middle -->
          <div class="middle-element text-center">MEN<br>
            <p class="font-sm"> 5 PRODUCTS</p>
          </div>
        </div>
        <div class="col-lg-6 position-relative" data-aos="fade-left">
          <img
            src="https://contents.mediadecathlon.com/p2073348/k$1c0d555588837c40b5412a7eaf8f715b/slim-fit-stretch-cotton-fitness-t-shirt-khaki-print.jpg?format=auto&quality=70&f=768x768"
            alt="" class="img-fluid">
          <!-- Element in the middle -->
          <div class="middle-element text-center">MEN <br>
            <p class="font-sm"> 5 PRODUCTS</p>
          </div>
        </div>
      </div>
    </div>
    <footerContant />
  </div>
</template>

<script setup>
import btncomponet from '@/components/btncomponet.vue';
import card from '../components/card.vue';
import footerContant from '@/components/footer.vue';
import { onMounted } from "vue"
import { useRouter } from 'vue-router'
const router = useRouter();


const clickGotoShirt1 = ()=>{
  router.push({
    path:'/t-shirts-store/product/t-shirt-name-1'
  })
}


import AOS from 'aos';
import 'aos/dist/aos.css';

onMounted(() => {
  AOS.init();
});


</script>

<style scoped>
div i {
  color: orange;
}

.image-overlay {
  position: relative;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  /* Adjust opacity as needed */
}


.wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 20px;

}

.content-top {
  height: 800px;
  background-color: #ffe5ec;
}

.content-top {
  background-color: #ffe5ec;
}

.image-wrapper {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  background-color: #ffe5ec;
  width: 100%;
}

.middle-element {
  position: absolute;
  top: 88%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.15);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.075);
  padding: 10px;
  /* Example padding */
  border-radius: 5px;
  /* Example border radius */
  width: 90%;
  /* Make it full width */
}

.font-sm {
  font-size: 10px;
}


@media (max-width: 576px) {
  .text-white {
    font-size: 10px;
    /* Adjust the font size as needed */
  }

  .fs-6 {
    font-size: 10px;
    /* Adjust the font size as needed */
  }

  .btn-31 {
    font-size: 14px;
    /* Adjust the button font size as needed */
    padding: 10px 20px;
    /* Adjust the button padding as needed */
  }
}
</style>
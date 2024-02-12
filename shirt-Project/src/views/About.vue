<template>
  <div>
    <div class="container mt-3">
      <div class="d-flex justify-content-center">
        <h1>About</h1>
      </div>
      <p class="text-center fs-5">
        Proin eu ante vel mauris molestie dignissim non eget nunc. Integer ac
        massa orci. Suspendisse vulputate semper nunc eget rhoncus.
      </p>
      <p class="text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu ante
        vel mauris molestie dignissim non eget nunc. Integer ac massa orci.
        Suspendisse vulputate semper nunc eget rhoncus. Ut sit amet porta sem,
        interdum tincidunt libero. Nulla vel quam lobortis, varius est
        scelerisque, dapibus nisl.
      </p>
    </div>
    <div class="container-fluid mt-5" data-aos="zoom-in">
      <div class="row">
        <div class="col-12 position-relative">
          <!-- Image -->
          <div class="image-overlay">
            <img src="../assets/image/2e431534b783468b89e1996e93c0b88c.thumbnail.0000000000.jpg" alt=""
              class="img-fluid" />
            <div class="overlay"></div>
          </div>

          <!-- Centered text and button -->
          <div class="position-absolute top-50 start-50 translate-middle text-center">
            <p class="fs-6 text-white">NEW COLLECTION</p>
            <h2 class="text-white">
              Be different in your own way! Find your unique style
            </h2>
          </div>
        </div>
      </div>
    </div>

    <div class="container mt-4 mb-4">
      <div class="row">
        <div class="col-12">
          <div class="row">
            <div class="d-flex justify-content-center  ">
              <h1 class="text-center ">
                How it Started
                <hr>
              </h1>
            </div>
          </div>
          <p class="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit<br>
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

      </div>


      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-12 col-sm-12">
            <h1>
              Vel mauris molestie dignissim
            </h1>
            <b>
              Proin eu ante vel mauris molestie dignissim non eget nunc. Integer ac massa orci. Suspendisse vulputate
              semper nunc eget rhoncus.
            </b>
            <p>
              Praesent vel faucibus ligula. Sed sit amet ipsum eget velit aliquet faucibus. Maecenas et odio id turpis
              sollicitudin pulvinar sit amet vitae augue. Phasellus nec ultricies arcu. Quisque efficitur tellus sit amet
              bibendum molestie. Duis id egestas odio. Phasellus lacinia ex quis faucibus tempor. Sed feugia.
            </p>
          </div>

          <div class="col-lg-6 col-sm-12 col-md-12">
            <img src="../assets//image/istockphoto.jpeg" alt="" class="img-fluid w-100 ">
          </div>
        </div>
      </div>


    </div>
    <footerContant />
  </div>
</template>

<script setup>
import footerContant from "@/components/footer.vue";
import { onMounted } from "vue";

import AOS from "aos";
import "aos/dist/aos.css";

onMounted(() => {
  AOS.init();
});
</script>

<style scoped>
.box1 {
  background: rgb(233, 166, 178);
}

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
</style>
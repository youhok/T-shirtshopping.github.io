<template>
  <div>
    <div class="container mt-3">
      <div class="d-flex justify-content-center">
        <h2>About</h2>
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
            <img
              src="../assets/image/2e431534b783468b89e1996e93c0b88c.thumbnail.0000000000.jpg"
              alt=""
              class="img-fluid"
            />
            <div class="overlay"></div>
          </div>

          <!-- Centered text and button -->
          <div
            class="position-absolute top-50 start-50 translate-middle text-center"
          >
            <p class="fs-6 text-white">NEW COLLECTION</p>
            <h2 class="text-white">
              Be different in your own way! Find your unique style
            </h2>
            <div class="d-grid gap-2 d-md-block">
              <btncomponet text="Shop Collection" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="text-center mt-4 mb-5">
        <h1>How it Started</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>
      <div class="container mt-5">
        <div class="row align-items-center">
          <div
            class="col-lg-6"
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
          >
            <h1>Vel mauris molestie dignissim</h1>
            <p>
              Proin eu ante vel mauris molestie dignissim non eget nunc. Integer
              ac massa orci. Suspendisse vulputate semper nunc eget rhoncus.
            </p>
            <p>
              Praesent vel faucibus ligula. Sed sit amet ipsum eget velit
              aliquet faucibus. Maecenas et odio id turpis sollicitudin pulvinar
              sit amet vitae augue. Phasellus nec ultricies arcu. Quisque
              efficitur tellus sit amet bibendum molestie. Duis id egestas odio.
              Phasellus lacinia ex quis faucibus tempor. Sed feugia.
            </p>
            <btncomponet text="See Whole Collection" />
          </div>
          <div class="col-lg-6" data-aos="zoom-in-right">
            <div class="image-wrapper">
              <!-- Actual image -->
              <img
                src="../assets/image/his.png"
                alt=""
                class="img-fluid w-100"
                data-aos="zoom-in-right"
              />
            </div>
            <img src="../assets//image/collection-03.jpeg" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

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
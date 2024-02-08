<template>
    <div class="container-fluid">
        <div class="container mt-5">
            <div class="row">
                <div class="col-lg-6">
                    <div class="image-container">
                        <img src="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-09-a-600x731.jpg"
                            alt="" class="img-fluid">
                        <button class="zoom-button"><i class="bi bi-zoom-in"></i></button>
                    </div>

                    <div class="container-fluid mt-5">
                        <div class="row">
                            <div class="col-6">
                                <div class="image-container">
                                    <img src="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-01-c.jpg"
                                        alt="" class="img-fluid" style="width: 246px; height: 300;">
                                    <button class="zoom-button"><i class="bi bi-zoom-in"></i></button>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="image-container">
                                    <img src="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-001-b.jpg"
                                        alt="" class="img-fluid" style="width: 246px; height: 300;">
                                    <button class="zoom-button"><i class="bi bi-zoom-in"></i></button>
                                </div>

                            </div>
                            <div class="col-6 mt-4">

                                <div class="image-container">
                                    <img src="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-001-b.jpg"
                                        alt="" class="img-fluid" style="width: 246px; height: 300;">
                                    <button class="zoom-button"><i class="bi bi-zoom-in"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <p>MEN</p>
                    <h1>T-Shirt Name 10</h1>
                    <div class="d-flex gap-2">
                        <b>$33.00 – $36.00</b>
                        <p>& Free Shipping</p>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus interdum eros. In blandit
                        velit a
                        lacus laoreet dictum. Maecenas vel vulputate nulla. Ut nec enim vel tortor aliquet varius.
                    </p>
                    <b>Color</b>
                    <div class="d-flex mt-2 gap-2">
                        <button type="button" class="btn btn-light border border-black">Black</button>
                        <button type="button" class="btn btn-light border border-black">Orange</button>
                        <button type="button" class="btn btn-light border border-black">White</button>
                    </div>
                    <hr>
                    <div>
                        <btncomponet text="Add to cart" />
                    </div>
                    <hr>
                    <div class="d-flex">
                        SKU: N/A Category: Men
                    </div>
                    <hr>
                    <div class="d-flex justify-content-between">
                        <b>Description</b>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-filter-left" viewBox="0 0 16 16">
                                <path
                                    d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
                            </svg>
                        </span>
                    </div>
                    <hr>
                    <div>
                        <p>ABOUT THE PRODUCT</p>
                        <p>Our T-Shirts are lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus
                            nec
                            ullamcorper mattis, pulvinar dapibus leo.</p>
                        <div>
                            <i class="bi bi-record-circle"> 100% Cotton</i>
                            <br>
                            <i class="bi bi-record-circle"> 260gsm</i>
                            <br>
                            <i class="bi bi-record-circle"> Breathable Fabric</i>
                        </div>
                    </div>
                    <hr>
                    <div>
                        <p>SIZE & FIT</p>
                        <i class="bi bi-record-circle"> Model is wearing size M and is 6'1"</i>
                        <br>
                        <i class="bi bi-record-circle"> Standard fit for a relaxed, easy feel</i>
                    </div>
                    <hr>
                    <div>
                        <p>FREE DELIVERY & RETURNS</p>
                        <p>Free standard delivery on orders over $60.</p>
                        <i class="bi bi-record-circle"> You can return your order for any reason, free of charge, within 30
                            days</i>
                        <br>
                        <i class="bi bi-record-circle"> We also offer a Free-of-Charge shipping label</i>
                    </div>
                </div>
            </div>

        </div>
        <footerContant />
    </div>
</template>

<script setup>
import btncomponet from '@/components/btncomponet.vue';
import footerContant from '@/components/footer.vue';

</script>

<style  scoped>
.image-container {
    position: relative;
    display: inline-block;
}

.zoom-button {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 1;
    /* Ensure the button is above the image */
    background-color: transparent;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
}

.zoom-button:hover {
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    /* Change button background color on hover */
}



@media (max-width: 576px) {


    .btn-31 {
        font-size: 14px;
        /* Adjust the button font size as needed */
        padding: 10px 20px;
        /* Adjust the button padding as needed */
    }
}
</style>
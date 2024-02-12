.
<template>
    <div class="container-fluid">
        <div class="row ">
            <!-- Your product cards -->
            <!-- Loop through your items and display them -->
            <div class="col-lg-3 bg-body-secondary" v-if="toggleSidebar.isShowSidebar">
                <div class="d-flex mt-3 justify-content-between">
                    <h5>Shopping Cart</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <hr>
                <div class="card mt-3 mb-3" v-for="(item, index) in cartItems" :key="index">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img :src="item.imgSrc" class="img-fluid h-100" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">{{ item.name }}</h5>
                                <p class="card-text">Price: {{ item.price * item.quantity }} $</p>
                                <p class="card-text">
                                    <checkBox />
                                <div class="d-flex justify-content-between">
                                    Quantity: {{ item.quantity }}
                                    <div class="d-flex gap-2">
                                        <button @click="increaseQuantity(index)"
                                            class="btn btn-sm btn-outline-dark">+</button>
                                        <button @click="decreaseQuantity(index)"
                                            class="btn btn-sm btn-outline-dark">-</button>
                                    </div>

                                </div>

                                </p>
                                <button type="button" @click="buyNow(index)"
                                    class="btn btn-dark w-100 p-3 rounded-0 text-warning">
                                    <span v-if="!loading">Buy now</span>
                                    <span v-else>Loading...</span>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-lg-9">
                <div class="container mt-3">
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                        <div class="col mt-3" v-for="item in items" :key="item.id">

                            <div class="card border-0 rounded-0 shadow" style="width: 18rem;">
                                <img :src="`${item.imgSrc}`" class="img-fluid rounded-0" alt="...">
                                <div class="card-body mt-1 mb-1">
                                    <div class="row">
                                        <div class="col-10">
                                            <h4 class="card-title">{{ item.name }}</h4>
                                            <p class="card-text">
                                                Size: {{ item.size }}
                                            </p>
                                        </div>
                                        <div class="col-2">
                                            <i class="bi bi-bookmark-plus fs-2"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="row align-items-center text-center g-0">
                                    <div class="col-4">
                                        <h5>{{ item.price }} $</h5>
                                    </div>
                                    <div class="col-8">
                                        <button class="btn btn-dark w-100 p-3 rounded-0 text-warning"
                                            @click="addToCart(item)">
                                            <span>Add to Shopping</span><i class="fa fa-shopping-cart"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { toast } from 'vue3-toastify';
import { ToasityConfig } from "../components/config/tostoastify.config"
import checkBox from "@/components/checkBox.vue";
const cartItems = ref([]);
const loading = ref(false);
console.log(cartItems.value)
import { useToggleSidebarStore } from '../stores/toggleSidebar';
const toggleSidebar = useToggleSidebarStore();

const items = ref([
    {
        id: 1,
        name: "Barca Retro Shirt",
        price: 29,
        quantity: 1,
        size: "S M L XL",
        imgSrc: "/src/assets/image/menshirt1.jpg",
    },
    {
        id: 2,
        name: "Blue Shirt , White T-Shirt",
        price: 17,
        quantity: 2,
        size: "S M L XL",
        imgSrc: "/src/assets/image/menshirt2.jpg",
    },
    {
        id: 3,
        name: "Blue Shirt , White T-Shirt",
        price: 22,
        quantity: 3,
        size: "S M L XL",
        imgSrc: "/src/assets/image/menshirt3.jpg",
    },
    {
        id: 4,
        name: "Blue Shirt , White T-Shirt",
        price: 28,
        quantity: 4,
        size: "S M L XL",
        imgSrc: "/src/assets/image/menshirt4.jpg",
    },
    {
        id: 5,
        name: "Blue Shirt , White T-Shirt",
        price: 54,
        quantity: 5,
        size: "S M L XL",
        imgSrc: "/src/assets/image/menshirt5.jpg",
    },

    {
        id: 6,
        name: "Blue Shirt , White T-Shirt",
        price: 35,
        quantity: 6,
        size: "S M L XL",
        imgSrc: "/src/assets/image/menshirt6.jpg",
    },

    {
        id: 7,
        name: "Blue Shirt , White T-Shirt",
        price: 45,
        quantity: 7,
        size: "S M L XL",
        imgSrc: "/src/assets/image/menshirt7.jpg",
    },

    {
        id: 8,
        name: "Blue Shirt , White T-Shirt",
        price: 65,
        quantity: 8,
        size: "S M L XL",
        imgSrc: "/src/assets/image/menshirt8.jpg",
    },


]);


const addToCart = (item) => {
    const existingItemIndex = cartItems.value.findIndex(cartItem => cartItem.id === item.id);

    if (existingItemIndex !== -1) {
        // If item is already in cart, increase its quantity
        cartItems.value[existingItemIndex].quantity++;
    } else {
        // If item is not in cart, add it to cart with quantity 1
        cartItems.value.push({ ...item, quantity: 1 });
    }
};

const increaseQuantity = (index) => {
    cartItems.value[index].quantity++;
};

const decreaseQuantity = (index) => {
    if (cartItems.value[index].quantity > 1) {
        cartItems.value[index].quantity--;
    }
};

const buyNow = (index) => {
    loading.value = true;
    setTimeout(() => {
        toast("Purchase a successfull", ToasityConfig);
        loading.value = false;
        cartItems.value.splice(index, 1)
    }, 1500); // Change the delay as needed
};

</script>

<style scoped>


</style>
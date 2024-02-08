<template>
  <nav class="navbar navbar-expand-lg navbar-Light bg-Light shadow p-3  bg-body-tertiary rounded"
    aria-label="Offcanvas navbar large">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img
          src="../assets/image/minimalist-tshirt-with-initial-letter-t-logo-design-template-simple-tshirt-symbol_393879-922.avif"
          alt="">
        <!-- T-shirt -->
      </router-link>
      
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2"
        aria-controls="offcanvasNavbar2" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end text-bg-Light" tabindex="-1" id="offcanvasNavbar2"
        aria-labelledby="offcanvasNavbar2Label">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbar2Label">T-shirt</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
            <li class="nav-item">
              <router-link  class="nav-link" aria-current="page"  to="/t-shirts-store/contact">CONTACT</router-link>
             
            </li>
            <li class="nav-item">
              <router-link  class="nav-link"  to="/t-shirts-store/contact">ABOUT</router-link>
              
            </li>
            <li class="nav-item">
              <router-link  class="nav-link"  to="/t-shirts-store/menshirt">MEN</router-link>
            </li>

            <li class="nav-item">
              <router-link  class="nav-link"  to="/t-shirts-store/womenshirt">WOMEN</router-link>
           

            </li>

            <li class="nav-item">
<<<<<<< HEAD
              <router-link  class="nav-link"  to="/t-shirts-store/buyTshirt"> BUY T-SHIRT</router-link>
            
=======
              <a class="nav-link " href="#" >
                Employee
              </a>
              
            </li>

            <li class="nav-item">
              <a class="nav-link " href="#" >
                BUY T-SHIRT
              </a>
>>>>>>> 9c641ee99225918e06dcc3b05525e47438f86a37
            </li>
          </ul>


          <form class="d-flex mt-3 mt-lg-0" role="search">
            <button class="btn btn-outline-success w-100" type="submit"><i class="bi bi-bag-heart"></i></button>
          </form>
        </div>
      </div>
    </div>
  </nav>

  
</template>

<script setup>

</script>

<style scoped>
.navbar-brand img {
  height: 50px;
  width: 50px;
  border-radius: 10px;
}

.navbar-nav {
  padding: 0;
  margin: 0;
  display: flex
}

.navbar-nav li {
  list-style: none;
}

.navbar-nav li a {
  text-decoration: none;
  color: #4d4d4d;
  font-size: 15px;
  display: block;
  padding: 5px 10px;
  position: relative;
  text-transform: uppercase;
  margin: 0 10px;
  transition: all .5s;
}

.navbar-nav li a:hover {
  background-color: #e91e63;
  color: white;
}

.navbar-nav li a:before {
  content: '';
  position: absolute;
  bottom: 12px;
  left: 12px;
  width: 12px;
  height: 12px;
  border: 3px solid #e91e63;
  border-width: 0 0 3px 3px;
  opacity: 0;
  transition: all 0.3s;
}

.navbar-nav li a:hover:before {
  opacity: 1;
  bottom: -7px;
  left: -7px;
}

.navbar-nav li a:after {
  content: '';
  position: absolute;
  top: 12px;
  right: 12px;
  width: 12px;
  height: 12px;
  border: 3px solid #e91e63;
  border-width: 3px 3px 0 0;
  opacity: 0;
  transition: all 0.3s;
}

.navbar-nav li a:hover:after {
  opacity: 1;
  top: -7px;
  right: -7px;
}</style>
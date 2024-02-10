<template>
  <div>
    <div class="container mt-5">
      <h1 class="text-center bold">Contact</h1>
      <hr class="mx-auto bold-hr" style="width: 60px" />
      <p class="text-center bold">
        Proin eu ante vel mauris molestie dignissim non eget nunc. Integer ac
        massa orci. Suspendisse vulputate semper nunc eget rhoncus.
      </p>
      <div class="row edit-row">
        <div class="col-md-6 bg-yellow">
          <h1 class="grow">Get in touch</h1>
          <p class="small">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id leo
            tempor, congue justo at, lobortis orci.
          </p>
          <p>
            <i class="bi bi-compass"></i> <strong>Address:</strong> #123 BTB
            AnglungVil 234
          </p>
          <p>
            <i class="bi bi-envelope"></i>
            <strong>Email:</strong> samoeurnart6@gmail.com
          </p>
          <p>
            <i class="bi bi-telephone"></i>
            <strong>Phone Number:</strong> 098-776-667
          </p>
        </div>
        <div class="col-md-6 bg-white">
          <form>
            <div class="form-group">
              <!-- <label for="firstName">First Name</label> -->
              <label for=""></label>
              <input
                type="text"
                class="form-control"
                id="firstName"
                placeholder="Enter your first name"
              />
            </div>
            <div class="form-group">
              <!-- <label for="lastName">Last Name</label> -->
              <label for=""></label>
              <input
                type="text"
                class="form-control"
                id="lastName"
                placeholder="Enter your last name"
              />
            </div>
            <div class="form-group">
              <!-- <label for="email">Email address</label> -->
              <label for=""></label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div class="form-group">
              <label for=""></label>
              <!-- <label for="message">Message</label> -->
              <textarea
                class="form-control"
                id="message"
                rows="3"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button type="submit" class="btn custom-btn">Send</button>
          </form>
        </div>
      </div>
    </div>
    <div class="text-center map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1942.9908148649586!2d103.22744516201021!3d13.10035025230106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1skm!2skh!4v1707354411847!5m2!1skm!2skh"
        width="800"
        height="600"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <footercontents />
  </div>
</template>

<script setup>
import footercontents from "../components/footer.vue";
</script>

<style  scoped>
.footer {
  background-color: #f9ebea;
}
.edit-row {
  margin-top: 50px;
}
.custom-btn {
  background-color: black;
  margin-top: 5px;
  margin-bottom: 5px;
  color: white;
}
.bold-hr {
  border-style: solid; /* You can change this to dotted, dashed, etc. */
  border-width: 1.5px; /* Adjust the thickness as needed */
  border-color: black;
}
.bold {
  font-weight: bold;
}
.small {
  font-size: 13px;
  margin-top: 15px;
}
.grow {
  margin-top: 20px;
}
.bg-yellow {
  background-color: #f9ebea;
  padding: 20px;
}
.bg-white {
  background-color: whitesmoke;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
.map-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio (height: 56.25% of width) */
  height: 0;
  overflow: hidden;
  margin: 40px;
}

.map-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
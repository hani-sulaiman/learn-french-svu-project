<template>
  <div class="container-xxl bg-white p-0">

    <div id="spinner"
      class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
      <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
      <router-link to="/" class="navbar-brand">
        <h1 class="m-0 text-primary"><img src="/assets/img/logo-bg.png" alt=""></h1>
      </router-link>
      <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav mx-auto">
          <router-link to="/" class="nav-item nav-link">Home</router-link>
          <router-link to="/classes" class="nav-item nav-link">Classes</router-link>
          <router-link to="/about" class="nav-item nav-link">About Us</router-link>
          <router-link to="/contact" class="nav-item nav-link">Contact Us</router-link>
        </div>
        <router-link to="/classes" class="btn btn-primary rounded-pill px-3 d-none d-lg-block">Let's Start<i
            class="fa fa-arrow-right ms-3"></i></router-link>
      </div>
    </nav>

    <router-view />

    <div class="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
      <div class="container py-5">
        <div class="row g-5">
          <div class="col-lg-3 col-md-6">
            <h3 class="text-white mb-4">Get In Touch</h3>
            <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
            <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+012 345 67890</p>
            <p class="mb-2"><i class="fa fa-envelope me-3"></i>info@example.com</p>
            <div class="d-flex pt-2">
              <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-twitter"></i></a>
              <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-facebook-f"></i></a>
              <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-youtube"></i></a>
              <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <h3 class="text-white mb-4">Quick Links</h3>
            <a class="btn btn-link text-white-50" href="">About Us</a>
            <a class="btn btn-link text-white-50" href="">Contact Us</a>
            <a class="btn btn-link text-white-50" href="">Our Services</a>
            <a class="btn btn-link text-white-50" href="">Privacy Policy</a>
            <a class="btn btn-link text-white-50" href="">Terms & Condition</a>
          </div>
          <div class="col-lg-3 col-md-6">
            <h3 class="text-white mb-4">Photo Gallery</h3>
            <div class="row g-2 pt-2">
              <div class="col-4">
                <img class="img-fluid rounded bg-light p-1" src="/assets/img/classes-1.webp" alt="">
              </div>
              <div class="col-4">
                <img class="img-fluid rounded bg-light p-1" src="/assets/img/classes-2.webp" alt="">
              </div>
              <div class="col-4">
                <img class="img-fluid rounded bg-light p-1" src="/assets/img/classes-3.webp" alt="">
              </div>
              <div class="col-4">
                <img class="img-fluid rounded bg-light p-1" src="/assets/img/classes-4.webp" alt="">
              </div>
              <div class="col-4">
                <img class="img-fluid rounded bg-light p-1" src="/assets/img/classes-5.webp" alt="">
              </div>
              <div class="col-4">
                <img class="img-fluid rounded bg-light p-1" src="/assets/img/classes-6.webp" alt="">
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <h3 class="text-white mb-4">Newsletter</h3>
            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <div class="position-relative mx-auto" style="max-width: 400px;">
              <input class="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email">
              <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="copyright">
          <div class="row">
            <div class="col-md-6 text-center text-md-end">
              <div class="footer-menu">
                <a href="">Home</a>
                <a href="">Cookies</a>
                <a href="">Help</a>
                <a href="">FQAs</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default{
  mounted() {
    // Dynamically add the script tag to the page
    const script = document.createElement('script');
    script.src = '/assets/js/main.js'; // Adjust path if necessary
    script.async = true;
    script.onload = () => {
      console.log('main.js loaded successfully');
      // If needed, you can call functions from the loaded script here
    };
    script.onerror = (err) => {
      console.error('Failed to load main.js', err);
    };
    document.head.appendChild(script); // Add the script to the document head
  },
}
</script>
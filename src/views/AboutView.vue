<template>
  <!-- Page Header Start -->
  <div class="container-xxl py-5 page-header position-relative mb-5">
      <div class="container py-5">
          <h1 class="display-2 text-white animated slideInDown mb-4">À Propos de Nous</h1>
          <nav aria-label="breadcrumb animated slideInDown">
              <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="#">Accueil</a></li>
                  <li class="breadcrumb-item"><a href="#">Pages</a></li>
                  <li class="breadcrumb-item text-white active" aria-current="page">À Propos de Nous</li>
              </ol>
          </nav>
      </div>
  </div>
  <!-- Page Header End -->

  <!-- About Start -->
  <div class="container-xxl py-5">
      <div class="container">
          <div class="row g-5 align-items-center">
              <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                  <h1 class="mb-4">En Savoir Plus Sur Notre Travail et Nos Activités Culturelles</h1>
                  <p>
                      Nous sommes dédiés à enrichir les vies grâce à des activités éducatives et culturelles. Notre mission
                      est de créer un environnement où les enfants peuvent apprendre, grandir et s’épanouir.
                  </p>
                  <p class="mb-4">
                      Avec une équipe passionnée et des installations modernes, nous proposons des programmes
                      variés pour inspirer et éduquer les générations futures. Rejoignez-nous pour explorer et célébrer la
                      richesse de la diversité culturelle.
                  </p>
                  <div class="row g-4 align-items-center">
                      <div class="col-sm-6">
                          <a class="btn btn-primary rounded-pill py-3 px-5" href="">En Savoir Plus</a>
                      </div>
                      <div class="col-sm-6">
                          <div class="d-flex align-items-center">
                              <img
                                  class="rounded-circle flex-shrink-0"
                                  src="/assets/img/user.webp"
                                  alt=""
                                  style="width: 45px; height: 45px;"
                              />
                              <div class="ms-3">
                                  <h6 class="text-primary mb-1">Jean Dupont</h6>
                                  <small>PDG & Fondateur</small>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-lg-6 about-img wow fadeInUp" data-wow-delay="0.5s">
                  <div class="row">
                      <div class="col-12 text-center">
                          <img
                              class="img-fluid w-75 rounded-circle bg-light p-3"
                              src="/assets/img/about-1.webp"
                              alt="Notre Mission"
                          />
                      </div>
                      <div class="col-6 text-start" style="margin-top: -150px;">
                          <img
                              class="img-fluid w-100 rounded-circle bg-light p-3"
                              src="/assets/img/about-2.webp"
                              alt="Nos Activités Culturelles"
                          />
                      </div>
                      <div class="col-6 text-end" style="margin-top: -150px;">
                          <img
                              class="img-fluid w-100 rounded-circle bg-light p-3"
                              src="/assets/img/about-3.webp"
                              alt="Notre Engagement"
                          />
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <!-- About End -->
</template>

<script>
export default {
  name: "AboutView",
  mounted() {
      const script = document.createElement("script");
      script.src = "/assets/js/main.js";
      script.async = true;
      document.head.appendChild(script);
  },
};
</script>

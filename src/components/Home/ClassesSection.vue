<template>
    <!-- Classes Start -->
    <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
                <h1 class="mb-3">Nos Classes</h1>
                <p>Découvrez nos classes exceptionnelles conçues pour engager et éduquer les enfants de manière ludique et interactive.</p>
            </div>
            <div class="row g-4">
                <div
                    v-for="classItem in classes"
                    :key="classItem.id"
                    class="col-lg-4 col-md-6 wow fadeInUp"
                    :data-wow-delay="classItem.delay"
                >
                    <div class="classes-item">
                        <div class="bg-light rounded-circle w-75 mx-auto p-3">
                            <img class="img-fluid rounded-circle" :src="classItem.classImage" :alt="classItem.className" />
                        </div>
                        <div class="bg-light rounded p-4 pt-5 mt-n5">
                            <a class="d-block text-center h3 mt-3 mb-4" href="">{{ classItem.className }}</a>
                            <div class="d-flex align-items-center justify-content-between mb-4">
                                <div class="d-flex align-items-center">
                                    <img
                                        class="rounded-circle flex-shrink-0"
                                        src="/assets/img/user.webp"
                                        alt="Enseignant"
                                        style="width: 45px; height: 45px;"
                                    />
                                    <div class="ms-3">
                                        <h6 class="text-primary mb-1">{{ classItem.Teacher }}</h6>
                                        <small>Enseignant</small>
                                    </div>
                                </div>
                                <span class="bg-primary text-white rounded-pill py-2 px-3" href="">
                                    {{ classItem.price }}
                                </span>
                            </div>
                            <div class="row g-1">
                                <div class="col-4">
                                    <div class="border-top border-3 border-primary pt-2">
                                        <h6 class="text-primary mb-1">Âge :</h6>
                                        <small>{{ classItem.age }}</small>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="border-top border-3 border-success pt-2">
                                        <h6 class="text-success mb-1">Heure :</h6>
                                        <small>{{ classItem.time }}</small>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="border-top border-3 border-warning pt-2">
                                        <h6 class="text-warning mb-1">Capacité :</h6>
                                        <small>{{ classItem.Capacity }}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Classes End -->
</template>

<script>
import classesData from "@/data/class.json"; // Fichier JSON contenant les données des classes

export default {
    name: "ClassesView",
    data() {
        return {
            classes: [], // Initialisation du tableau des classes
        };
    },
    mounted() {
        // Chargement des données depuis JSON
        this.classes = classesData;
    },
};
</script>

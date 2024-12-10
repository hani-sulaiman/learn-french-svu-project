<template>
    <div>
        <!-- Page Header -->
        <div class="container-xxl py-5 page-header position-relative mb-5">
            <div class="container py-5">
                <h1 class="display-2 text-white animated slideInDown mb-4">Classes</h1>
                <nav aria-label="breadcrumb animated slideInDown">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item"><a href="#">Pages</a></li>
                        <li class="breadcrumb-item text-white active" aria-current="page">Classes</li>
                    </ol>
                </nav>
            </div>
        </div>
        <!-- Classes Start -->
        <div class="container-xxl py-5">
            <div class="container">
                <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
                    <h1 class="mb-3">School Classes</h1>
                    <p>Browse through our exciting and educational classes for all ages and interests.</p>
                </div>
                <div class="row g-4">
                    <!-- Dynamic Class Cards -->
                    <div
                        v-for="classItem in classes"
                        :key="classItem.id"
                        class="col-lg-4 col-md-6 wow fadeInUp"
                        data-wow-delay="0.1s"
                    >
                        <div class="classes-item">
                            <div class="bg-light rounded-circle w-75 mx-auto p-3">
                                <img class="img-fluid rounded-circle" :src="classItem.classImage" :alt="classItem.className" />
                            </div>
                            <div class="bg-light rounded p-4 pt-5 mt-n5">
                                <RouterLink class="d-block text-center h3 mt-3 mb-4" :to="{ name: 'Class', params: { id: classItem.id } }">{{ classItem.className }}</RouterLink>
                                <div class="d-flex align-items-center justify-content-between mb-4">
                                    <div class="d-flex align-items-center">
                                        <img
                                            class="rounded-circle flex-shrink-0"
                                            src="/assets/img/user.webp"
                                            alt="Teacher"
                                            style="width: 45px; height: 45px;"
                                        />
                                        <div class="ms-3">
                                            <h6 class="text-primary mb-1">{{ classItem.Teacher }}</h6>
                                            <small>Teacher</small>
                                        </div>
                                    </div>
                                </div>
                                <div class="row g-1">
                                    <div class="col-4">
                                        <div class="border-top border-3 border-primary pt-2">
                                            <h6 class="text-primary mb-1">Age:</h6>
                                            <small>{{ classItem.age }}</small>
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="border-top border-3 border-success pt-2">
                                            <h6 class="text-success mb-1">Time:</h6>
                                            <small>{{ classItem.time }}</small>
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="border-top border-3 border-warning pt-2">
                                            <h6 class="text-warning mb-1">Capacity:</h6>
                                            <small>{{ classItem.Capacity }}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End Dynamic Class Cards -->
                </div>
            </div>
        </div>
        <!-- Classes End -->
    </div>
</template>

<script>
import classesData from "@/data/class.json"; // Import the JSON file

export default {
    name: "ClassesView",
    data() {
        return {
            classes: [], // Initialize classes array
        };
    },
    mounted() {
        const script = document.createElement("script");
        script.src = "/assets/js/main.js";
        script.async = true;
        document.head.appendChild(script);

        // Load classes data
        this.classes = classesData;
    },
};
</script>

<style scoped>
.classes-item {
    transition: 0.3s;
}

.classes-item:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
}
</style>

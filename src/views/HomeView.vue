<template>
   <CarouselSection/>
   <FacilitiesSection/>
   <AboutSection/>
   <CtaSection/>
   <ClassesSection/>
   <TestimonialSection/>
</template>

<script>

import CarouselSection from '@/components/Home/CarouselSection.vue';
import FacilitiesSection from '@/components/Home/FacilitiesSection.vue';
import AboutSection from '@/components/Home/AboutSection.vue';
import CtaSection from '@/components/Home/CtaSection.vue';
import ClassesSection from '@/components/Home/ClassesSection.vue';
import TestimonialSection from '@/components/Home/TestimonialSection.vue';
export default {
  name: 'HomeView',
  components: {
    CarouselSection,FacilitiesSection,AboutSection,CtaSection,ClassesSection,TestimonialSection
  },
  mounted() {
    const script = document.createElement('script');
    script.src = '/assets/js/main.js'; 
    script.async = true;
    document.head.appendChild(script); 
  },
}

</script>

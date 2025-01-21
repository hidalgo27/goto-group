<script lang="ts" setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from "vue3-carousel"

const breakpoints = {
  // 500px and up
  350: {
    itemsToShow: 2,
    snapAlign: 'start',
  },
  // 700px and up
  700: {
    itemsToShow: 3,
    snapAlign: 'center',
  },
  // 1024 and up
  1024: {
    itemsToShow: 4,
    snapAlign: 'start',
  },
}
</script>

<template>
  <section class="bg-secondary  bg-opacity-10 py-6">
    <div class="container">
      <carousel ref="carouselRef" :wrap-around="true" :breakpoints="breakpoints">
        <slide :key="1">
          <div class="text-center">
            <nuxt-img src="/icons/tag-sale.svg" class="mx-auto h-12 mb-2"></nuxt-img>
            <h3 class="font-semibold">Incomparable deals & rates</h3>
            <h4 class="text-sm">Extraordinary prices for your upcoming vacation experience.</h4>
          </div>
        </slide>
        <slide :key="2">
          <div class="text-center">
            <nuxt-img src="/icons/call-people.svg" class="mx-auto h-12 mb-2"></nuxt-img>
            <h3 class="font-semibold">24/7 Customer Service</h3>
            <h4 class="text-sm">Our travel specialists are just a call away, every day of the week.</h4>
          </div>
        </slide>
        <slide :key="3">
          <div class="text-center">
            <nuxt-img src="/icons/cloud-check.svg" class="mx-auto h-12 mb-2"></nuxt-img>
            <h3 class="font-semibold">Thousands of testimonials</h3>
            <h4 class="text-sm">Our commitment to excellence is reflected in every positive review.</h4>
          </div>
        </slide>
        <slide :key="4">
          <div class="text-center">
            <nuxt-img src="/icons/dollar-circle.svg" class="mx-auto h-12 mb-2"></nuxt-img>
            <h3 class="font-semibold">No Hidden fees</h3>
            <h4 class="text-sm">Extraordinary prices for your upcoming vacation experience.</h4>
          </div>
        </slide>
      </carousel>
    </div>
  </section>
</template>
<style></style>
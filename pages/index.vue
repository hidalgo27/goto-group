<script setup lang="ts">
const { $gsap } = useNuxtApp()
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {usePackageStore} from "~/stores/packages";
import PopularPackages from "~/components/packages/PopularPackages.vue";

const packageStore = usePackageStore()

const listPackages = ref([])

const loading = ref(true)
const video = ref()
const { onLoaded } = useScriptVimeoPlayer()

const getPackage = async () => {
  const res:any = await packageStore.getPackageTop()
  listPackages.value = res
}


// Registra el plugin de ScrollTrigger
$gsap.registerPlugin(ScrollTrigger);
let player: any
onMounted(async () => {
  onLoaded(({ Vimeo }) => {
    player = new Vimeo.Player(video.value, {
      id: 1028540009,
      autoplay: true,
      // background: true,
      // transparent: true,
      loop: true,
      controls: false,
      // responsive: true,
      // autopause: true,
      muted: true
    })
    player.on('loaded', () => {
      loading.value = false // Oculta el indicador de carga cuando el video está listo
    })
  })

  await getPackage()

  const parallaxImages = document.querySelectorAll(".parallax-image");

  parallaxImages.forEach((image) => {
    $gsap.to(image, {
      yPercent: -10,
      ease: "none",
      scrollTrigger: {
        trigger: image.parentElement,  // Usa el contenedor padre como trigger
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });

});


</script>

<template>
  <section>
    <div class="relative w-full h-screen 2xl:h-[70vh] px-3">
      <div class="overflow-hidden h-full relative rounded-md">
      <div class="mask gradient-cicle-gray items-center flex justify-center">
        <div v-if="loading" class="mt-40 text-center">
<!--          Cargando ..-->
        </div>
      </div>
      <div v-show="!loading" ref="video" loading="lazy" class="vimeo-wrapper"></div>
      <div class="relative z-10 flex items-center  w-full h-full text-center">
        <div class=" container ">
          <h1 class="text-white/80 drop-shadow-[0_0_1px_rgba(255,255,255,0.5)] leading-tight text-5xl 2xl:text-6xl tracking-wide font-semibold font-playfair-display">
            Start your unforgettable journey with us.</h1>
          <p class="text-white text-xl 2xl:text-lg tracking-widest font-light mt-5 ">The best travel for your journey begins now</p>
        </div>
      </div>
      </div>
    </div>
  </section>


  <section class="container mb-6 mt-28">
    <div class="grid grid-cols-12 gap-6 items-center">
      <div class="col-span-12 text-center">

        <h2 class="text-lg font-light">Top Trip Experiences</h2>
        <div class="border-title mb-2 mt-4 mx-auto"></div>
          <h1 class="font-semibold text-5xl my-6 font-playfair-display tracking-wide">Peru travel packages</h1>
      </div>

    </div>
  </section>


  <PopularPackages :listPackages="listPackages"></PopularPackages>

  <section class="container mt-6 text-right">
    <nuxt-link to="/peru-travel-packages" class="btn-primary-outline">View more</nuxt-link>
  </section>


</template>
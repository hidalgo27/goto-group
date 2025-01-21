<script setup lang="ts">


const loading = ref(true)
const video = ref()
const { onLoaded } = useScriptVimeoPlayer()



let player: any

onMounted(async () => {
  onLoaded(({ Vimeo }) => {
    player = new Vimeo.Player(video.value, {
      id: 1049087903,
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
})
</script>

<template>
  <section>
    <div class="relative w-full h-screen 2xl:h-[80vh] px-3">
      <div class="overflow-hidden h-full relative rounded-md">
        <div class="mask gradient-cicle-gray items-center flex justify-center">
          <div v-if="loading" class="mt-40 text-center">
                      Cargando ..
          </div>
        </div>
        <div v-show="!loading" ref="video" loading="lazy" class="vimeo-wrapper"></div>
        <div class="relative z-10 flex items-center  w-full h-full text-center">
          <div class=" container ">
            <h1 class="text-white/80 drop-shadow-[0_0_1px_rgba(255,255,255,0.5)] leading-tight text-5xl 2xl:text-5xl tracking-wide font-semibold font-playfair-display">
              Peru Destinations
            </h1>
            <p class="text-white text-xl 2xl:text-lg tracking-widest font-light mt-5 ">Unveil the Wonders of a Journey Through History and Nature.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
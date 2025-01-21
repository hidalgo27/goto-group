<script lang="ts" setup>
const items = ref([
  {
    title: "We Provide the Best Choice For You",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in form.",
  },
  {
    title: "We Provide the Best Choice For You",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in form.",
  },
  {
    title: "We Provide the Best Choice For You",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in form.",
  },
  {
    title: "We Provide the Best Choice For You",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in form.",
  },
]);
</script>

<template>
  <div class="container space-y-12">

    <div class="text-center">
      <div class="border-title mb-6 mt-4 mx-auto"></div>
      <h2
        class="text-gray-900 drop-shadow-[0_0_1px_rgba(255,255,255,0.5)] leading-tight text-5xl 2xl:text-5xl tracking-wide font-semibold font-playfair-display">
        Why you Should <span class="">choose Us</span>
      </h2>
      <p class="mt-4 tracking-widest font-light text-lg">
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
        form,
        injected.
      </p>
    </div>

    <div class="">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div class="w-full md:order-last">
          <img src="/images/hotel.jpg" alt="Image" class="w-full h-auto rounded-lg object-cover " />
        </div>
        <div class="space-y-12">
          <div v-for="(item, index) in items" :key="index" class="flex items-start space-x-4 relative">
            <div
              class="absolute left-8 transform -translate-x-1/2 -z-10 h-full border-l-2 border-dashed border-gray-300">
            </div>
            <div class="relative w-16">
              <div class=" font-bold text-xs text-gray-600">
                <span class="rounded-full w-8 h-8 flex items-center justify-center text-white bg-gray-500">
                  {{ index + 1 }}
                </span>
              </div>
            </div>

            <div class="flex-1">
              <h3 class="text-xl font-playfair-display font-semibold text-gray-800">
                {{ item.title }}
              </h3>
              <p class="mt-3 font-light">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style></style>
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
  <div class="container mx-auto px-4 space-y-12">

    <div class="text-center">
      <h2 class="text-4xl font-bold text-gray-900">
        Why you Should <span class="text-orange-500">choose Us</span>
      </h2>
      <p class="mt-4 text-gray-500 text-lg">
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
        form,
        injected.
      </p>
    </div>

    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div class="w-full">
          <img src="/images/hotel.jpg" alt="Image" class="w-full h-auto shadow-lg object-cover" />
        </div>
        <div class="space-y-6">
          <div v-for="(item, index) in items" :key="index" class="flex items-start space-x-4">
            <div class="relative w-16 text-center">
              <div class="py-2 font-bold text-xs text-gray-600">
                <span class="rounded-full w-8 h-8 flex items-center justify-center text-white bg-gray-500">
                  {{ index + 1 }}
                </span>
              </div>
            </div>
            <div class="flex-1">
              <h3 class="text-lg font-semibold text-gray-800">
                {{ item.title }}
              </h3>
              <p class="text-sm text-gray-600">
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
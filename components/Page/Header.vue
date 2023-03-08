<script setup lang="ts">
 defineProps<{
    title ?: string
 }>()
</script>

<template>
    <main>
      <section  class="hero bg-gray-100 py-10">
        <div class="container flex items-center">

            <h1 v-if="title" class="text-4xl font-bold"> {{ title }}</h1>
           
            <!-- image -->
          <slot />
        </div>
    </section> 
</main>
</template>
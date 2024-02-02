<template>
  <div class="flex items-center px-8 py-4 text-5xl gap-x-6">
    <nuxt-icon :name="`lines/${props.line}`" filled class="text-7xl" />
    <nuxt-icon name="destinations/airport" filled class="text-7xl -mx-4" v-if="airport" />
    <b>{{ direction }}</b>
    <span class="grow"></span>
    <div class="text-right shrink-0">
      <p><b>{{ next }}</b> min</p>
      <small>{{ following }} min</small>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  line: string
  direction: string
  next: string|number
  following: string|number
  airport?: boolean
}>()
</script>

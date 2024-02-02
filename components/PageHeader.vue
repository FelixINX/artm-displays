<template>
  <div class="flex items-center gap-x-6 px-8 h-32 text-5xl -mb-6">
    <nuxt-icon :name="`modes/${mode}`" filled class="text-7xl" v-for="mode in props.mode"/>
    <b><slot /></b>
    <span class="grow"></span>
    <b>{{ time }}</b>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps(['mode'])  

const currentTime = ref(new Date())
  const updateTime = () => {
    currentTime.value = new Date()
  }

  const time = computed(() => [currentTime.value.getHours(), ':', `${currentTime.value.getMinutes() < 10 ? '0': ''}`, currentTime.value.getMinutes()].join(''))

  var interval; 

  onMounted(() => {
    interval = setInterval(updateTime, 500)
  })
  onBeforeMount(() => clearInterval(interval))
</script>
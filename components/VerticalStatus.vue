<template>
  <div class="px-8 py-4 flex gap-x-4 text-5xl" :class="[itemsAlignement]">
      <nuxt-icon :name="icon" filled class="text-7xl" />
      <div>
        <b>{{ title }}</b>
        <ul class="text-3xl">
          <li v-for="route in props.routesOut">{{ route[0] }} <> {{ route[1] }}</li>
        </ul>
      </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  type: String
  routesOut: string[][]
}>()

const itemsAlignement = ref(props.routesOut.length ? 'items-start' : 'items-center')

const title = computed(() => {
  let title
  if (props.type === 'escalator') { 
    switch(props.routesOut.length) {
      case 0:
        title = 'Service normal des escaliers mécaniques'
        break
      case 1:
        title = 'Escalier mécanique hors service'
        break
      default:
        title = 'Escaliers mécaniques hors service'
        break
    }
  } else {
    switch(props.routesOut.length) {
      case 0:
        title = 'Service normal des ascenseurs'
        break
      case 1:
        title = 'Ascenseur hors service'
        break
      default:
        title = 'Ascenseurs hors service'
        break
    }
  }
  return title
})

const icon = computed(() => {
  if (props.routesOut.length === 0) {
    return `${props.type}/in`
  }
  
  if (props.type === 'escalator') {
    return 'escalator/warning'
  }

  return 'elevator/out'
})
</script>
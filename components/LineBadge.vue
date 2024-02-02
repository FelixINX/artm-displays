<template>
  <div class="w-24 h-24 flex items-center justify-center text-6xl font-bold" :class="css">
    {{ props.line }}
  </div>
</template>

<script setup>
const props = defineProps(['line'])

const css = computed(() => {
  const classes = []
  const isRem = isNaN(props.line)
  const isTrain = parseInt(props.line) > 10
  const remBase = `${props.line}`.charAt(0).toLowerCase()
  
  if (isRem) {
    classes.push([`border-line-${remBase}`, 'border-2'])
  } else {
    classes.push(`bg-line-${props.line}`)
  }
  
  if (isTrain) {
    classes.push('rounded-lg')
  } else {
    classes.push('rounded-full')
  }
  
  return classes
})
</script>
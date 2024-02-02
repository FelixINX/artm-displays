<template>
  <div class="grid grid-cols-3" v-if="show">
    <div class="pl-8 py-4 leading-[3rem]">{{ title }}</div>
    <div class="flex gap-4 pr-8 py-4 text-5xl flex-wrap col-span-2" v-if="isNormal" :class="[props.fixBorder && '!border-t-0']">
      <nuxt-icon v-for="line in props.lines" :name="`lines/${line}`" filled />
    </div>
    <div class="flex gap-4 pr-8 py-4 flex-col col-span-2" :class="[props.fixBorder && '!border-t-0']" v-else>
      <div class="flex gap-4 items-start" v-for="status in props.statuses">
        <nuxt-icon :name="`lines/${status.line}`" filled class="text-5xl" />
        <div>
          <b>{{ status.route[0] }} <> {{ status.route[1] }}</b>
          <p>{{ status.note }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface LineStatus {
  line: string
  route: string[]
  note: string
}
const props = defineProps<{
  title: string
  lines?: string[]
  statuses?: LineStatus[]
  fixBorder?: boolean
}>()

const isNormal = ref(props.title === 'Service normal')
const show = ref(props.lines?.length || props.statuses?.length)
</script>

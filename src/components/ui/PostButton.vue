<script setup lang="ts">
interface Props {
  disabled?: boolean;
}
defineProps<Props>();
const emit = defineEmits(["clickHandler"]);
</script>

<template>
  <button
    @click="$emit('clickHandler')"
    :disabled="disabled ?? false"
    class="bg-main-blue text-white px-[1rem] py-[.7rem] text-[1.3rem] rounded-[4px] disabled:bg-gray-2"
  >
    <slot></slot>
  </button>
</template>

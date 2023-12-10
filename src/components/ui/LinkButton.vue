<script setup lang="ts">
interface Props {
  href: string;
}

defineProps<Props>();
</script>

<template>
  <a
    :href="href"
    class="inline-block bg-main-blue text-white px-[1rem] py-[.7rem] text-[1.3rem] rounded-[4px]"
  >
    <slot></slot>
  </a>
</template>

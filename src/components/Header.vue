<script setup lang="ts">
import Logo from "@assets/icon/logo.svg";
</script>

<template>
  <div class="border border-gray-1 h-[72px]">
    <div class="container flex items-center m-auto h-full">
      <h1 class="flex items-center text-black-1 font-bold text-[2rem]">
        <a href="/"><img :src="Logo.src" alt="logo" /></a>
        <a href="/">ToDoList</a>
      </h1>
    </div>
  </div>
</template>

<style scoped></style>

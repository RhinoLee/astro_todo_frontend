<script setup lang="ts">
import LinkButton from "@components/ui/LinkButton.vue";
import deleteIcon from "@assets/icon/delete_icon.svg";
import { getTodosAPI } from "@services/todo/index";
import type { TodoResSchema } from "@type/todo";

interface Props {
  todos: TodoResSchema[];
}

defineProps<Props>();

async function updateList() {
  try {
    await getTodosAPI();
  } catch (err) {
    console.log(err);
  }
}
</script>

<template>
  <div class="m-auto w-[800px]">
    <div class="border-b border-gray-1 mb-[1.5rem]">
      <LinkButton href="/create">新增</LinkButton>
    </div>
    <div class="table-fixed w-full">
      <table class="w-full">
        <thead>
          <tr>
            <th class="w-[30px]"></th>
            <th></th>
            <th class="w-[24px]"></th>
          </tr>
        </thead>
        <tbody class="text-[1.3rem] text-black-1">
          <tr v-for="todo in todos" :key="todo.id" class="h-[28px]">
            <td class="flex items-center justify-center w-[30px]">
              <input
                type="checkbox"
                :checked="Boolean(todo.status)"
                class="w-[20px] h-[20px] cursor-pointer"
              />
            </td>
            <td class="px-[1.3rem] cursor-pointer">
              <a :href="`/todos/todo/${todo.id}`" class="block">{{
                todo.title
              }}</a>
            </td>
            <td class="flex items-center justify-center w-[24px]">
              <img :src="deleteIcon.src" class="w-[18px]" alt="delete" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

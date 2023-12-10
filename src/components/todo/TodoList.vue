<script setup lang="ts">
import LinkButton from "@components/ui/LinkButton.vue";
import deleteIcon from "@assets/icon/delete_icon.svg";
import {
  getTodosAPI,
  deleteTodoAPI,
  updateTodoStatusAPI,
} from "@services/todo/index";
import type { TodoResSchema } from "@type/todo";
import { ref, watch, type Ref } from "vue";

interface Props {
  todos: TodoResSchema[];
}

const props = defineProps<Props>();
const todos: Ref<TodoResSchema[]> = ref([]);

async function updateList() {
  try {
    const result = await getTodosAPI();
    todos.value = result.data.data;
  } catch (err) {
    console.log(err);
  }
}

async function deleteHandler(id: number) {
  try {
    await deleteTodoAPI(id);
    await updateList();
  } catch (err) {
    console.log(err);
  }
}

async function checkHandler(status: boolean, id: number) {
  const statusNum = status ? 1 : 0;

  try {
    await updateTodoStatusAPI({ status: statusNum }, id);
    await updateList();
  } catch (err) {
    console.log(err);
  }
}

watch(
  () => props.todos,
  (val) => {
    todos.value = val;
  },
  { immediate: true },
);
</script>

<template>
  <div class="m-auto w-[800px]">
    <div class="flex justify-end border-b border-gray-1 mb-[1.5rem]">
      <LinkButton href="/create">新增</LinkButton>
    </div>
    <div class="table-fixed w-full">
      <table>
        <thead>
          <tr>
            <th class="w-[30px]"></th>
            <th></th>
            <th class="w-[24px]"></th>
          </tr>
        </thead>
        <tbody class="flex flex-wrap w-[800px] text-[1.3rem] text-black-1">
          <tr
            v-for="todo in todos"
            :key="todo.id"
            class="flex py-[.3rem] w-full h-[3rem] hover:bg-gray-3"
          >
            <td class="flex items-center justify-center w-[30px]">
              <input
                type="checkbox"
                @change="
                  ($event) =>
                    checkHandler(
                      ($event.target as HTMLInputElement).checked,
                      todo.id,
                    )
                "
                :checked="Boolean(todo.status)"
                class="w-[20px] h-[20px] cursor-pointer"
              />
            </td>
            <td class="flex-1 flex items-center px-[1.3rem]">
              <a
                :href="`/todos/todo/${todo.id}`"
                class="block w-full cursor-pointer"
                >{{ todo.title }}</a
              >
            </td>
            <td class="flex items-center justify-center w-[24px]">
              <img
                :src="deleteIcon.src"
                @click="deleteHandler(todo.id)"
                class="w-[18px] cursor-pointer"
                alt="delete"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

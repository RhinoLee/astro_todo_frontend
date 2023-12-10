<script setup lang="ts">
import { computed, reactive, toRaw, watch } from "vue";
import PostButton from "@components/ui/PostButton.vue";
import { createTodoAPI, updateTodoAPI } from "@services/todo";
import type { TodoSchema, TodoResSchema } from "@type/todo";

interface Props {
  todo?: TodoResSchema | null;
}

const props = defineProps<Props>();

const isEditForm = computed(() => {
  return props.todo !== undefined;
});

const buttonName = computed(() => {
  return isEditForm.value ? "更新" : "新增";
});

const todoForm = reactive<TodoSchema>({
  title: "",
  content: "",
  status: 0,
});

function clickHandler() {
  if (!isEditForm.value) createHandler();
  else editHandler();
}

function initData() {
  todoForm.title = "";
  todoForm.content = "";
}

async function createHandler() {
  try {
    await createTodoAPI(toRaw(todoForm));
    initData();
  } catch (err) {
    console.log(err);
  }
}

async function editHandler() {
  if (!props.todo) return;
  try {
    const result = await updateTodoAPI(toRaw(todoForm), props.todo.id);
    Object.assign(todoForm, result.data.data);
  } catch (err) {
    console.log(err);
  }
}

watch(
  () => props.todo,
  (val) => {
    if (val) Object.assign(todoForm, val);
  },
  { immediate: true },
);
</script>

<template>
  <div>
    <div class="flex justify-end">
      <PostButton
        @clickHandler="clickHandler"
        :disabled="!Boolean(todoForm.title)"
        >{{ buttonName }}</PostButton
      >
    </div>
    <!-- form -->
    <div class="pt-[3rem]">
      <div>
        <input
          v-model="todoForm.title"
          type="text"
          class="custom-input p-[1rem] w-full text-[3rem] text-black-1"
          placeholder="請輸入標題"
        />
      </div>

      <div class="mt-[2rem]">
        <textarea
          v-model="todoForm.content"
          class="border border-gray-1 p-[1rem] w-full text-[2rem] text-gray-2 h-[200px] focus:outline-gray-2"
          placeholder="輸入其他內容..."
        ></textarea>
      </div>
    </div>
  </div>
</template>

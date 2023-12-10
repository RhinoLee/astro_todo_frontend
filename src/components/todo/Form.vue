<script setup lang="ts">
import { reactive, toRaw } from "vue";
import PostButton from "@components/ui/PostButton.vue";
import { createTodoAPI } from "@services/todo";
import type { TodoSchema } from "@type/todo";

const todoForm = reactive<TodoSchema>({
  title: "",
  content: "",
  status: 0,
});

async function createHandler() {
  try {
    await createTodoAPI(toRaw(todoForm));
    initData();
  } catch (err) {
    console.log(err);
  }
}

function initData() {
  todoForm.title = "";
  todoForm.content = "";
}
</script>

<template>
  <div>
    <div class="flex justify-end">
      <PostButton
        @clickHandler="createHandler"
        :disabled="!Boolean(todoForm.title)"
        >新增</PostButton
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

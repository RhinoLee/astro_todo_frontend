import $axios from "@services/index";
import type { TodoSchema } from "@type/todo";

export const getTodosAPI = () => {
  return $axios.get("/todos");
};

export const createTodoAPI = (data: TodoSchema) => {
  return $axios.post("/todos", data);
};

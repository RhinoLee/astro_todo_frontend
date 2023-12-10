import $axios from "@services/index";
import type { TodoSchema } from "@type/todo";

export const getTodosAPI = () => {
  return $axios.get("/todos");
};

export const getTodoAPI = (id: number) => {
  return $axios.get(`/todos/${id}`);
};

export const createTodoAPI = (data: TodoSchema) => {
  return $axios.post("/todos", data);
};

export const updateTodoAPI = (data: TodoSchema, id: number) => {
  return $axios.put(`/todos/${id}`, data);
};

export const deleteTodoAPI = (id: number) => {
  return $axios.delete(`/todos/${id}`);
};

export interface TodoSchema {
  title: string;
  content: string;
  status: 0 | 1;
}

export interface TodoResSchema extends TodoSchema {
  id: number;
}

export type TodoStatus = Pick<TodoSchema, "status">;

export interface TodoSchema {
  title: string;
  content: string;
  status: number;
}

export interface TodoResSchema extends TodoSchema {
  id: number;
}

import todo from "@/models/todo";

const NewTodo = async (title: string) => {
  const new_todo = await todo.create({ title });
  return new_todo;
};

const listAllTodo = async () => {
  const todos = await todo.find({});
  return todos;
};

const UpdateTodo = async (id: string, title: string) => {
  const updated_todo = await todo.findOne({ _id: id });
  updated_todo.title = title || updated_todo.title;
  await updated_todo.save();
  return updated_todo;
};

const DeleteTodo = async (id: string) => {
  const deleted_todo = await todo.findOneAndDelete({ _id: id });
  return deleted_todo;
};

export { NewTodo, listAllTodo, UpdateTodo, DeleteTodo };

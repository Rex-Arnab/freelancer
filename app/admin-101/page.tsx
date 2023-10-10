"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { useEffect, useState } from "react";

const TodoItem = ({
  title,
  index,
  todoList,
  setTodoList
}: {
  title: any;
  index: number;
  todoList: any;
  setTodoList: any;
}) => {
  const [t, setT] = useState(title.title);
  const { toast } = useToast();

  const handleChanges = () => {
    axios.put("/api/todo", { title: t, id: title._id }).then((_res) => {
      toast({
        title: "Changes Saved",
        description: "Your changes have been saved for message " + (index + 1)
      });
    });
  };

  const handleDelete = () => {
    axios.delete("/api/todo", { data: { id: title._id } }).then((_res) => {
      toast({
        variant: "destructive",
        title: "Message Deleted",
        description: "Message " + (index + 1) + " has been deleted"
      });
    });
    setTodoList(todoList.filter((todo: any) => todo._id !== title._id));
  };
  return (
    <section className="bg-white p-5 rounded shadow space-y-5">
      <h1 className="font-bold">Message {index + 1}</h1>
      <Textarea
        placeholder="Title"
        value={t}
        onChange={(e) => setT(e.target.value)}></Textarea>
      <div className="flex justify-end space-x-5">
        <Button onClick={handleChanges}>Save</Button>
        <Button onClick={handleDelete} variant="destructive">
          Delete
        </Button>
      </div>
    </section>
  );
};

const NewTodoList = ({
  todoList,
  setTodoList
}: {
  todoList: any;
  setTodoList: any;
}) => {
  const [title, setTitle] = useState("");

  const handleSave = () => {
    axios.post("/api/todo", { title }).then((_res) => {
      setTodoList([...todoList, { title }]);
      setTitle("");
    });
  };
  return (
    <section className="bg-white p-5 rounded shadow space-y-5">
      <h1 className="font-bold">Add New Todo List</h1>
      <Textarea
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}></Textarea>
      <div className="flex justify-end space-x-5">
        <Button onClick={handleSave}>Add</Button>
      </div>
    </section>
  );
};

function Admin() {
  const [todoList, setTodoList] = useState([]);
  const [todoAddToggle, setTodoAddToggle] = useState(false);

  useEffect(() => {
    axios.get("/api/todo").then((res) => {
      setTodoList(res.data);
    });
  }, []);

  return (
    <div className="min-h-screen bg-slate-200">
      <nav className="bg-primary p-5 text-white font-bold flex items-center justify-between">
        <h1>ADMIN PANEL</h1>
        <div>
          <Button
            className="bg-black hover:bg-black/60"
            onClick={() => setTodoAddToggle(!todoAddToggle)}>
            {todoAddToggle ? "Cancel" : "Add New"}
          </Button>
        </div>
      </nav>
      {todoAddToggle && (
        <NewTodoList todoList={todoList} setTodoList={setTodoList} />
      )}
      <div className="px-2 md:px-5 mt-2 max-w-xl">
        <h1 className="font-bold">Existing Messages</h1>
      </div>
      <main className="p-2 md:p-5 grid grid-cols-1 md:grid-cols-3 gap-5">
        {todoList.map((todo: any, todoIndex: number) => (
          <TodoItem
            key={todo.title}
            title={todo}
            index={todoIndex}
            todoList={todoList}
            setTodoList={setTodoList}
          />
        ))}
      </main>
    </div>
  );
}

export default Admin;

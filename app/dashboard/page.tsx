"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import moment from "moment";

// const DefaultCard = () => {
//   return (
//     <div className="w-full bg-slate-200 p-5 rounded grid grid-cols-1 md:flex md:items-center">
//       <div className="relative w-10 h-10 rounded-xl">
//         <Image
//           src="https://www.f-cdn.com/assets/main/en/assets/default-notification-image.svg"
//           alt="Zero Commission"
//           fill
//         />
//       </div>
//       <div className="p-0 md:px-5">
//         <p>
//           Welcome User, Get Noticed today by taking our US English Exam - Level
//           1
//         </p>
//         <span>5 minutes ago</span>
//       </div>
//     </div>
//   );
// };

interface CardProps {
  todo: any;
}

const Card = ({ todo }: CardProps) => {
  return (
    <div className="w-full bg-slate-200 p-5 rounded grid grid-cols-1 md:flex md:items-center">
      <div className="relative w-10 h-10 rounded-xl">
        <Image
          src="https://www.f-cdn.com/assets/main/en/assets/default-notification-image.svg"
          alt="Zero Commission"
          fill
        />
      </div>
      <div className="p-0 md:px-5">
        <p>{todo.title}</p>
        <span>{moment(todo.createdAt).fromNow()}</span>
      </div>
    </div>
  );
};

function Dashboard() {
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    axios.get("/api/todo").then((res) => {
      setTodoList(res.data);
    });
  }, []);
  return (
    <div>
      {todoList.length > 0 &&
        todoList.map((todo: any) => <Card key={todo._id} todo={todo} />)}
    </div>
  );
}

export default Dashboard;

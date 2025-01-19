"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Counter from "@/components/counter";
import Popup from "@/components/popup";
import { Task } from "../../types";
import {
  IoIosAddCircleOutline,
  IoIosTrash,
  IoIosClipboard,
  IoMdCreate,
} from "react-icons/io";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [selected, setSelected] = useState([]);
  const [deleting, setDeleting] = useState(false);
  const [updating, setUpdating] = useState(false);

  console.log(process.env.NEXT_PUBLIC_API_BASE_URL);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/tasks`)
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, [deleting, updating]);

  const deleteTask = async (task: Task) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/tasks/${task?.id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        setDeleting(true);
      }
      setTimeout(() => setDeleting(false), 3000);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleTaskCompletion = async (taskId: number) => {
    try {
      const taskToUpdate: Task = tasks.find((task: Task) => task.id === taskId);
      if (taskToUpdate == undefined) return;

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/tasks/${taskId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...taskToUpdate,
            completed: !taskToUpdate.completed,
          }),
        }
      );

      if (response.ok) {
        setUpdating(true);
      }
      setTimeout(() => setUpdating(false), 1000);
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <div className="container mx-auto flex flex-col justify-content-center items-center p-4 text-white relative -top-10">
      <Link href={`tasks/create`} className="block w-[736px] mb-10">
        <span className="flex justify-center items-center bg-[#1E6F9F] text-white p-3 mb-4 inline-block w-[736px] rounded">
          Create Task{" "}
          <span className="pl-2">
            <IoIosAddCircleOutline />
          </span>
        </span>
      </Link>
      <div className="flex justify-between w-[736px] p-2 mb-4">
        <Counter tasks={tasks} value={"single"} />
        <Counter tasks={tasks} value={"total"} />
      </div>
      {tasks.length === 0 ? (
        <div className="flex flex-col justify-center items-center border-t-2 border-[#333333] rounded w-[736px] p-8">
          <IoIosClipboard style={{ color: "#3d3d3d", fontSize: "3.6em" }} />
          <p className="font-bold text-[#808080] p-4">
            You don&apos;t have any tasks registered yet.
          </p>
          <p className="font-300 text-[#808080]">
            Create tasks and organize your to-do-items
          </p>
        </div>
      ) : (
        <ul>
          {tasks.map((task: Task, i) => (
            <li
              key={i}
              className={`flex justify-stretch items-center mb-2 p-2 w-[736px] bg-[#262626] border-2 border-[#333333] rounded ${
                task?.completed ? "opacity-30" : ""
              }`}
            >
              <input
                type="radio"
                checked={task?.completed || false}
                onChange={() => toggleTaskCompletion(task?.id)}
                className="ml-4 h-4 w-4 cursor-pointer accent-[#1E6F9F]"
              />
              <span
                className={`p-2 rounded w-[736px] ${
                  task?.completed ? "line-through" : ""
                }`}
              >
                {task?.title}
              </span>
              <div className="flex flex-row justify-center items-center pr-6">
                <button
                  className="ml-2 pr-1 text-gray-500 hover:pointer-events-auto"
                  onClick={() => deleteTask(task)}
                >
                  <IoIosTrash />
                </button>
                <Link
                  href={{ pathname: `tasks/edit`, query: { id: task?.id } }}
                  className="ml-2 pr-1 text-gray-500"
                >
                  <span>
                    <IoMdCreate />
                  </span>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      )}
      {deleting && <Popup message="Task deleted" />}
    </div>
  );
};

export default Tasks;

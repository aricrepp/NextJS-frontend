"use client";

import React, { useState } from "react";
import Link from "next/link";
import Popup from "../../../components/popup";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Colors, ColorsExtended } from "../../../types";
import { useTask } from "@/context/taskContext";
import "../../globals.css";

const CreateEdit = () => {
  const [title, setTitle] = useState<string>("");
  const [created, setCreated] = useState<boolean>(false);
  const [edited, setEdited] = useState<boolean>(false);
  const { task } = useTask();
  const [activeColor, setActiveColor] = useState<Colors>({
    colorName: "red",
    color: "#FF3B30",
  });
  const colors: ColorsExtended = [
    { colorName: "red", color: "#FF3B30" },
    { colorName: "orange", color: "#FF9500" },
    { colorName: "yellow", color: "#FFCC00" },
    { colorName: "green", color: "#34C759" },
    { colorName: "blue", color: "#007AFF" },
    { colorName: "indigo", color: "#5856D6" },
    { colorName: "purple", color: "#AF52DE" },
    { colorName: "pink", color: "#FF2D55" },
    { colorName: "brown", color: "#A2845E" },
  ];

  const addTask = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/tasks/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, color: activeColor.colorName }),
        }
      );

      if (response.ok) {
        setCreated(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const editTask = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/tasks/edit/${task?.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, color: activeColor.colorName }),
        }
      );

      if (response.ok) {
        setEdited(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto flex flex-col justify-content-center items-left w-[736px] mt-16">
      <Link href={`/`} className="text-gray-500 mb-10">
        <span>
          <IoIosArrowRoundBack
            style={{ color: "#ffffff", fontSize: "2.4em" }}
          />
        </span>
      </Link>
      <div className="mb-4 flex flex-col gap-6">
        <div className="flex flex-col justify-center items-left gap-2">
          <h4 className="text-md text-[#4EA8DE] font-bold">Title</h4>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Ex. Brush your teeth"
            className="bg-[#262626] border-x border-y border-[#333333] text-white p-2 mr-2 w-[736px] rounded placeholder-[#F2F2F2] placeholder-opacity-75"
          />
        </div>
        <div className="flex flex-col justify-center items-left gap-2 mb-8">
          <h4 className="text-md text-[#4EA8DE] font-bold">Color</h4>
          <div className="flex gap-3">
            {colors.map((colorObj, i) => (
              <button
                key={i}
                className={`w-[52px] h-[52px] rounded-full ${
                  activeColor?.color === colorObj?.color
                    ? "border-2 border-white"
                    : ""
                }`}
                style={{ background: colorObj.color }}
                onClick={() => setActiveColor(colorObj)}
              ></button>
            ))}
          </div>
        </div>
        <button
          onClick={task === null ? addTask : editTask}
          className="bg-[#1E6F9F] text-white p-2 rounded"
        >
          {task === null ? "Create" : "Edit"}
        </button>
      </div>

      {created && <Popup message="Task created" />}
      {edited && <Popup message="Task edited" />}
    </div>
  );
};

export default CreateEdit;

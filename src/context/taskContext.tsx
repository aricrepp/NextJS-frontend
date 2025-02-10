"use client";
import React, { createContext, useContext, useState } from "react";
import { Task } from "../types/types";

interface TaskContextType {
  task: Task | null;
  setTask: React.Dispatch<React.SetStateAction<Task | null>>;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [task, setTask] = useState<Task | null>(null);

  return (
    <TaskContext.Provider value={{ task, setTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = (): TaskContextType => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTask must be used within a TaskProvider");
  }
  return context;
};

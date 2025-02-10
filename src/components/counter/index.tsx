import React from "react";
import { Task } from "../../types/types";

type TaskProps = {
  tasks: Task[];
  value: string;
};

const TaskComponent: React.FC<TaskProps> = ({ tasks, value }) => {
  const totalTasks: number = Object.keys(tasks).length;
  const count: number = tasks.filter((task) => task.completed).length;

  return (
    <div>
      {value === "total" ? (
        <p className="text-[#8284FA] font-bold">
          Completed{" "}
          <span className="bg-[#333333] rounded-xl text-[#D9D9D9] px-2 py-1">
            {tasks.length ? `${count} of ${totalTasks}` : 0}
          </span>
        </p>
      ) : (
        <p className="text-[#4EA8DE] font-bold">
          Tasks{" "}
          <span className="bg-[#333333] rounded-xl text-[#D9D9D9] px-2 py-1">
            {tasks.length}
          </span>
        </p>
      )}
    </div>
  );
};

export default TaskComponent;

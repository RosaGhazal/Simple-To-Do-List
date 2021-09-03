import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ taskList, onCheck }) => (
  <ul>
    {taskList.map(task => (
      <TaskItem onCheck={onCheck} key={task.id} task={task} />
    ))}
  </ul>
);

export default TaskList;
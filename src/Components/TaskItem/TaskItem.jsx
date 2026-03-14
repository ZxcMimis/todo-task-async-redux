import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, toggleComplete } from "../../redux/taskSlice";
import "./TaskItem.scss";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(task.id));
  const handleToggle = () => dispatch(toggleComplete(task.id));

  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <div className="task-content" onClick={handleToggle}>
        <div className="checkbox"></div>
        <p className="text">{task.text}</p>
      </div>
      <button className="delete-btn" onClick={handleDelete}>
        ✕
      </button>
    </div>
  );
};

export default TaskItem;
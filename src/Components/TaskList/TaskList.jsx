import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StatusFilters } from "../../redux/constant";
import TaskItem from "../TaskItem/TaskItem";
import { fetchTasks } from "../../redux/operations"; 
import "./TaskList.scss";

const getVisibleTasks = (tasks, filter) => {
  if (!filter) return tasks;

  switch (filter) {
    case StatusFilters.active:
      return tasks.filter((task) => !task.completed);
    case StatusFilters.completed:
      return tasks.filter((task) => task.completed);
    default:
      return tasks;
  }
};

const TaskList = () => {
  const dispatch = useDispatch(); 
  const { tasks, filter } = useSelector((state) => state.tasksData);
  
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const visibleTasks = getVisibleTasks(tasks, filter);

  return (
    <div className="task-list">
      {visibleTasks.length > 0 ? (
        visibleTasks.map((task) => <TaskItem key={task.id} task={task} />)
      ) : (
        <p className="empty-msg">Список порожній</p>
      )}
    </div>
  );
};

export default TaskList;
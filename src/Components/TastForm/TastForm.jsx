import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/taskSlice";
import "./TastForm.scss";

const TastForm = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      dispatch(addTask(text));
      setText("");
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-input"
        placeholder="Введи завдання..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="form-btn">Add</button>
    </form>
  );
};

export default TastForm;
import React, { useState } from "react";
import Card from "../components/TodoCard";

// TodoIndex component
function TodoIndex() {
  // Function hooks
  const [newTask, setNewTasks] = useState({ title: "", desc: "" });
  const [tasks, setTasks] = useState([]);

  // Handle functions

  // Function to update newTask object based on user input
  const handleAddNew = (e) => {
    const { name, value } = e.target;
    setNewTasks((prevVal) => {
      return {
        ...prevVal,
        [name]: value,
      };
    });
  };

  // Function to handle submission of a new task
  const handleAddNewSubmit = (e) => {
    e.preventDefault();
    setTasks((prevTasks) => {
      return [...prevTasks, newTask];
    });
    setNewTasks({ title: "", desc: "" });
  };

  // Function to delete a task by index
  const handleDelete = (taskIndex) => {
    const updatedTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(updatedTasks);
  };

  // Function to save changes to a task
  const handleSave = (index, editedTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = editedTask;
    setTasks(updatedTasks);
  };

  // Render functions

  // Function to render the input box for adding new tasks
  const renderInputBox = () => {
    return (
      <form className="addNew">
        <div>
          <input
            type="text"
            name="title"
            placeholder="Title.."
            value={newTask.title || ""}
            onChange={handleAddNew}
          />
          <textarea
            name="desc"
            placeholder="Description.."
            value={newTask.desc || ""}
            onChange={handleAddNew}
          />
        </div>
        {/* Button to submit a new task */}
        <button
          className="addBtn"
          onClick={handleAddNewSubmit}
          disabled={newTask.title === ""}
        >
          +
        </button>
      </form>
    );
  };

  // Function to render the task cards using map function
  const renderTaskCardsLoopWrapper = () => {
    if (tasks.length === 0)
      return (
        <>
          <div className="noTask">
            <p>No Tasks</p>
          </div>
        </>
      );
    return (
      <>
        {/* Map through tasks and render each task card */}
        {tasks.map((item, index) => {
          return (
            <div key={index}>
              <Card
                data={item}
                index={index}
                onDelete={handleDelete}
                onSave={handleSave}
              />
            </div>
          );
        })}
      </>
    );
  };

  // Return the main TodoIndex component
  return (
    <div className="HomeWrapper">
      {renderInputBox()}
      <div className="taskLoopWrapper">{renderTaskCardsLoopWrapper()} </div>
    </div>
  );
}

export default TodoIndex;

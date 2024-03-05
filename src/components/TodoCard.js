import React, { useState } from "react";
import cross from "../assets/cross.png";
import edit from "../assets/Edit.png";

// TodoCard component
function TodoCard({ data, onDelete, index, onSave }) {
  // Hooks
  const [DeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [EditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [editedTask, setEditedTask] = useState({ ...data });

  // Handle functions
  const handleClosePopup = () => {
    setIsDeletePopupOpen(false);
  };

  const handleDelete = () => {
    onDelete(index);
    setIsDeletePopupOpen(false);
  };

  const handleSave = () => {
    onSave(index, editedTask);
    setIsEditPopupOpen(false);
  };

  // Functions to render different parts of the component

  // Function to render the main task card
  const renderCard = () => {
    return (
      <>
        <div>
          <div className="title">
            {" "}
            {data.title.length < 10
              ? data.title
              : data.title.substring(0, 10) + "..."}
          </div>
          <div className="desc">
            {data.desc.length < 20
              ? data.desc
              : data.desc.substring(0, 20) + "..."}
          </div>
        </div>
        <div>
          {/* Button to open edit popup */}
          <button
            className="addBtn"
            onClick={() => {
              setIsEditPopupOpen(true);
            }}
          >
            <img src={edit} alt="noimg" />
          </button>
          {/* Button to open delete popup */}
          <button
            className="addBtn"
            onClick={() => {
              setIsDeletePopupOpen(true);
            }}
          >
            <img src={cross} alt="noimg" />
          </button>
        </div>
      </>
    );
  };

  // Function to render the delete popup
  const renderDeletePopup = () => {
    if (!DeletePopupOpen) return null;
    return (
      <>
        {/* Popup window for confirming task deletion */}
        <div className="popup">
          <div className="popup-content">
            <div>Delete this task?</div>
            {/* Button to close the delete popup */}
            <button className="addBtn" onClick={handleClosePopup}>
              No
            </button>
            {/* Button to confirm task deletion */}
            <button className="addBtn" onClick={handleDelete}>
              Yes
            </button>
          </div>
        </div>
      </>
    );
  };

  // Function to render the edit popup
  const renderEditPopup = () => {
    if (!EditPopupOpen) return null;
    return (
      <>
        <div className="popup">
          <div className="popup-content">
            <div>
              {/* Input field to edit task title */}
              <input
                type="text"
                value={editedTask.title}
                onChange={(e) =>
                  setEditedTask({ ...editedTask, title: e.target.value })
                }
              />
            </div>
            <div>
              {/* Textarea to edit task description */}
              <textarea
                className="desc"
                value={editedTask.desc}
                onChange={(e) =>
                  setEditedTask({ ...editedTask, desc: e.target.value })
                }
              />
            </div>
            {/* Button to close the edit popup */}
            <button
              className="addBtn"
              onClick={() => setIsEditPopupOpen(false)}
            >
              Cancel
            </button>
            {/* Button to save the edited task */}
            <button className="addBtn" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      </>
    );
  };

  // Return the main TodoCard component
  return (
    <div className="TaskCardWrapper">
      {renderCard()}
      {renderDeletePopup()}
      {renderEditPopup()}
    </div>
  );
}

export default TodoCard;
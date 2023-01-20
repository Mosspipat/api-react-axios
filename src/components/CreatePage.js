import React, { useState } from "react";

function CreatePage({ onSave }) {
  const [newName, setNewName] = useState("");
  const [newImage, setNewImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(newName, newImage);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        position: "fixed",
        backgroundColor: "black",
        width: 500,
        height: "40%",
        top: "50%",
        left: "50%",
        marginTop: "-100px",
        marginLeft: "-250px",
      }}
    >
      <h1>Create</h1>
      <label>
        Name:
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Image:
        {/* <input type="file" onChange={(e) => setNewImage(e.target.files[0])} /> */}
        <input type="text" onChange={(e) => setNewImage(e.target.value)} />
      </label>
      <button type="submit">Save</button>
    </form>
  );
}

export default CreatePage;

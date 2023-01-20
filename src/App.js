import "./App.css";
// import TableComponent from "./components/TableComponent";
import axios from "axios";

import React, { useState, useEffect } from "react";
import CreatePage from "./components/CreatePage";

function App() {
  const [inputText, setInputText] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const [fruits, setFruits] = useState([]);

  const [showCreatePage, setShowCreatePage] = useState(false);

  const handleCreate = () => {
    setShowCreatePage(true);
  };

  const handleSave = (newName, newImage) => {
    const newData = {
      name: newName,
      image: newImage,
    };
    axios
      .post("http://localhost:3001/fruits", newData)
      .then((response) => {
        const imageUrl = response.data.imageUrl;
        setFruits([...fruits, { name: newName, image: imageUrl }]);
        setShowCreatePage(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    //rerender on value chnage
    axios
      .get("http://localhost:3001/fruits")
      .then((res) => {
        const newDataGet = res.data;
        setFruits(newDataGet);
        console.log(newDataGet);
      })
      .catch((err) => {
        console.log(err);
      });
    //filter from iinput
    setFilteredData(fruits.filter((item) => item.name.includes(inputText)));
  }, [fruits, inputText]);

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ width: "100%", textAlign: "center", color: "black" }}>
          ผลไม้
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
            width: "100%",
          }}
        >
          <button
            style={{
              paddingTop: 16,
              paddingBottom: 16,
              paddingLeft: 32,
              paddingRight: 32,
              fontSize: 32,
              color: "white",
              background: "green",
              borderRadius: 64,
              width: "20%",
            }}
            onClick={handleCreate}
          >
            เพิ่มผลไม้
          </button>
          {showCreatePage && <CreatePage onSave={handleSave} />}
          <input
            style={{
              marginTop: 24,
              marginBottom: 24,
              padding: 24,
              width: "20%",
            }}
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            name="name"
            placeholder="search..."
          />
        </div>
        <table
          style={{
            border: "1px solid black",
            borderRadius: "5px!important",
            padding: "24px",
            width: "100%",
          }}
        >
          <thead style={{ color: "black" }}>
            <tr style={{ fontWeight: "bold" }}>
              <th>ชื่อผลไม้</th>
              <th>ภาพ</th>
            </tr>
          </thead>
          <tbody
            style={{
              fontWeight: "normal",
              fontSize: 24,
              borderStyle: "solid",
              border: "1px solid red",
            }}
          >
            {filteredData.map((item, index) => (
              <tr
                key={index}
                style={{
                  fontWeight: "normal",
                  fontSize: 24,
                }}
              >
                <td style={{ color: "black" }}>{item.name}</td>
                <td>
                  <img
                    style={{ maxWidth: "120px" }}
                    src={item.image}
                    alt="fruit"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;

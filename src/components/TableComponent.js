import React from "react";

function TableComponent({ data }) {
  return (
    <table
      style={{
        border: "1px solid black",
        borderRadius: "5px!important",
        padding: "24px",
        width: "100%",
      }}
    >
      <thead>
        <tr style={{ fontWeight: "bold" }}>
          <th>ชื่อ</th>
          <th>ภาพ</th>
        </tr>
      </thead>
      <tbody style={{ fontWeight: "normal", fontSize: 24 }}>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>
              <img style={{ maxWidth: "120px" }} src={item.image} alt="fruit" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableComponent;

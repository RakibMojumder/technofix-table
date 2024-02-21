import "./App.css";
import { FiMenu } from "react-icons/fi";
import Modal from "./components/modal/Modal";
import { useState } from "react";
import { columnsData } from "./utils/data";

const data = [
  {
    id: 1,
    title: "Beetlejuice",
    category: "Fashion",
    price: 2330,
    year: "1988",
    author: "Admin",
    status: "Pending",
  },
];

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [columns, setColumns] = useState(columnsData);

  const handleAddOrRemoveColumn = (column) => {
    const isColumnExist = columns.find((col) => col.name === column.name);

    if (isColumnExist) {
      const filteredColumns = columns.filter((col) => col.name !== column.name);
      setColumns(filteredColumns);
    } else {
      const newColumns = [column, ...columns];
      setColumns(newColumns);
    }
  };

  return (
    <div className="container">
      <div className="navbar">
        <h2>React Table</h2>
        <FiMenu
          size={30}
          className="icon"
          onClick={() => setIsOpen((prev) => !prev)}
        />
      </div>
      <div className="table_container">
        <div className="table_head">
          {columns
            .sort((a, b) => a.order - b.order)
            .map((column, index) => (
              <div key={index} className="table_head_data">
                {column.name}
              </div>
            ))}
        </div>

        <div className="table_body">
          {data.map((row) => (
            <div key={row.id} className="table_row">
              {columns.map((column, index) => (
                <div key={index} className="table_body_data">
                  {row[column.value]}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      {isOpen && (
        <Modal
          columns={columns}
          setIsOpen={setIsOpen}
          handleAddOrRemoveColumn={handleAddOrRemoveColumn}
        />
      )}
    </div>
  );
};

export default App;

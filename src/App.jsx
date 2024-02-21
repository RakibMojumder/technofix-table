import "./App.css";
import { FiMenu } from "react-icons/fi";
import Modal from "./components/modal/Modal";
import { useState } from "react";
import { columnsData, data } from "./utils/data";
import Table from "./components/table/Table";

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
      <Table columns={columns} data={data} />
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

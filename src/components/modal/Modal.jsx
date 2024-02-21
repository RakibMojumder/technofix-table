import "./modal.css";
import { useRef } from "react";
import Checkbox from "../checkbox/Checkbox";
import useClickOutside from "../../hooks/useClickOutside";
import { columnsData } from "../../utils/data";

const Modal = ({ columns, setIsOpen, handleAddOrRemoveColumn }) => {
  const ref = useRef();
  useClickOutside(ref, () => setIsOpen((prev) => !prev));

  return (
    <div ref={ref} className="modal_container">
      <div className="modal_title">Add or remove coloums</div>
      <div>
        {columnsData.map((column, index) => (
          <Checkbox
            key={index}
            column={column}
            columns={columns}
            handleAddOrRemoveColumn={handleAddOrRemoveColumn}
          />
        ))}
      </div>
    </div>
  );
};

export default Modal;

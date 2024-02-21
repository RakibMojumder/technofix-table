/* eslint-disable react/prop-types */
import "./checkbox.css";

const Checkbox = ({ column, columns, handleAddOrRemoveColumn }) => {
  const isChecked = columns.find((col) => col.name === column.name);

  return (
    <div className="checkbox_container">
      <label className="checkbox_label" htmlFor={column.name}>
        <span className="item_name">{column.name}</span>
        <input
          onChange={() => handleAddOrRemoveColumn(column)}
          name={column.name}
          type="checkbox"
          id={column.name}
          checked={isChecked}
        />
        <span className="checkmark"></span>
      </label>
    </div>
  );
};

export default Checkbox;

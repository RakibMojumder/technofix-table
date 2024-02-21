/* eslint-disable react/prop-types */
import "./table.css";

const Table = ({ columns, data }) => {
  return (
    <div className="table_container">
      {/* TABLE COLUMNS */}
      <div className="table_head">
        {columns
          .sort((a, b) => a.order - b.order) // SORTING TABLE COLUMNS
          .map((column, index) => (
            <div key={index} className="table_head_data">
              {column.name}
            </div>
          ))}
      </div>

      <div className="table_body">
        {/* TABLE ROWS */}
        {data.map((row) => (
          <div key={row.id} className="table_row">
            {columns.map((column, index) => (
              <div key={index} className="table_body_data">
                {column.value ? row[column.value] : column.action()}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;

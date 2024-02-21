import "./App.css";
import { FiMenu } from "react-icons/fi";
import Modal from "./components/modal/Modal";

const columns = [
  {
    name: "Title",
    value: "title",
  },
  {
    name: "Category",
    value: "category",
  },
  {
    name: "Price",
    value: "price",
  },
  {
    name: "Year",
    value: "year",
  },
  {
    name: "Author",
    value: "author",
  },
  {
    name: "Status",
    value: "status",
  },
];

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
  return (
    <div className="container">
      <div className="navbar">
        <h2>React Table</h2>
        <FiMenu size={30} className="icon" />
      </div>
      <div className="table_container">
        <div className="table_head">
          {columns.map((colum, index) => (
            <div key={index} className="table_head_data">
              {colum.name}
            </div>
          ))}
        </div>

        <div className="table_body">
          {data.map((row) => (
            <div key={row.id} className="table_row">
              {columns.map((colum, index) => (
                <div key={index} className="table_body_data">
                  {row[colum.value]}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <Modal />
    </div>
  );
};

export default App;

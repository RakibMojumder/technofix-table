import "./App.css";

const columns = [
  {
    name: "Title",
    value: "title",
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
    name: "User",
    value: "user",
  },
];

const data = [
  {
    id: 1,
    title: "Beetlejuice",
    year: "1988",
    author: "sadfsdsdfl s sdlfkjsdfds",
    user: "user",
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
    author: "Author",
    user: "user",
  },
];

const App = () => {
  return (
    <div className="container">
      <h2>React Table</h2>
      <div className="table_container">
        <div className="table_head">
          {columns.map((colum, index) => (
            <div key={index} className="table_head_data">
              {colum.name}
            </div>
          ))}
        </div>

        <div className="table_body">
          {columns.map((colum, index) => (
            <div key={index} className="table_row">
              {data.map((row) => (
                <div key={row.id} className="table_body_data">
                  {row[colum.value]}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

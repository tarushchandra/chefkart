import { parse } from "papaparse";
import { useEffect, useState } from "react";
import IndividualItem from "./components/Individualtem";

function App() {
  const [data, setData] = useState({});
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    parse("../data/data.csv", {
      download: true,
      header: true,
      complete: (res) => {
        setData(res);
      },
    });
  }, []);

  const handleSort = (col) => {
    if (toggle) {
      const sorted = data?.data?.sort((a, b) => {
        return a[col] < b[col] ? 1 : -1;
      });
      setData(sorted);
      setToggle(false);
    }
  };

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            {data?.meta?.fields?.map((column, index) => (
              <th onClick={() => handleSort(column)}>
                <div className="head">{column}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((item) => {
            return (
              <tr tabIndex="1" className="row">
                <IndividualItem item={item} />
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;

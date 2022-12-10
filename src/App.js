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
    let sorted;
    if (!toggle) {
      sorted = data?.data?.sort((a, b) => {
        return a[col]?.toLowerCase() > b[col]?.toLowerCase() ? 1 : -1;
      });
    } else {
      sorted = data?.data?.sort((a, b) => {
        return a[col]?.toLowerCase() < b[col]?.toLowerCase() ? 1 : -1;
      });
    }
    console.log(sorted);
    setToggle((prev) => !prev);
  };

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            {data?.meta?.fields?.map((column, index) => (
              <th key={index} onClick={() => handleSort(column)}>
                <div className="head">
                  {column}
                  {toggle ? (
                    <i class="fa-solid fa-caret-down"></i>
                  ) : (
                    <i class="fa-solid fa-caret-up"></i>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((item, index) => {
            return (
              <tr key={index} tabIndex="1" className="row">
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

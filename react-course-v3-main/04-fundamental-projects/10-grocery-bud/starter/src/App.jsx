import React, { useState, useEffect } from "react";

const getLocalStorage = () => {
  const storedData = localStorage.getItem("list");
  return storedData ? JSON.parse(storedData) : [];
};

const App = () => {
  const [user, setUser] = useState("");
  const [data, setData] = useState(getLocalStorage);

  const setLocalStorage = (items) => {
    localStorage.setItem("list", JSON.stringify(items));
  };

  const addData = (e) => {
    e.preventDefault();
    setData((prevData) => {
      const updatedData = [...prevData, user];
      setLocalStorage(updatedData);
      return updatedData;
    });
    setUser("");
  };

  const remove = (item) => {
    const updatedData = data.filter((element) => {
      return element !== item;
    });
    setData(updatedData);
    setLocalStorage(updatedData);
  };

  return (
    <div>
      <form onSubmit={addData}>
        <input
          type="text"
          value={user}
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
        <button type="submit">submit</button>
      </form>

      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item} <input type="checkbox" />
            <button
              onClick={() => {
                remove(item);
              }}
            >
              remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

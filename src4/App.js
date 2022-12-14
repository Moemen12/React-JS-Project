import React, { useState } from "react";
import GameCalc from "./components/Game/GameCalc";
import NumberList from "./components/Game/NumberList";

function App() {
  const [passedData, setPassedData] = useState([]);
  const [sum, setSum] = useState("");
  const [name, setName] = useState("");
  const onPassArrayInfo = (allInfo, sum, name) => {
    setPassedData(allInfo);
    setSum(sum);
    setName(name);
  };

  return (
    <>
      <GameCalc onSum={onPassArrayInfo} />
      <NumberList takedInfo={[passedData, sum, name]} />
    </>
  );
}

export default App;

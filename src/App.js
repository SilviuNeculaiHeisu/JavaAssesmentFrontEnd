import "./App.css";
import { useState } from "react";
import AddForm from "./Components/AddForm";
import TableCustom from "./Components/TableCustom";
import DisplaySwitch from "./Components/DisplaySwitch";

function App() {
  const [isFormDisplayed, setIsFormDisplayed] = useState(true);
  const [isTableDisplayed, setIsTableDisplayed] = useState(true);
  const [newData, setNewData] = useState({});

  return (
    <>
      {" "}
      {isTableDisplayed && <TableCustom newData={newData} />}
      <DisplaySwitch
        isTableDisplayed={isTableDisplayed}
        setIsTableDisplayed={setIsTableDisplayed}
      />
      {isFormDisplayed && <AddForm newData={newData} setNewData={setNewData} />}
    </>
  );
}

export default App;

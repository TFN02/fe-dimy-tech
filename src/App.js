import React, { useState } from "react";
import "./App.css";
import ButtonNew from "./components/ButtonNew";
import ListRow from "./components/ListRow";


function App() {
  const [rows, setRows] = useState([{productName: "", productPrice: 0, quantity: 1, total: 0}]);
  const [grandTotal, setGrandTotal] = useState(0);

  const handleNewRow = () => {
    const newRow = { productName: "", productPrice: 0, quantity: 1, total: 0 };
    setRows([...rows, newRow]);
  };

  const handleDeleteRow = (index) => {
    const updatedRows = rows.filter((_, i) => i !== index);
    setRows(updatedRows);
    calculateGrandTotal();
  };

  const handleInputChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    updatedRows[index].total = updatedRows[index].productPrice * updatedRows[index].quantity;
    setRows(updatedRows);
    calculateGrandTotal();
  };

  const calculateGrandTotal = () => {
    const total = rows.reduce((acc, row) => acc + row.total, 0);
    setGrandTotal(total);
  };

  return (
    <div className="App">
      <ButtonNew onNewRowClick={handleNewRow} />
      <div className="list-app">
      {rows.map((row, index) => (
        <ListRow
          key={index}
          index={index}
          row={row}
          onInputChange={handleInputChange}
          onDeleteRow={rows.length > 1 ? handleDeleteRow : null}
          />
          ))}
          </div>
      <p className="button-grand-total">Grand Total: {grandTotal}</p>
    </div>
  );
}

export default App;

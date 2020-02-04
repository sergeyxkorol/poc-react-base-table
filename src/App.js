import React, { useState, useMemo } from "react";
import { Column } from "react-base-table";
import Table from "./components/Table";
import Filter from "./components/Filter";
import { generateColumns } from "./utils";
import "./App.scss";

function App() {
  const columns = generateColumns(10);

  const [filteredColumns, setFilteredCol] = useState(columns);

  function handleFilter(columnKey, value) {
    const updatedColumns = filteredColumns.map(col => {
      const column = col;
      if (column.key === columnKey) {
        column.hidden = !column.hidden;
      }
      return column;
    });
    setFilteredCol(updatedColumns);
  }

  // Columns settings
  const fixedColumns = useMemo(
    () =>
      filteredColumns.map((column, columnIndex) => {
        let frozen;
        if (columnIndex < 1) frozen = Column.FrozenDirection.LEFT;

        return {
          ...column,
          frozen,
          hidden: column.hidden,
          resizable: true,
          sortable: true,
          maxWidth: 300
        };
      }),
    [filteredColumns]
  );

  return (
    <div className="App">
      <div className="App-filter">
        <Filter columns={columns} onChange={handleFilter} />
      </div>
      <div className="App-table">
        <Table columns={fixedColumns} />
      </div>
    </div>
  );
}

export default App;

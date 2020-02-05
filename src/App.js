import React, { useState, useMemo } from "react";
import { AutoResizer, Column } from "react-base-table";
import Table from "./components/Table";
import Filter from "./components/Filter";
import EditableCell from "./components/EditableCell";
import { generateColumns } from "./utils";
import "./App.scss";

function App() {
  const generatedColumns = generateColumns(10);
  generatedColumns[1].cellRenderer = EditableCell;

  const [columns, setColumns] = useState(generatedColumns);

  function handleFilter(columnKey) {
    const updatedColumns = columns.map(col => {
      const column = col;
      if (column.key === columnKey) {
        column.hidden = !column.hidden;
      }
      return column;
    });
    setColumns(updatedColumns);
  }

  function handleCellEdit(data) {
    console.log(data);
  }

  // Columns settings
  const fixedColumns = useMemo(
    () =>
      columns.map((column, columnIndex) => {
        let frozen;
        let onChange;
        if (columnIndex < 1) frozen = Column.FrozenDirection.LEFT;
        if (columnIndex === 1) onChange = handleCellEdit;

        return {
          ...column,
          frozen,
          onChange,
          hidden: column.hidden,
          resizable: true,
          sortable: true,
          maxWidth: 300
        };
      }),
    [columns]
  );

  return (
    <div className="App">
      <div className="App-filter">
        <Filter columns={columns} onChange={handleFilter} />
      </div>
      <div className="App-table">
        <AutoResizer>
          {props => <Table {...props} columns={fixedColumns} />}
        </AutoResizer>
      </div>
    </div>
  );
}

export default App;

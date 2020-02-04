import React, { useState, useRef } from "react";
import BaseTable, { Column, SortOrder } from "react-base-table";
import { generateColumns, generateData } from "../utils";
import "react-base-table/styles.css";
import "./Table.scss";

export default function Table() {
  const columns = generateColumns(10);
  const data = generateData(columns, 500);

  const fixedColumns = columns.map((column, columnIndex) => {
    let frozen;
    if (columnIndex < 1) frozen = Column.FrozenDirection.LEFT;
    return {
      ...column,
      frozen,
      resizable: true,
      sortable: true,
      maxWidth: 300
    };
  });

  const defaultSort = { key: "column-0", order: SortOrder.ASC };

  const [sortedData, setSortedData] = useState(data);
  const [sortBy, setSortBy] = useState(defaultSort);

  const onColumnSort = sortBy => {
    setSortBy(sortBy);
    setSortedData(sortedData.reverse());
  };

  const tableRef = useRef(null);

  const cellProps = ({ columnIndex }) => ({
    "data-col-idx": columnIndex,
    onMouseEnter: () => {
      const table = tableRef.current.getDOMNode();
      table.classList.add(`active-col-${columnIndex}`);
    },
    onMouseLeave: () => {
      const table = tableRef.current.getDOMNode();
      table.classList.remove(`active-col-${columnIndex}`);
    }
  });

  const headerCellProps = ({ columnIndex }) => ({
    "data-col-idx": columnIndex
  });

  return (
    <BaseTable
      ref={tableRef}
      fixed
      columns={fixedColumns}
      data={sortedData}
      width={1000}
      height={400}
      sortBy={sortBy}
      onColumnSort={onColumnSort}
      cellProps={cellProps}
      headerCellProps={headerCellProps}
    />
  );
}

import React, { useState, useRef } from "react";
import BaseTable, { SortOrder } from "react-base-table";
import { generateData } from "../utils";
import "react-base-table/styles.css";
import "./Table.scss";

export default function Table({ ...props }) {
  const data = generateData(props.columns, 500);

  // Sorting
  const defaultSort = { key: "column-0", order: SortOrder.ASC };
  const [sortedData, setSortedData] = useState(data);
  const [sortBy, setSortBy] = useState(defaultSort);

  const onColumnSort = sortBy => {
    setSortBy(sortBy);
    setSortedData(sortedData.reverse());
  };

  // Columns highlighting
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
      columns={props.columns}
      data={sortedData}
      width={props.width}
      height={props.height}
      sortBy={sortBy}
      onColumnSort={onColumnSort}
      cellProps={cellProps}
      headerCellProps={headerCellProps}
      fixed
    />
  );
}

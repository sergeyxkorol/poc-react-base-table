import React from "react";
import BaseTable from "react-base-table";
import { generateColumns, generateData } from "../utils";
import "react-base-table/styles.css";
import "./Table.scss";

export default function Table() {
  const columns = generateColumns(6);
  const data = generateData(columns, 200);

  return <BaseTable columns={columns} data={data} width={600} height={400} />;
}

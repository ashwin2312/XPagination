import React, { useMemo } from "react";
import { useTable, usePagination } from "react-table";
// import MEMBERS_DATA from "./MEMBERS_DATA.JSON";
import { COLUMNS } from "./Columns";
import "./table.css";
// import { useMemo } from "react";

export default function BasicTable({ MEMBERS_DATA }) {
  console.log("membersdata::", MEMBERS_DATA);
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MEMBERS_DATA, []);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    state: { pageIndex },
    pageCount,
  } = tableInstance;

  return (
    <div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} key={column.id}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={row.id}>
                {row.cells.map((cell, index) => {
                  return (
                    <td {...cell.getCellProps()} key={index}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="btn-container">
        <button disabled={!canPreviousPage} onClick={previousPage}>
          Previous
        </button>
        <span>{pageIndex + 1}</span>
        <button disabled={!canNextPage} onClick={nextPage}>
          Next
        </button>
      </div>
    </div>
  );
}

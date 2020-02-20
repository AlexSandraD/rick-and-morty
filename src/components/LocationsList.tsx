import React from "react";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

import { ILocation, Column } from "../interfaces";



export default function LocationsList(props: any): Array<JSX.Element> {
  const { locations, page, rowsPerPage, columns } = props;

  return (
    locations &&
    locations
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((location: ILocation) => {
        return (
          <TableBody key={location.id}>
            <TableRow hover role="checkbox" tabIndex={-1} key={location.name}>
              {columns.map((column: Column) => {
                const value = location[column.id];
                return (
                  <TableCell key={column.id} align={column.align}>
                    {column.format && typeof value === "number"
                      ? column.format(value)
                      : value}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableBody>
        );
      })
  );
}

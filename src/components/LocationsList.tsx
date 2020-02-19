import React from "react";
import { withStyles, Theme, createStyles } from "@material-ui/core/styles";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

import { ILocation } from "../interfaces";

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white
    },
    body: {
      fontSize: 14
    }
  })
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.background.default
      }
    }
  })
)(TableRow);

export default function LocationsList(props: any): Array<JSX.Element> {
  const { locations } = props;

  return (
    locations &&
    locations.map((location: ILocation) => {
      return (
        <TableBody key={location.id}>
          <StyledTableRow>
            <StyledTableCell>{location.name}</StyledTableCell>
            <StyledTableCell align="left">{location.type}</StyledTableCell>
            <StyledTableCell align="left">{location.dimension}</StyledTableCell>
          </StyledTableRow>
        </TableBody>
      );
    })
  );
}

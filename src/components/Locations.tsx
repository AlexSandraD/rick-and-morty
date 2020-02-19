import React from "react";
import { Store } from "../Store";
import { fetchLocationsAction } from "../Actions";
import { ILocationProps } from "../interfaces";

import {
  withStyles,
  Theme,
  createStyles,
  makeStyles
} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const LocationsList = React.lazy<any>(() => import("./LocationsList"));

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

const useStyles = makeStyles({
  table: {
    minWidth: 700
  }
});

export default function Locations() {
  const { state, dispatch } = React.useContext(Store);
  const classes = useStyles();

  React.useEffect(() => {
    state.locations.length === 0 && fetchLocationsAction(dispatch);
  }, [dispatch, state.locations.length]);

  const props: ILocationProps = {
    locations: state.locations,
    store: { state, dispatch }
  };

  return (
    <React.Suspense fallback={<div> Loadding ... </div>}>
      <div className="location-section">
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell component="th" scope="row">
                  Name
                </StyledTableCell>
                <StyledTableCell align="left">Type</StyledTableCell>
                <StyledTableCell align="left">Dimension</StyledTableCell>
              </TableRow>
            </TableHead>
            <LocationsList {...props} />
          </Table>
        </TableContainer>
      </div>
    </React.Suspense>
  );
}

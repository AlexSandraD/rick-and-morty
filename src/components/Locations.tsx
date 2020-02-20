import React from "react";
import { Store } from "../Store";
import { fetchLocationsAction } from "../Actions";
import { ILocationProps, Column } from "../interfaces";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";

const LocationsList = React.lazy<any>(() => import("./LocationsList"));

const columns: Column[] = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "type", label: "Type", minWidth: 100 },
  { id: "dimension", label: "Dimension", minWidth: 170 }
];

const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  container: {
    maxHeight: "75vh"
  }
});

export default function Locations() {
  const { state, dispatch } = React.useContext(Store);
  const classes = useStyles();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  React.useEffect(() => {
    state.locations.length === 0 && fetchLocationsAction(dispatch);
  }, [dispatch, state.locations.length]);

  const props: ILocationProps = {
    locations: state.locations,
    store: { state, dispatch },
    page: page,
    rowsPerPage: rowsPerPage,
    columns: columns
  };

  return (
    <React.Suspense fallback={<div> Loadding ... </div>}>
      <div className="location-section">
        <Paper className={classes.root}>
          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map(column => (
                    <TableCell
                      key={column.id}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <LocationsList {...props} />
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={props.locations.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </React.Suspense>
  );
}

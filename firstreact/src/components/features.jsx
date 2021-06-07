import {
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React from "react";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
const Features = () => {
  const classes = useStyles();
  return (
    <div>
      <div
        className="container"
        style={{
          marginTop: "10em",
        }}
      >
        <div className="row">
          <div
            className="col-8"
            style={{
              //   borderLeft: "2px solid lightgrey",
              //   borderRight: "1px solid lightgrey",
              //   borderBottom: "2px solid lightgrey",
              //   borderTop: "2px solid lightgrey",
              //   marginLeft: "40px",
              //   marginTop: "40px",
              //   marginBottom: "40px",
              marginRight: "2em",
            }}
          >
            {/* Table code started */}

            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Dessert (100g serving)</TableCell>
                    <TableCell align="right">Calories</TableCell>
                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow key="{row.name}">
                    <TableCell component="th" scope="row">
                      row.name
                    </TableCell>
                    <TableCell align="right">row.calories</TableCell>
                    <TableCell align="right">row.fat</TableCell>
                    <TableCell align="right">row.carbs</TableCell>
                    <TableCell align="right">row.protein</TableCell>
                  </TableRow>

                  {/* {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                  ))} */}
                </TableBody>
              </Table>
            </TableContainer>

            {/* Table code ending */}
          </div>
          <div
            className="col-4"
            style={{
              borderLeft: "1px solid lightgrey",
              borderRight: "2px solid lightgrey",
              borderBottom: "2px solid lightgrey",
              borderTop: "2px solid lightgrey",
              marginLeft: "1em",
              //   marginRight: "40px",
              //   marginTop: "40px",
              //   marginBottom: "40px",
            }}
          >
            <h1>sdasdasdasdas</h1>
            <h1>safajvbsvsdjkvjs</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

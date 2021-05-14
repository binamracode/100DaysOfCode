import {
  Button,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import React from "react";

const useStyles = makeStyles({
  greenBtn: {
    backgroundColor: green[500],
    margin: "0 10px 0 0",
    "&:hover": {
      backgroundColor: green[700],
    },
  },

  table: {
    width: "1000px",
    margin: "20px auto",
  },

  completed: {
    textDecoration: "line-through",
    color: green[500],
    fontWeight: "bold",
  },
});

const TodoTable = (props) => {
  const classes = useStyles();

  return (
    <>
      {props.data.length === 0 ? (
        <p style={{ marginTop: "20px" }}>No Work Founds</p>
      ) : (
        <TableContainer component={Paper} className={classes.table}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>S.n.</TableCell>
                <TableCell align="left">Work</TableCell>
                <TableCell align="right">Options</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.data.map((d, index) => (
                <TableRow key={d.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell align="left">
                    <span className={d.completed ? classes.completed : ""}>
                      {d.title}
                    </span>
                  </TableCell>
                  <TableCell align="right">
                    {!d.completed && (
                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.greenBtn}
                        onClick={() => props.onMarkAsCompleted(d.id)}
                      >
                        Mark As Completed
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => props.onRemove(d.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default React.memo(TodoTable);

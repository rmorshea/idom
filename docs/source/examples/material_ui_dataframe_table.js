import React from "./react.js";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  makeStyles,
} from "./@material-ui/core.js";
import htm from "./htm.js";

const html = htm.bind(React.createElement);

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 300,
  },
  header: { fontWeight: "bolder" },
});

export default {
  DataFrameTable: function (props) {
    const classes = useStyles();
    return html`
      <${Paper} className=${classes.root}>
        <${TableContainer} className=${classes.container}>
          <${Table} stickyHeader>
            <${TableHead}>
              <${TableRow}>
                ${props.dataframe.map(
                  (column, index) =>
                    html`<${TableCell}
                      className=${classes.header}
                      key="${index}"
                      >${column.name}<//
                    >`
                )}
              <//>
            <//>
            <${TableBody}>
              ${props.dataframe[0].values.map(
                (_, rowIndex) =>
                  html`<${TableRow} hover key="${rowIndex}">
                    ${props.dataframe.map(
                      (row, colIndex) =>
                        html`<${TableCell} key="${colIndex}">
                          ${row.values[rowIndex]}
                        <//>`
                    )}
                  <//>`
              )}
            <//>
          <//>
        <//>
      </${Paper}>
    `;
  },
};

import { TableCell, TableRow } from "@mui/material";
import React from "react";

const DataCard = ({ row }) => {
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row">
        {row.name}
      </TableCell>
      <TableCell align="right">{row.firstName}</TableCell>
      <TableCell align="right">{row.lastName}</TableCell>
      <TableCell align="right">{row.email}</TableCell>
      <TableCell align="right">{row.phoneNumber}</TableCell>
    </TableRow>
  );
};

export default DataCard;

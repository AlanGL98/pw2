import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IDelete, IEdit } from '../../../elementos/iconos/Iconos';
import {ISave } from '../../../elementos/iconos/Iconos';

function createData(name, img, orden, acciones) {
  return {name, img, orden, acciones};
}

const rows = [
  createData('Categoría 1', 159, 1, 24),
  createData('Categoría 2', 237, 2, 37),
  createData('Categoría 3', 262, 3, 24),
  createData('Categoría 4', 305, 4, 67),
  createData('Categoría 5', 356, 5, 49),
];

export default function BasicTable() {
  return (
    <>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell align="left">Nombre</TableCell>
                <TableCell align="center">Cargar imagen</TableCell>
                <TableCell align="center">Orden</TableCell>
                <TableCell align="center">Acciones</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell align="left"component="th" scope="row">{row.name}</TableCell>
                <TableCell align="center">{row.img}</TableCell>
                <TableCell align="center">{row.orden}</TableCell>
                <TableCell align="center"><IEdit/></TableCell>
                <TableCell align="center"><IDelete/></TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>

        <button type="submit"><ISave/>Guardar</button>
        
    </>
  );
}
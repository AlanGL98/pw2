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
import { NavBtnLink } from '../../../elementos/NavbarElements';
import { Header } from '../../../elementos/RankingElements';

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
    <Header>
      <h1>Administrar categorías</h1>
      </Header>
        <TableContainer component={Paper}>
        <Table sx={{ height: 200 }} aria-label="simple table">
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
                <TableCell align="center"><NavBtnLink to='/edit-categoria'><IEdit/></NavBtnLink></TableCell>
                <TableCell align="center"><NavBtnLink><IDelete/></NavBtnLink></TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
        <br></br>
        <NavBtnLink to='/new-categoria' align="center">Crear nueva categoria</NavBtnLink>
        <br></br>
        
    </>
  );
}
import React, {Component} from "react";
import { Helmet } from "react-helmet";
import {Header, Titulo, ContenedorHeader, ContenedorBotones} from '../../elementos/RankingElements';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';
import Cards from '../Cards';
import TestFunc from "../TestFunc";

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { InputLabel } from "@mui/material";

import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';






  export default function Ranking () {
    const [ordenar, setOrdenar] = React.useState('');

    const handleChange = (event) => {
        setOrdenar(event.target.value);
    };

    const Categorias = [
        { title: 'Arcade'},
        { title: 'Accion'},
        { title: 'Aventura'},
        { title: 'Terror'},
        { title: 'Musicales'},
        { title: 'Deportes'},
        { title: 'Juegos de mesa'},
        { title: 'Estrategias'},
        { title: 'Simulacion'}
    
    ];
    
    const Ordenar = [
        { title: 'Más recientes'},
        { title: 'Más antiguas'},
        { title: 'Más populares'},
        { title: 'Menos populares'}
    
    ];
    
 

   
        return (
            <>
                <Helmet>
                    <title>Yo Opino</title>
                </Helmet>
                <Header>
                    <ContenedorHeader>
                        <Titulo>Rankings</Titulo>
                        <ContenedorBotones>

                        <Autocomplete
                                multiple
                                limitTags={1}
                                id="size-small-multiple-limit-tags"
                                options={Categorias}
                                getOptionLabel={(option) => option.title}
                                defaultValue={[Categorias[1]]}
                                renderInput={(params) => (
                                    <TextField {...params} label="Categorias" placeholder="Categoria" />
                                )}
                                sx={{ width: '300px' }}
                        />

                        <Box sx={{ minWidth: 200 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Ordenamiento</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={ordenar}
                                label="Ordenamiento"
                                onChange={handleChange}
                                >
                                <MenuItem value={1}>Más recientes</MenuItem>
                                <MenuItem value={2}>Más antiguas</MenuItem>
                                <MenuItem value={3}>Más populares</MenuItem>
                                <MenuItem value={4}>Menos populares</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>

                        </ContenedorBotones>
                    </ContenedorHeader>
                </Header>
                
                <Cards />

                {/* <Test /> */}

                <TestFunc />
            </>
        )

}


// function Ranking() {
//     const [dropdown, setDropdown]=useState(false);
//     const abrirCerrarDropdown=()=>{
//         setDropdown(!dropdown);
//     }

//     axios.get('http://localhost:3900/yopino/opiniones')
//     .then((res) =>{
//         console.log(res.data);
//     });

//     return ( 
//         <>
//             <Helmet>
//                 <title>Yo Opino</title>
//             </Helmet>
//             <Header>
//                 <ContenedorHeader>
//                     <Titulo>Rankings</Titulo>
//                     <ContenedorBotones>
//                         <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown} size="lg">
//                             <DropdownToggle caret className="btn-dark">
//                                 Categorias
//                             </DropdownToggle>

//                             <DropdownMenu>
//                                 <DropdownItem>Arcade</DropdownItem>
//                                 <DropdownItem>Accion</DropdownItem>
//                                 <DropdownItem>Aventura</DropdownItem>
//                                 <DropdownItem>Terror</DropdownItem>
//                                 <DropdownItem>Musicales</DropdownItem>
//                                 <DropdownItem>Deportes</DropdownItem>
//                                 <DropdownItem>Juegos de mesa</DropdownItem>
//                                 <DropdownItem>Estrategia</DropdownItem>
//                                 <DropdownItem>Simulacion</DropdownItem>
//                             </DropdownMenu>

//                             </Dropdown>


//                             <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown} size="lg">
//                             <DropdownToggle caret className="btn-dark">
//                                 Ordenar
//                             </DropdownToggle>

//                             <DropdownMenu>
//                                 <DropdownItem>Mas recientes</DropdownItem>
//                                 <DropdownItem>Mas populares</DropdownItem>
//                                 <DropdownItem>Menos populares</DropdownItem>
//                             </DropdownMenu>

//                             </Dropdown>
//                     </ContenedorBotones>
//                 </ContenedorHeader>
//             </Header>
            
//             <Cards />
//         </>
//      );
// }

// export default Ranking;
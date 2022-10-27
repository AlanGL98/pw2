import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import WebFont from 'webfontloader';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

WebFont.load({
  google: {
    families: ['Work Sans:400,500,700', 'sans serif']
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Button variant="contained" disableElevation>Astro</Button>
    <Button variant="outlined" startIcon={<DeleteIcon />}>
      Delete
    </Button>
    <Button variant="contained" endIcon={<SendIcon />}>
      Send
    </Button>
  </React.StrictMode>
);

// No tocar esta parte
// const Index = () => {
//   return ( 
//     <App />
//    );
// }
// ReactDOM.createRoot(document.getElementById('root')).render(<Index />);

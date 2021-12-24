import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ChakraProvider, theme} from '@chakra-ui/react';
import { AuthProvider} from './firebase/context';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <AuthProvider>
    <App />
    </AuthProvider>

    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


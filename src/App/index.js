import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

function App() {
    return(
        <ThemeProvider theme={theme}></ThemeProvider>
    );
}







export default App;
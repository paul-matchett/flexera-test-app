import React from 'react';
import Home from './Page/Home';
import { ThemeProvider } from 'styled-components';
import { theme } from './styled';

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    );
  }
}

export default App;
import React from 'react';

import { Header, HeaderTitle,  Main, Footer } from './styled';

const Layout = ({children}) => {

  return (
    <>
      <Header>
        <HeaderTitle>Flexera Test</HeaderTitle>
      </Header>
      <Main>
        {children}
      </Main>
      <Footer />
    </>
  );
};

export default Layout;
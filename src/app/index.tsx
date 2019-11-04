import React from 'react';
import Providers from 'app/Providers';
import { MainRoutes } from 'app/Routes';

function App() {
  return (
    <Providers>
      <MainRoutes />
    </Providers>
  );
}

export default App;

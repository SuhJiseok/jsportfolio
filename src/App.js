import { Route, Routes } from 'react-router-dom';
import './styles/App.scss';

import MainPage from './Routes/MainPage';
import { useEffect } from 'react';
import { NavMenuProvider } from './hooks/NavMenuContext';
import { animateScroll as scroll } from 'react-scroll';




function App() {
  

  
  return (
    <NavMenuProvider>
    <div className='app'>
      <Routes>
        <Route index element={<MainPage/>} />
      </Routes>

    </div>
    </NavMenuProvider>

  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './styles/App.scss';

import MainPage from './Routes/MainPage';
import { useEffect } from 'react';
import { NavMenuProvider } from './hooks/NavMenuContext';
import { animateScroll as scroll } from 'react-scroll';




function App() {
  
  useEffect(() => {
    const handleWheel = (event) => {
        event.preventDefault();
        const scrollAmount = event.deltaY > 0 ? 400 : -400;
        scroll.scrollMore(scrollAmount, { duration: 400});
    };
    
    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
        window.removeEventListener('wheel', handleWheel);
    };
}, []);


  
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

import { Route, Routes } from 'react-router-dom';
import './styles/App.scss';

import MainPage from './Routes/MainPage';

function App() {
  return (

    <div className='app'>
      <Routes>
        <Route index element={<MainPage/>} />
      </Routes>

    </div>

  );
}

export default App;

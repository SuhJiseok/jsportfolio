import { Route, Routes } from 'react-router-dom';
import './styles/App.scss';
import React, { Suspense } from 'react';
import MainPage from './Routes/MainPage';
import { useEffect, useState } from 'react';
import { NavMenuProvider } from './hooks/NavMenuContext';
import Loading from './components/Loading';

const LazyMainPage = React.lazy(() => import('./Routes/MainPage'));



function App() {
  const [isLoading, setIsLoading] = useState(true);

   // App 컴포넌트가 마운트되면 일정 시간 후 로딩 상태를 false로 설정
   useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false),2500); // 5초 후 로딩 상태 종료
    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 클리어
  }, []);

  // 로딩 중이면 Loading 컴포넌트 렌더링
  if (isLoading) {
    return <Loading />;
  }

  return (
    <NavMenuProvider>
    <div className='app'>
    <Suspense fallback={<Loading />}>
          <Routes>
            <Route index element={<LazyMainPage/>} />
          </Routes>
        </Suspense>

    </div>
    </NavMenuProvider>

  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { MainLayout } from './components/layouts/MainLayout';
import { AuthLayout } from './components/layouts/AuthLayout';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/*" element={<AuthLayout />}/>
        <Route path="/*" element={<MainLayout />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

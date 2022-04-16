import logo from './logo.svg';
import './App.css';
import Page from './todo/Page';
import Data from './todo/Data';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Page />} />
          <Route path='/data/:mode' element={<Data />}/>
          <Route path='/data/:mode/:id' element={<Data />}/>
        </Routes>
      </BrowserRouter>
      <Outlet />
    </div>
  );
}

export default App;

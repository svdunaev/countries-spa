import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Header } from './components/Header';
import { Main } from './components/Main';

import { HomePage } from './pages/HomePage';
import { Details } from './pages/Details';
import { NotFound } from './pages/NotFound';

function App() {

  const [countries, setCountries] = useState([]);
  
  return (
    <>
    <Header></Header>
    <Main>
      <Routes>
        <Route path='/countries-spa' element={<HomePage countries={countries} setCountries={setCountries} />} />
        <Route path='country/:name' element={<Details />} />
        <Route element={<NotFound />}/>
      </Routes>
    </Main>
    </>
  );
}

export default App;

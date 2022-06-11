import logo from './logo.svg';
import './App.css';
import Anket from './components/anket';
import Header from './components/header';
import { Routes, Route, Link } from 'react-router-dom';
import Coll from './pages/Coll';
import * as React from 'react';
import Spec from './pages/Spec';
import Anketa from './pages/Anketa';
import Main from './pages/Main';
export const AnketContext = React.createContext('');
export const HeaderContext = React.createContext('');
export const CollContext = React.createContext('');
export const SpecContext = React.createContext('');
function App() {
 
  const [anketValue, setAnketValue] = React.useState('');
  const [headerValue, setHeaderValue] = React.useState('');
  const [collValue, setCollValue] = React.useState([]);
  const [specValue, setSpecValue] = React.useState('');
  return (
    <div className="App ">
       <AnketContext.Provider value={{ anketValue, setAnketValue }}>
            <HeaderContext.Provider value={{ headerValue, setHeaderValue }}>
              <CollContext.Provider value={{ collValue, setCollValue }}>
              <SpecContext.Provider value={{ specValue, setSpecValue }}>
      
             <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/coll" element={<Coll />} />
              <Route path="/spec" element={<Spec />} />
              <Route path="/anketa" element={<Anketa />} />
            
             </Routes>
             </SpecContext.Provider>
             </CollContext.Provider>
            </HeaderContext.Provider>
      </AnketContext.Provider>
      
    </div>
  );
}

export default App;


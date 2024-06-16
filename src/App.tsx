import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './components/MainPage/MainPage.tsx';
import FavoritePage from './components/FavoritePage/FavoritePage.tsx';
import Header from './components/Header/Header.tsx';
import SelectedItem from './components/SelectedItem/SelectedItem.tsx';
import Footer from './components/Footer/Footer.tsx'
import { SelectedItemProvider } from './components/Context/SelectedItemContext.tsx';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.tsx';




function App() {
  return (
    <BrowserRouter>
        <ErrorBoundary>
        <Header />
      <div className='wrapper'>
        <SelectedItemProvider>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/favorites' element={<FavoritePage />} />
            <Route path='/artworks/:id' element={<SelectedItem />} />
          </Routes>
        </SelectedItemProvider>
        <Footer />
      </div>
      </ErrorBoundary>
    </BrowserRouter>

  );

}



export default App;

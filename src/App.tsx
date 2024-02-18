import { Routes, Route } from 'react-router-dom'

import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';

import AboutMePage from './pages/AboutMePage';
import HomePage from './pages/HomePage';
import BooksPortfolioPage from './pages/BooksPortfolioPage';
import ContactPage from './pages/ContactPage';
import QuotesPage from './pages/QuotesPage';

function App() {
  return <div>
    <NavbarComponent />

    <Routes>
      <Route path='/' Component={HomePage} />
      <Route path='/aboutme' Component={AboutMePage} />
      <Route path='/books' Component={BooksPortfolioPage} />
      <Route path='/contact' Component={ContactPage} />
      <Route path='/quotes' Component={QuotesPage} />
    </Routes>

    <FooterComponent />
  </ div>;
}

export default App

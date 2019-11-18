import React from 'react';
import './styles/index.scss';
import NavBar from './components/features/NavBar/NavBar';
import Footer from './components/features/Footer/Footer';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        This is me-app
      </header>
      <Footer />
    </div>
  );
}

export default App;

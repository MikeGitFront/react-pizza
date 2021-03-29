import './App.css';
import { Navbar } from './components/Navbar';
import { BrowserRouter, Switch } from 'react-router-dom'
import { HomePage } from './components/HomePage';
import { Footer } from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="app-wrapper">
          <Navbar />
          <Switch>
            <HomePage />
          </Switch>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

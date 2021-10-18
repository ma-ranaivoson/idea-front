import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="main-content">
      <Header />
      <div className="content">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
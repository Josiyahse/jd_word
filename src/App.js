import './App.css';
import Compteur from './components/Compteur';
import Globe from './components/Globe';
import Sideboutton from './components/sidebare/Sideboutton';

function App() {
  return (
    <div className="App">
      <Globe/>
      <Compteur/>
      <Sideboutton/>
    </div>
  );
}

export default App;

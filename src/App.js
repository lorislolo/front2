import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import Titulo from './components/Titulo';
import MinhaFoto from './components/MinhaFoto';
import Cartao from './components/Cartao';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Cartao
        Titulo ="Meu novo titulo"
        Subtitulo = "Subtitulo legal"
        />
        <Cartao
        Titulo ="Meu novo titulo"
        Subtitulo = "Subtitulo legal"
        />
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

import {Hooks} from './hooks';
import {Components} from './components';

function App() {
  const useAdminstrateur = Hooks.useAdministrateur();

  return (
    <div className="App">
      <Components.AdministrateurForm 
      useAdministrateur={useAdminstrateur}/>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;

import './App.css';
import Provider from './Context/Provider';
import Routes from './Routes/Routes';

function App() {
  return (
    <Provider>
      <Routes />
    </Provider>
  );
}

export default App;

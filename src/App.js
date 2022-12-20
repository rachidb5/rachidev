import './App.css';
import Provider from './Context/Provider';
import Routes from './Routes/Routes';
import Header from './Components/Header';

function App() {
  return (
    <Provider>
      <Header />
      <Routes />
    </Provider>
  );
}

export default App;

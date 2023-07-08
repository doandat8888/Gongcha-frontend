import './App.scss';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import RoutesApp from './configs/routes';

function App() {
  return (
    <BrowserRouter>
        <RoutesApp />
    </BrowserRouter>
  );
}

export default App;

import {
  Route,
  Routes,
} from "react-router-dom";
import Header from './Components/Header';
import Home from './Home';
import Footer from './Components/Footer';
import './App.css';
import ReactGA from 'react-ga';
const TRACKING_ID = "UA-179143221-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;

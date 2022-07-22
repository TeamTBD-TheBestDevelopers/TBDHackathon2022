// import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import LyricPageMain from './components/LyricPageMain';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}>
      </Route>
      <Route path="/LyricPageMain" element={<LyricPageMain/>}>
      
      </Route>
    </Routes>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;

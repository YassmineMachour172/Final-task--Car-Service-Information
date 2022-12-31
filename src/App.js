import { HashRouter as Router, Routes , Route } from 'react-router-dom';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    // <div id="App" style={{
    //     backgroundImage:`url(${background})`,
    //     minHeight: "100vh",
    //     backgroundSize: "cover"
    //     }}>
    <div id='App'>
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes> 
        </Router>  
    </div>
);
}

export default App;

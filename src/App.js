import { HashRouter as Router, Routes , Route } from 'react-router-dom';
import Home from './components/Home/Home';
import LogIn from './components/LogIn/LogIn';
import SignUp from './components/SignUp/SignUp';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    // <div id="App" style={{
    //     backgroundImage:`url(${background})`,
    //     minHeight: "100vh",
    //     backgroundSize: "cover"
    //     }}>
    // hello Yassmine
    <div id='App'>
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/logIn" element={<LogIn/>}/>
                <Route path="/signUp" element={<SignUp/>}/>
                <Route path="/forgotPassword" element={<ForgotPassword/>}/>
            </Routes> 
        </Router>  
    </div>
);
}

export default App;

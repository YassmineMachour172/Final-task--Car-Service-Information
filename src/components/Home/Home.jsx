import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useNavigate  } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();

    const handleClickLogIn = () => {
        navigate('/logIn');
    };

    const handleClickSignUp = () => {
        navigate('/signUp');
    };

    return (
        <div id='Home' className='backgroundimg'>
            <div className='container'>
                <h1 className='text-center'>Welcome to Car Service Information</h1>
                <div className='buttons-container'>
                    <Button className='' onClick={handleClickLogIn}>Log In</Button>
                    <Button className='' onClick={handleClickSignUp}>Sign Up</Button>
                </div>
            </div>
        </div>
    );
};

export default Home;
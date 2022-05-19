import React from 'react';
import { Spinner, ToastContainer } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebase.init'

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    if (error) {
        toast(<p>{error.message}</p>)
    }
    if (loading) {
        return <Spinner animation="border" />
    }
    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div className="App flex justify-center items-center">
            <button
                className='mt-5 bg-dark text-light rounded-3 px-5 py-2 fw-bold'
                onClick={() => signInWithGoogle()}>Sign In with Google
            </button>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';

const ErrorPage = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (

    <>
    <Header></Header>
    <div className="d-flex align-items-center justify-content-center py-5 my-5 bg-light">
      <div className="text-center">
        <h1 className="display-1 fw-bold text-danger">404</h1>
        <p className="fs-3">
          <span className="text-danger">Oops!</span> Page not found.
        </p>
        <p className="lead">
          The page you’re looking for doesn’t exist or has been removed.
        </p>
        <button className="btn btn-primary" onClick={goHome}>
          Go Back Home
        </button>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default ErrorPage;

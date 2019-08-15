import React from 'react';
import { Redirect } from 'react-router-dom';
import FormFilter from '../components/FormFilter';
import Header from '../components/Header';

const Home = () => {
  const login = localStorage.getItem('login');
  const senha = localStorage.getItem('senha');

  if (login === null && senha === null) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      <Header />
      <div className="container homeContent">
        <FormFilter />
      </div>
    </>
  );
};

export default Home;

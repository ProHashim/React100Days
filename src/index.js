import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Header from './components/Header';
import Main from './components/main';
import Banner from './components/Banner';





const Home = () => {
  var title = "Pre React Things"
  document.title = title
  return (
    <div>
      <Header />
      <Banner />
      <Main />
    </div>
  )
}


ReactDOM.render(
  <Home />,
  document.getElementById('root')
);

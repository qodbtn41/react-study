import React from 'react';
import { Route } from 'react-router';
import NewsPage from './pages/NewsPage';

const App = () => {
  return <Route path="/:category?" component={NewsPage} />;
};

export default App;
// 2b9d5dc62ab042748713468e4f7aa8f9

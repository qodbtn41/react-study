import React, { useCallback, useState } from 'react';
import axios from 'axios';
import NewsList from './components/NewsList';
import Cartegories from './components/Cartegories';

const App = () => {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback((category) => setCategory(category), []);
  return (
    <>
      <Cartegories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  );
};

export default App;
// 2b9d5dc62ab042748713468e4f7aa8f9
